import React from 'react';
import { TopicList } from '@/components';

export interface WithTopicListProps {
  children: React.ReactNode;
}

export const WithTopicList: React.FC<WithTopicListProps> = (props) => {
  const { children } = props;

  return (
    <>
      <TopicList />
      {children}
    </>
  );
};
