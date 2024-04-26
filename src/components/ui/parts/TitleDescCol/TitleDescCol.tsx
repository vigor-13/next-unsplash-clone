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
      <Text as="h3" className="text-stone-400 w-fit text-sm">
        {title}
      </Text>
      <Text as="span" className="text-stone-900 text-md">
        {desc}
      </Text>
    </Box>
  );
};
