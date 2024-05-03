'use client';
import React from 'react';
import { Text, Button, Flex, Box } from '@/components';

const NotFound: React.FC = () => {
  return (
    <Flex className="flex flex-1 h-screen justify-center items-center">
      <Box className="mr-5 text-right">
        <Text as="h1" className="font-bold text-4xl">
          404
        </Text>
        <Text className="mt-2 text-stone-400">페이지를 찾을 수 없습니다.</Text>
      </Box>
      <Button
        onClick={() => {
          location.href = '/';
        }}
      >
        홈으로 돌아가기
      </Button>
    </Flex>
  );
};

export default NotFound;
