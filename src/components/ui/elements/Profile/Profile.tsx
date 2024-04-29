import React from 'react';
import Image from 'next/image';
import { Box } from '../Box';

export const Profile: React.FC = () => {
  return (
    <Box className="cursor-pointer">
      <Image
        className="rounded-full"
        src="/images/placeholder-avatars.png"
        alt=""
        width={32}
        height={32}
      />
    </Box>
  );
};
