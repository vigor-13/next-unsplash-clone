'use client';
import React from 'react';
import { Box, PhotoList } from '@/components';
import { useUserStore } from '@/stores';

export interface UserLikesScreenProps {}

export const UserLikesScreen: React.FC<UserLikesScreenProps> = (props) => {
  const { likes } = useUserStore((state) => state);

  return (
    <Box className="px-4 lg:px-32 lg:py-10 lg:pb-20 xl:px-40">
      <PhotoList data={Object.values(likes) as any} />
    </Box>
  );
};
