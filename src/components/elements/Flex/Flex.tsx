import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@components';

interface FlexProps
  extends SystemComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const Flex: React.FC<FlexProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames('flex', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
