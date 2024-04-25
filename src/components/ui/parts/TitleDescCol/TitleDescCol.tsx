import React from 'react';
import { Box, Text } from '@/components';

export interface TitleDescColProps {
  title: string;
  desc: string;
}

export const TitleDescCol: React.FC<TitleDescColProps> = (props) => {
  const { title, desc } = props;

  return (
    <Box>
      <Text as="h3" size="sm" className="text-stone-400 w-fit">
        {title}
      </Text>
      <Text as="span" size="md" className="text-stone-900">
        {desc}
      </Text>
    </Box>
  );
};
