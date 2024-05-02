import React from 'react';
import { Box } from '@/components';

export interface TagProps {
  text: string;
  onClick?: () => void;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { text, onClick } = props;

  return (
    <Box
      className="text-sm rounded bg-stone-200 text-stone-500 w-fit py-1 px-2 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </Box>
  );
};
