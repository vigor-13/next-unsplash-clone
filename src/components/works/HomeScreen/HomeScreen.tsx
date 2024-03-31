import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPhotos } from '@api';
import { MainStructure, MainBanner, MainPhotoList } from '@components';

export const HomeScreen: React.FC = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 1,
  });

  return (
    <MainStructure>
      <MainBanner />
      <div className="px-4">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MainPhotoList />
        </HydrationBoundary>
      </div>
    </MainStructure>
  );
};
