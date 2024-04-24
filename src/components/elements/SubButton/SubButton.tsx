import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface SubButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    SystemComponentProps {}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames(
    'w-full h-11 rounded-md',
    'bg-black',
    'text-white text-sm',
    className,
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
