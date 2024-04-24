import React from 'react';
import { Tag, Flex } from '@components';
import { useRouter } from 'next/navigation';

export interface TagListProps {
  data: string[];
}

export const TagList: React.FC<TagListProps> = (props) => {
  const { data } = props;
  const router = useRouter();

  const _onClickTag = React.useCallback(
    (query: string) => {
      router.push(`/photos/${encodeURIComponent(query)}`);
    },
    [router],
  );

  return (
    <Flex className="flex-wrap gap-2">
      {data.map((v) => (
        <Tag text={v} key={v} onClick={() => _onClickTag(v)} />
      ))}
    </Flex>
  );
};
