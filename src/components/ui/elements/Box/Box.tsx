import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface BoxProps
  extends SystemComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = classNames(className);

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});

Box.displayName = 'Box';
