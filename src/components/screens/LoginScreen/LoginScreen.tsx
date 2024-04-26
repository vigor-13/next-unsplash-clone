import React from 'react';
import Link from 'next/link';
import { Text, Flex, Box, OauthButton } from '@/components';

export const LoginScreen: React.FC = () => {
  return (
    <Flex className="w-full items-center justify-center">
      <Box className="max-w-600 w-full px-6">
        <Flex className="flex-col items-center p-12">
          <Text className="mb-3 font-bold text-2xl">로그인</Text>
          <Text className="mb-8">재방문을 환영합니다.</Text>
          <OauthButton provider="google" />
        </Flex>
        <Flex className="w-full py-10 border justify-center">
          <Text>
            계정이 없으세요?{' '}
            <Link href="/signup" className="underline text-stone-500">
              가입
            </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
