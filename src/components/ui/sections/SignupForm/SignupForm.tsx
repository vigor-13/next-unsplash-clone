import React from 'react';
import {
  Flex,
  Text,
  Box,
  Grid,
  SignupFormHeader,
  Input,
  SubButton,
} from '@/components';

export const SignupForm: React.FC = () => {
  return (
    <Flex className="flex-col justify-center mx-auto p-10 w-full md:max-w-600">
      <SignupFormHeader />
      <form action="" className="flex flex-col gap-6 mt-12">
        <Grid className="grid-cols-2 gap-4">
          <Input id="name" label="이름" />
          <Input id="family_name" label="성" />
        </Grid>
        <Box>
          <Input id="email" label="이메일" />
        </Box>
        <Box>
          <Input
            id="nickname"
            label="사용자 이름"
            subLabel="문자, 숫자 및 밑줄만 사용 가능"
          />
        </Box>
        <Box>
          <Input id="password" label="암호" subLabel="최소 8자" />
        </Box>
        <SubButton>가입</SubButton>
      </form>
      <Text className="text-xs text-stone-500 text-center mt-6">
        가입하는 경우, 귀하는 이용약관 및 개인정보 취급방침에 동의하는 것입니다.
      </Text>
    </Flex>
  );
};
