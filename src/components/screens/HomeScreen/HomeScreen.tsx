import React from 'react';
import { Box, MainBanner, MainPhotoList } from '@/components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {} = props;

  return (
    <>
      <MainBanner />
      <Box className="px-4">
        <MainPhotoList />
      </Box>
    </>
  );
};
