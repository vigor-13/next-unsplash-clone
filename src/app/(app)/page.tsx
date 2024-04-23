import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPhotos } from '@/services/api';
import { Box, MainBanner, MainPhotoList } from '@components';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) return;
      return lastPageParam + 1;
    },
    pages: 1,
  });

  return (
    <>
      <MainBanner />
      <Box className="px-4">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MainPhotoList />
        </HydrationBoundary>
      </Box>
    </>
  );
}
