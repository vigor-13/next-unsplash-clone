import React from 'react';
import Image from 'next/image';
import { Box, Flex } from '@/components';

export const NoResult: React.FC = () => {
  return (
    <Flex className="justify-center items-center h-full">
      <Box>
        <Image
          className="rounded-full"
          src="/images/no-result.png"
          alt=""
          width={300}
          height={225}
        />
      </Box>
    </Flex>
  );
};
