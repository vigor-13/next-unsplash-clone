'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Box, Text, SearchPhotoList, Flex } from '@/components';
import { capitalize } from '@/libs';

export const PhotosScreen: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const title = capitalize(decodeURIComponent(query));

  return (
    <Flex className="flex-col flex-1 px-4 lg:px-32 xl:px-40">
      <Box className="py-4">
        <Text as="h1" className="font-bold text-3xl">
          {title}
        </Text>
      </Box>
      <Box className="flex-1">
        <SearchPhotoList />
      </Box>
    </Flex>
  );
};
