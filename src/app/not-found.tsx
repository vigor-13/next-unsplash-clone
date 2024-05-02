import React from 'react';
import { Text, Button } from '@/components';

export default function NotFound() {
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="mr-5 text-right">
        <Text as="h1" className="font-bold text-4xl">
          404
        </Text>
        <Text className="mt-2 text-stone-400">페이지를 찾을 수 없습니다.</Text>
      </div>
      <Button as="a" href="/" prefetch={false}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}
