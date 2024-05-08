'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import {
  PhotoHeader,
  PhotoBody,
  Box,
  PhotoDetailHeaderSkeleton,
  PhotoDetailBodySkeleton,
  NoResult,
} from '@/components';
import { getPhoto } from '@/services/api';

export interface PhotoScreenProps {}

export const PhotoScreen: React.FC<PhotoScreenProps> = (props) => {
  const { id } = useParams<{ id: string }>();
  const api = useQuery({
    queryKey: ['photo', { id }],
    queryFn: async (context) => {
      const { queryKey } = context;
      const id = queryKey[1] as { id: string };
      const response = await getPhoto(id);
      return response;
    },
  });

  if (api.status === 'pending') {
    return (
      <Box className="px-5 py-5">
        <PhotoDetailHeaderSkeleton />
        <PhotoDetailBodySkeleton />
      </Box>
    );
  }

  if (api.status === 'error') {
    return <NoResult />;
  }

  return (
    <Box className="px-5 pb-5">
      <PhotoHeader data={api.data} />
      <PhotoBody data={api.data} />
    </Box>
  );
};
