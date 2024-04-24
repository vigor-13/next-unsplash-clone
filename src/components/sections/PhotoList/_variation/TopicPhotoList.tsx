'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getTopicsPhotos } from '@api';
import { PhotoListSkeleton } from '@/components';
import { PhotoList } from '../PhotoList';

export const TopicPhotoList: React.FC = () => {
  const { query: slug } = useParams<{ query: string }>();
  const api = useInfiniteQuery({
    queryKey: ['topic-photos', slug],
    queryFn: async ({ pageParam, queryKey }) => {
      const slug = queryKey[1];
      const response = await getTopicsPhotos({
        idOrSlug: slug,
        page: pageParam,
      });
      return response;
    },
    initialPageParam: 1,
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
    getNextPageParam: (lastPage, _appPages, lastPageParam) => {
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
