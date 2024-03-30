import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface TextProps extends SystemComponentProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  bold?: boolean;
}

export const Text: React.FC<TextProps> = (props) => {
  const { children, className, as = 'p', size = 'sm', bold = false } = props;

  const textClasses = classNames(
    size === 'xs' && 'text-xs',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-md',
    size === 'lg' && 'text-lg',
    size === 'xl' && 'text-xl',
    size === '2xl' && 'text-2xl',
    size === '3xl' && 'text-3xl',
    size === '4xl' && 'text-4xl',
    bold && 'font-bold',
    className,
  );

  return React.createElement(as, { className: textClasses }, children);
};
