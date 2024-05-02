import React from 'react';
import { UserProfile, LikeButton, Box } from '@/components';
import { PhotoDetail } from '@/services/api';
import { useUserStore } from '@/stores';
import { useToggleLikes } from '@/hooks';

export interface PhotoHeaderProps {
  data: PhotoDetail;
}

export const PhotoHeader: React.FC<PhotoHeaderProps> = (props) => {
  const { data } = props;
  const { isLiked, toggleLikes } = useToggleLikes({ data });

  const clickLikeButton = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLikes();
  };

  return (
    <Box className="sticky top-0 bg-white py-4 z-50">
      <header className="flex justify-between items-center">
        <UserProfile data={data.user} />
        <LikeButton onClick={clickLikeButton} active={isLiked} />
      </header>
    </Box>
  );
};
