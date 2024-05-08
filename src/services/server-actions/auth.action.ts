'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SignupFormSchema, SignupFormState } from '@/libs/schemes';
import { cookies } from 'next/headers';
import { ValidErrorCode, validateErrorCode } from '@/utils/error';

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
    redirect(`/signup?flash=${validateErrorCode(error.code)}&t=${currentTime}`);
  }

  // 클라이언트에 이메일 인증이 필요햔지 알림 메시지 표시하기 위해 필요
  cookies().set('user', JSON.stringify(data.user));

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function login(formData: FormData) {
  const _formData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword(_formData);

  if (error) {
    const currentTime = new Date().getTime();
    let errorCode = error.code as ValidErrorCode;
    if (!errorCode && error.status === 400) {
      errorCode = 'invalid_login_credentials';
    }

    redirect(`/login?flash=${validateErrorCode(errorCode)}&t=${currentTime}`);
  }

  // 클라이언트 Authentication 컴포넌트에서 zustand store에 저장
  cookies().set('user', JSON.stringify(data.user));

  revalidatePath('/', 'layout');
  redirect('/');
}
