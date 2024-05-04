import React from 'react';
import { WithTopicList } from '@/components';

interface WithTopicListLayoutProps {
  children: React.ReactNode;
}

const WithTopicListLayout: React.FC<WithTopicListLayoutProps> = (props) => {
  const { children } = props;

  return <WithTopicList>{children}</WithTopicList>;
};

export default WithTopicListLayout;
