import React from 'react';
import classNames from 'classnames';

export interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { className, size = 'md' } = props;

  const spinnerClasses = classNames(
    'border-stone-300 animate-spin rounded-full border-t-stone-600',
    size === 'sm' && 'w-6 h-6 border-4',
    size === 'md' && 'h-8 w-8 border-4',
    size === 'lg' && 'h-10 w-10 border-4',
    className,
  );

  return <div className={spinnerClasses} />;
};
