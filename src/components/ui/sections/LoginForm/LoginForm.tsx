'use client';
import React from 'react';
import { Flex, Input, SubButton } from '@/components';

export const LoginForm: React.FC = () => {
  return (
    <Flex className="flex-col justify-center mx-auto w-full">
      <form className="flex flex-col gap-6 mt-8">
        <Input name="email" type="email" id="email" label="이메일" />
        <Input name="password" type="password" id="password" label="비밀번호" />
        <SubButton>로그인</SubButton>
      </form>
    </Flex>
  );
};
