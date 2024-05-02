import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface PopBoxProps
  extends SystemComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const PopBox = React.forwardRef<HTMLDivElement, PopBoxProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    const classes = classNames(
      'border shadow-md bg-white py-2 rounded min-w-52',
      className,
    );

    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

PopBox.displayName = 'PopBox';
