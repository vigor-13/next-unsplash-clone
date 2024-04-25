'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import classNames from 'classnames';
import { Box, Text } from '@/components';

export interface TopicListItemProps {
  slug: string;
  title: string;
}

export const TopicListItem: React.FC<TopicListItemProps> = (props) => {
  const { slug, title } = props;
  const { query } = useParams<{ query: string }>();
  const isActive = slug === query;

  const containerClasses = classNames(
    'py-2 pb-3',
    isActive ? 'border-b-2 border-black' : '',
  );
  const textClasses = classNames(
    'text-stone-500 hover:text-black',
    isActive ? 'text-black' : '',
  );

  return (
    <Box className={containerClasses}>
      <Link href={{ pathname: `/topics/${slug}` }}>
        <Text className={textClasses}>{title}</Text>
      </Link>
    </Box>
  );
};
