import React from 'react';
import Image from 'next/image';
import { Flex } from '@/components';

export const NoResult: React.FC = () => {
  return (
    <Flex className="justify-center">
      <Image
        className="rounded-full"
        src="/images/no-result.png"
        alt=""
        width={300}
        height={225}
      />
    </Flex>
  );
};
