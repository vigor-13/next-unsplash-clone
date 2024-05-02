'use client';
import React from 'react';
import { Box, PhotoList } from '@/components';
import { useUserStore } from '@/stores';

export interface UserLikesScreenProps {}

export const UserLikesScreen: React.FC<UserLikesScreenProps> = (props) => {
  const { likes } = useUserStore((state) => state);

  return (
    <Box className="px-4 pb-10">
      <PhotoList data={Object.values(likes) as any} />
    </Box>
  );
};
