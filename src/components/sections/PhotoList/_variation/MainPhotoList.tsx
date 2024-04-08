'use client';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from '@api';
import { PhotoList } from '../PhotoList';
import { PhotoListSkeleton } from '@/components';

export const MainPhotoList = () => {
  const api = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 2,
    select: (data) => {
      // TODO: Zustand 사용하여 객체로 중복제거하도록 해야함
      const filtteredData = data.pages
        .flat(2)
        .filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.id === item.id),
        );
      return {
        pages: filtteredData,
        pageParams: [...data.pageParams],
      };
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) return;
      return lastPageParam + 1;
    },
  });

  // TODO: Suspense 적용
  return api.status === 'pending' ? (
    <PhotoListSkeleton />
  ) : api.status === 'error' ? (
    <div>Error</div>
  ) : (
    <PhotoList
      data={api.data.pages}
      isFetching={api.isFetching}
      onEndReached={api.fetchNextPage}
    />
  );
};
