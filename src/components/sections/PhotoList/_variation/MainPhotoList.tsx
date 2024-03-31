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
    initialPageParam: 1,
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

  return (
    <>
      {api.status === 'pending' ? (
        <div>Loading...</div>
      ) : api.status === 'error' ? (
        <div>Error ...</div>
      ) : (
        <PhotoList data={api.data.pages} />
      )}
    </>
  );
};
