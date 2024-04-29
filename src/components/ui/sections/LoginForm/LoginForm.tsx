'use client';
import React from 'react';
import { FlashMessageData, Flex, Input, SubButton } from '@/components';
import { login } from '@/services/server-actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSystemUIStore } from '@/stores';

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

export const LoginForm: React.FC = () => {
  const [formKey, setFormKey] = React.useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const flash = searchParams.get('flash');
  const { setFlashMessage, clearFlashMessage } = useSystemUIStore(
    (state) => state,
  );

  const _action = (formData: FormData) => {
    setFormKey(formKey + 1);
    login(formData);
  };

  React.useEffect(() => {
    if (flash) {
      const flashMessageData = _createFlashMessage(Number(flash));
      if (flashMessageData) setFlashMessage(flashMessageData);
    }

    return clearFlashMessage;
  }, [flash, router, formKey, setFlashMessage, clearFlashMessage]);

  return (
    <Flex className="flex-col justify-center mx-auto w-full">
      <form className="flex flex-col gap-6 mt-8" action={_action} key={formKey}>
        <Input name="email" type="email" id="email" label="이메일" />
        <Input name="password" type="password" id="password" label="비밀번호" />
        <SubButton>로그인</SubButton>
      </form>
    </Flex>
  );
};
