import React from 'react';
import { Tag, Flex } from '@components';

export interface TagListProps {
  data: string[];
}

export const TagList: React.FC<TagListProps> = (props) => {
  const { data } = props;

  return (
    <Flex className="flex-wrap gap-2">
      {data.map((v) => (
        <Tag text={v} key={v} />
      ))}
    </Flex>
  );
};
