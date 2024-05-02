'use server';

import { revalidatePath } from 'next/cache';
import { RedirectType, redirect } from 'next/navigation';

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
    return redirect(`/signup?flash=${error.status}`);
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

/**
 * TODO:
 * NOTE:
 * - 로그인 스크린을 라우트 인터셉트로 모달에서 제공할때 서버 액션으로 리디렉션하면
 * - 라우트 인터셉트에서 걸려 경로를 찾을 수 없어 not found 페이졸 이동함
 * - 현재로서 어떻게 해결할 방버이 없어서 임시로 login 액션을 클라이언트에서 수행하고
 * - 클라이언트에서 location.href로 페이지를 이동하여 라우트 인터셉터를 우회하는 방식을 사용함.
 * - 이 방식의 문제점은 form에서 useFormStatus를 사용할 수 없음...
 */
// export async function login(formData: FormData) {
//   const _formData = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };

//   const supabase = createClient();
//   const { error, data } = await supabase.auth.signInWithPassword(_formData);

//   if (error) {
//     redirect(`/login?flash=${error.status}`);
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');
// }
