import React from 'react';
import { SystemComponentProps } from '@/components';

export interface PopBoxItemProps
  extends SystemComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const PopBoxItem: React.FC<PopBoxItemProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div
      className="p-2 cursor-pointer w-full text-sm bg-white hover:bg-stone-100"
      {...rest}
    >
      {children}
    </div>
  );
};
