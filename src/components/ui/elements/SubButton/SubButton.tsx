'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import classNames from 'classnames';
import { SystemComponentProps, Spinner } from '@/components';

export interface SubButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SystemComponentProps {
  useServerAction?: boolean;
  pending?: boolean;
}

export const SubButton: React.FC<SubButtonProps> = (props) => {
  const {
    children,
    className,
    useServerAction = true,
    pending: clientPending = false,
    ...rest
  } = props;
  const { pending: serverPending } = useFormStatus();
  const pending = useServerAction ? serverPending : clientPending;

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
