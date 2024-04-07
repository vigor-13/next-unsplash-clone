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
} from '@components';
import { getPhoto } from '@api';

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

  return api.status === 'pending' ? (
    <Box className="px-5 py-5">
      <PhotoDetailHeaderSkeleton />
      <PhotoDetailBodySkeleton />
    </Box>
  ) : api.status === 'error' ? (
    <div>Error</div>
  ) : (
    <Box className="px-5 pb-5">
      <PhotoHeader data={api.data} />
      <PhotoBody data={api.data} />
    </Box>
  );
};
