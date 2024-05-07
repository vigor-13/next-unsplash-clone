'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { getTopic } from '@/services/api';
import {
  Box,
  TopicBanner,
  TopicPhotoList,
  TopicGridSkeleton,
  NoResult,
} from '@/components';
import { useQuery } from '@tanstack/react-query';

export const TopicsScreen: React.FC = () => {
  const { query: slug } = useParams<{ query: string }>();
  const api = useQuery({
    queryKey: ['topic-detail', slug],
    queryFn: async ({ queryKey }) => {
      const slug = queryKey[1];
      const response = await getTopic({ idOrSlug: slug });
      return response;
    },
  });

  if (api.status === 'pending') {
    return (
      <Box className="p-4">
        <TopicGridSkeleton />
      </Box>
    );
  }

  if (api.status === 'error') {
    return <NoResult />;
  }

  return (
    <Box>
      <TopicBanner
        imgUrl={api.data.cover_photo.urls.regular}
        title={api.data.title}
        description={api.data.description}
      />
      <Box className="py-4 px-4 lg:px-32 lg:py-14 xl:px-40">
        <TopicPhotoList />
      </Box>
    </Box>
  );
};
