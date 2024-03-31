'use client';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from '@api';
import { PhotoList } from '../PhotoList';

export const MainPhotoList = () => {
  const api = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) => {
      const response = await getPhotos({ page: pageParam });
      return response;
    },
    initialPageParam: 0,
    select: (data) => {
      return {
        pages: data.pages.flat(2),
        pageParams: [...data.pageParams],
      };
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  if (api.status === 'error') {
    return <div>Error...</div>;
  }

  if (!api.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PhotoList data={api.data.pages} />
    </>
  );
};
