'use client';
import React from 'react';
import { FlashMessageData, Flex, Input, SubButton } from '@/components';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSystemUIStore } from '@/stores';
import { createClient } from '@/utils/supabase/client';

export const LoginForm: React.FC = () => {
  const [formKey, setFormKey] = React.useState(0);
  const [pending, setPending] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('flash');
  const { setFlashMessage, clearFlashMessage } = useSystemUIStore(
    (state) => state,
  );

  const _login = async (formData: FormData) => {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const supabase = createClient();
    setPending(true);
    const { error } = await supabase.auth.signInWithPassword(data);
    setPending(false);

    if (error) {
      location.href = `/login?flash=${error.status}`;
    } else {
      location.href = '/';
    }
  };

  const _action = async (formData: FormData) => {
    setFormKey(formKey + 1);
    return await _login(formData);
  };

  React.useEffect(() => {
    if (urlQuery) {
      const flashMessageData = _createFlashMessage(Number(urlQuery));
      if (flashMessageData) setFlashMessage(flashMessageData);
    }

    return clearFlashMessage;
  }, [urlQuery, router, formKey, setFlashMessage, clearFlashMessage]);

  return (
    <Flex className="flex-col justify-center mx-auto w-full">
      <form className="flex flex-col gap-6 mt-8" action={_action} key={formKey}>
        <Input name="email" type="email" id="email" label="이메일" />
        <Input name="password" type="password" id="password" label="비밀번호" />
        <SubButton useServerAction={false} pending={pending}>
          로그인
        </SubButton>
      </form>
    </Flex>
  );
};

const _createFlashMessage = (
  statusCode: number,
): FlashMessageData | undefined => {
  switch (statusCode) {
    case 400:
      return {
        type: 'error',
        message: '잘못된 이메일 또는 암호입니다.',
      };
  }
};
