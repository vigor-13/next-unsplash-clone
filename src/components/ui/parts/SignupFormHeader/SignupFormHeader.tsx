import React from 'react';
import { Text } from '@/components';
import Link from 'next/link';

export const SignupFormHeader: React.FC = () => {
  return (
    <header className="text-center">
      <Text as="h1" className="font-bold text-5xl mb-4">
        Unsplash 가입
      </Text>
      <Text className="text-sm">
        이미 계정이 있으세요?{' '}
        <Link href="/login" className="underline">
          로그인
        </Link>
      </Text>
    </header>
  );
};
