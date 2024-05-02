'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { getTopic } from '@/services/api';
import {
  Box,
  TopicBanner,
  TopicPhotoList,
  TopicGridSkeleton,
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

  return api.status === 'pending' ? (
    <Box className="p-4">
      <TopicGridSkeleton />
    </Box>
  ) : api.status === 'error' ? (
    <div>Error</div>
  ) : (
    <Box>
      <TopicBanner
        imgUrl={api.data.cover_photo.urls.regular}
        title={api.data.title}
        description={api.data.description}
      />
      <Box className="p-4">
        <TopicPhotoList />
      </Box>
    </Box>
  );
};
