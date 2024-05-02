import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Box, SystemComponentProps } from '@/components';

export interface TabButtonProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const TabButton: React.FC<TabButtonProps> = (props) => {
  const { href, children, active = false } = props;

  const classes = classNames(
    'h-10 flex items-center gap-2 text-sm box-border border-b-2 border-transparent',
    active ? 'text-stone-800' : 'text-stone-400 hover:text-stone-800',
    active && 'border-b-stone-800',
  );

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};
