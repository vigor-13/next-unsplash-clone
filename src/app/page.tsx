import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPhotos } from '@api';
import { MainBanner, MainPhotoList } from '@components';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 0,
  });

  return (
    <>
      <MainBanner />
      <div className="px-4 grow">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MainPhotoList />
        </HydrationBoundary>
      </div>
    </>
  );
}
