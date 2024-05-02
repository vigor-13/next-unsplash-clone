import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getPhotos } from '@/services/api';
import { HomeScreen } from '@/components';

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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeScreen />
      </HydrationBoundary>
    </>
  );
}
