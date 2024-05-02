import React from 'react';
import classNames from 'classnames';

export interface SpinnerProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'stone' | 'white';
}

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { className, size = 'md', color = 'stone' } = props;

  const spinnerClasses = classNames(
    'animate-spin rounded-full',
    size === 'xs' && 'w-4 h-4 border-4',
    size === 'sm' && 'w-6 h-6 border-4',
    size === 'md' && 'h-8 w-8 border-4',
    size === 'lg' && 'h-10 w-10 border-4',
    color === 'stone' && 'border-stone-300 border-t-stone-600',
    color === 'white' && 'border-white border-t-black',
    className,
  );

  return <div className={spinnerClasses} />;
};
