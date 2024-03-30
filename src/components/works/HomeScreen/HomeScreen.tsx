import React from 'react';
import { MainBanner, PhotoList } from '@components';
import { Photo, getPhotos } from '@api';

export interface HomeScreenProps {
  initialData: Photo[];
}

export const HomeScreen: React.FC<HomeScreenProps> = async (props) => {
  const { initialData } = props;

  return (
    <>
      <MainBanner />
      <div className="px-4">
        <PhotoList data={initialData} />
      </div>
    </>
  );
};
