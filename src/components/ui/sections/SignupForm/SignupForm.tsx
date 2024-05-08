'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import {
  Flex,
  Text,
  Box,
  Grid,
  SignupFormHeader,
  Input,
  SubButton,
} from '@/components';
import { signup } from '@/services/server-actions';

export const SignupForm: React.FC = () => {
  const [state, action] = useFormState(signup, undefined);

  return (
    <Flex className="flex-col justify-center mx-auto py-10 px-4 sm:px-10 w-full md:max-w-600">
      <SignupFormHeader />
      <form
        className="flex flex-col gap-8 mt-12"
        autoComplete="off"
        action={action}
      >
        <Grid className="grid-cols-2 gap-4">
          <Input
            name="first_name"
            id="first_name"
            label="이름"
            required
            error={state?.errors.first_name}
          />
          <Input
            name="last_name"
            id="last_name"
            label="성"
            error={state?.errors.last_name}
          />
        </Grid>
        <Box>
          <Input
            type="email"
            name="email"
            id="email"
            label="이메일"
            required
            error={state?.errors.email}
          />
        </Box>
        <Box>
          <Input
            name="name"
            id="name"
            label="사용자 이름"
            subLabel="문자, 숫자 및 밑줄만 사용 가능"
            required
            error={state?.errors.name}
          />
        </Box>
        <Box>
          <Input
            type="password"
            name="password"
            id="password"
            label="암호"
            subLabel="최소 8자"
            required
            error={state?.errors.password}
          />
        </Box>
        <SubButton type="submit">가입</SubButton>
      </form>
      <Text className="text-xs text-stone-500 text-center mt-6">
        가입하는 경우, 귀하는 이용약관 및 개인정보 취급방침에 동의하는 것입니다.
      </Text>
    </Flex>
  );
};
