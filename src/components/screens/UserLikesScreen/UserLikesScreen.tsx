'use client';
import React from 'react';
import { Box, PhotoList } from '@/components';
import { useUserStore } from '@/stores';

export interface UserLikesScreenProps {}

export const UserLikesScreen: React.FC<UserLikesScreenProps> = (props) => {
  const { likes } = useUserStore((state) => state);

  return (
    <Box className="px-4 py-4 lg:px-32 lg:py-14 xl:px-40 flex-1">
      <PhotoList data={Object.values(likes) as any} />
    </Box>
  );
};
