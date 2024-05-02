'use client';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SystemComponentProps {
  href?: string;
  variant?: 'primary' | 'ghost';
  prefetch?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    as = 'button',
    href,
    className,
    variant = 'primary',
    prefetch,
    ...rest
  } = props;

  const buttonClasses = classNames(
    'transition',
    'flex items-center px-2.5 h-8',
    'text-sm text-stone-500 hover:text-stone-900',
    'border rounded hover:border-stone-900',
    variant !== 'ghost' && 'shadow-sm',
    variant === 'ghost' && 'border-0',
    className ? className : 'bg-white',
  );

  if (as === 'a' && href) {
    return (
      <Link className={buttonClasses} href={href} prefetch={prefetch}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
