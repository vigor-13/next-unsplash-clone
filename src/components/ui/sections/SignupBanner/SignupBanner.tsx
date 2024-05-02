import React from 'react';
import { Box, Grid, Flex, Logo, Text } from '@/components';
import Image from 'next/image';

export const SignupBanner: React.FC = () => {
  return (
    <Grid className="h-full">
      <Box className="relative" style={{ gridArea: '1/1/2/2' }}>
        <Image
          className="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1711950901044-fa6215a9c59b?h=2154.857142857143&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzODYxOTg3fA&ixlib=rb-4.0.3"
          alt=""
          width={1200}
          height={2155}
        />
      </Box>
      <Flex
        className="flex-col items-start p-10 z-10 bg-black bg-opacity-40"
        style={{ gridArea: '1/1/2/2' }}
      >
        <Logo color="white" size={52} />
        <Flex className="my-auto flex-col gap-5">
          <Text as="h2" className="font-bold text-5xl leading-tight text-white">
            여기에서 창작 시작하기
          </Text>
          <Text className="text-xl text-white">
            다른 곳에서는 찾을 수 없는 5,825,610장의 무료 고해상도 사진을 이용해
            보세요.
          </Text>
        </Flex>
        <Text className="text-white hidden md:block">
          Luke Miller에 의해 2024년 4월 10일에 업로드됨
        </Text>
      </Flex>
    </Grid>
  );
};
