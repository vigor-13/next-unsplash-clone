import React from 'react';
import { UserProfile, LikeButton, Box } from '@/components';
import { PhotoDetail } from '@/services/api';

export interface PhotoHeaderProps {
  data: PhotoDetail;
}

export const PhotoHeader: React.FC<PhotoHeaderProps> = (props) => {
  const { data } = props;

  return (
    <Box className="sticky top-0 bg-white py-4 z-50">
      <header className="flex justify-between items-center">
        <UserProfile data={data.user} />
        <LikeButton />
      </header>
    </Box>
  );
};
