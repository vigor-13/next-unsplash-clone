import React from 'react';
import { Box, MainBanner, MainPhotoList } from '@/components';

export interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {} = props;

  return (
    <Box className="px-4 lg:px-32 xl:px-40">
      <MainBanner />
      <MainPhotoList />
    </Box>
  );
};
