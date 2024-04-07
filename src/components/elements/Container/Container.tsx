import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@components';

export interface ContainerProps
  extends SystemComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames('container', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
