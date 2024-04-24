'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { getTopic } from '@api';
import { Box, Text, TopicBanner } from '@components';

export const TopicsScreen: React.FC = async () => {
  const { query: slug } = useParams<{ query: string }>();
  const topicDetail = await getTopic({ idOrSlug: slug });

  return (
    <Box>
      <TopicBanner
        imgUrl={topicDetail.cover_photo.urls.regular}
        title={topicDetail.title}
        description={topicDetail.description}
      />
    </Box>
  );
};
