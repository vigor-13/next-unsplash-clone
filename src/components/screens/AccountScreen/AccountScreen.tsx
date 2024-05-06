import React from 'react';
import { Flex, Text, Button } from '@/components';

export const AccountScreen: React.FC = () => {
  return (
    <Flex className="flex-col gap-4 items-center justify-center flex-1">
      <Text className="text-stone-500">준비중입니다!</Text>
      <Button as="a" href="/">
        홈으로
      </Button>
    </Flex>
  );
};
