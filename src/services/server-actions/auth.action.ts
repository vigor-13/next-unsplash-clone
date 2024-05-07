'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SignupFormSchema, SignupFormState } from '@/libs/schemes';
import { cookies } from 'next/headers';

const createSignupFlashCode = (status: number | undefined) => {
  switch (status) {
    case 400:
      return 'invalid-login-credentials';
    default:
      return 'unknown-errors';
  }
};

export async function signup(state: SignupFormState, formData: FormData) {
  const validatedData = SignupFormSchema.safeParse({
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  const { error, data } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        name: formData.get('name'),
      },
    },
  });

  if (error) {
    const currentTime = new Date().getTime();
    redirect(
      `/signup?flash=${createSignupFlashCode(error.status)}&t=${currentTime}`,
    );
  }

  // 클라이언트에 이메일 인증이 필요햔지 알림 메시지 표시하기 위해 필요
  cookies().set('user', JSON.stringify(data.user));

  revalidatePath('/', 'layout');
  redirect('/');
}

const createLoginFlashCode = (status: number | undefined) => {
  switch (status) {
    case 400:
      return 'invalid-login-credentials';
    default:
      return 'unknown-errors';
  }
};

export async function login(formData: FormData) {
  const _formData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword(_formData);

  if (error) {
    const currentTime = new Date().getTime();
    redirect(
      `/login?flash=${createLoginFlashCode(error.status)}&t=${currentTime}`,
    );
  }

  // 클라이언트 Authentication 컴포넌트에서 zustand store에 저장
  cookies().set('user', JSON.stringify(data.user));

  revalidatePath('/', 'layout');
  redirect('/');
}
