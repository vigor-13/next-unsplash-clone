'use client';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { type Photo, getSearchPhotos } from '@/services/api';
import { PhotoList, PhotoListSkeleton } from '@/components';

export const SearchPhotoList: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const decodedQuery = decodeURIComponent(query);

  const [list, setList] = React.useState<Photo[]>([]);
  const api = useInfiniteQuery({
    queryKey: ['keyworkd-photos', decodedQuery],
    queryFn: async ({ pageParam, queryKey }) => {
      const query = queryKey[1];
      const response = await getSearchPhotos({ page: pageParam, query });
      return response;
    },
    initialPageParam: 1,
    select: (data) => {
      // TODO: Zustand 사용하여 객체로 중복제거하도록 해야함
      const filtteredData = data.pages
        .map((v) => v.results)
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
      if (lastPage.results.length === 0) return;
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
