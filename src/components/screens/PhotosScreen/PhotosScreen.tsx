'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Box, Text, SearchPhotoList } from '@components';
import { capitalize } from '@libs';

export const PhotosScreen: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const decodedQuery = capitalize(decodeURIComponent(query));

  return (
    <Box className="px-4">
      <Box className="py-4">
        <Text as="h1" bold size="3xl">
          {decodedQuery}
        </Text>
      </Box>
      <SearchPhotoList />
    </Box>
  );
};
