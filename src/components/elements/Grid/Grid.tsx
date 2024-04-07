import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@components';

export interface GridProps extends SystemComponentProps {}

export const Grid: React.FC<GridProps> = (props) => {
  const { className, children } = props;

  const gridClasses = classNames('grid', className);

  return <div className={gridClasses}>{children}</div>;
};
