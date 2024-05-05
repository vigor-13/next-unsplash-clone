import React from 'react';
import { Box, TopicList } from '@/components';

export interface WithTopicListProps {
  children: React.ReactNode;
}

export const WithTopicList: React.FC<WithTopicListProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Box className="sticky top-[66px] bg-white z-10">
        <TopicList />
      </Box>
      {children}
    </>
  );
};
