'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { Text, Flex, Box, OauthButton, LoginForm } from '@/components';

export const LoginScreen: React.FC = () => {
  return (
    <Flex className="w-full items-center justify-center">
      <Box className="max-w-600 w-full px-6">
        <Flex className="flex-col items-center  py-12 md:px-12">
          <Text className="mb-3 font-bold text-3xl">로그인</Text>
          <Text className="text-sm">재방문을 환영합니다.</Text>
          <Box className="w-full my-8">
            <OauthButton
              provider="google"
              onClick={() => alert('준비중입니다.')}
            />
          </Box>
          <Text className="text-sm">또는</Text>
          <Suspense>
            <LoginForm />
          </Suspense>
        </Flex>
        <Flex className="w-full py-10 border justify-center">
          <Text className="text-sm">
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
