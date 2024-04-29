'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { SignupFormSchema, SignupFormState } from '@/libs/schemes';

export async function signup(state: SignupFormState, formData: FormData) {
  /**
   * 1. 폼 입력 값 유효성 검증
   */
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

  /**
   * 2. 데이터베이스에 유저 데이터 추가
   */
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
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
    // TODO: 에러 페이지
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function login(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect(`/login?flash=${error.status}`);
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
