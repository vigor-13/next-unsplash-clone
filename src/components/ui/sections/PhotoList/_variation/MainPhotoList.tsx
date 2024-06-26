'use client';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { type Photo, getPhotos } from '@/services/api';
import { PhotoListSkeleton } from '@/components';
import { PhotoList } from '../PhotoList';

export const MainPhotoList = () => {
  const [list, setList] = React.useState<Photo[]>([]);
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

  React.useEffect(() => {
    if (api.data?.pages) setList(api.data.pages);
  }, [api.data?.pages]);

  if (api.status === 'pending') return <PhotoListSkeleton />;

  return (
    <PhotoList
      data={list}
      isFetching={api.isFetching}
      onEndReached={api.fetchNextPage}
    />
  );
};
