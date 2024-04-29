'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import classNames from 'classnames';
import { SystemComponentProps, Spinner } from '@/components';

export interface SubButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SystemComponentProps {}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  const { pending } = useFormStatus();

  const classes = classNames(
    'w-full h-11 rounded-md flex justify-center items-center',
    'bg-black',
    'text-white text-sm',
    className,
  );

  return (
    <button className={classes} {...rest}>
      {pending ? <Spinner size="xs" color="white" /> : children}
    </button>
  );
};
