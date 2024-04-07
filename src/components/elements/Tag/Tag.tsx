import React from 'react';

export interface TagProps {
  text: string;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { text } = props;

  return (
    <div className="rounded bg-stone-200 text-stone-500 w-fit py-0 px-2">
      {text}
    </div>
  );
};
