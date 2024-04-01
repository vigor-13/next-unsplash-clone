import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@components';

export interface GridProps extends SystemComponentProps {
  cols?: number;
  rows?: number;
  gap?: number;
  justify?:
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

export const Grid: React.FC<GridProps> = (props) => {
  const { className, children, cols, rows, gap, justify, items } = props;

  const gridClasses = classNames(
    'grid',
    cols && `grid-cols-${cols}`,
    rows && `grid-rows-${rows}`,
    gap && `gap-${gap}`,
    justify && `justify-${justify}`,
    items && `items-${items}`,
    className,
  );

  return <div className={gridClasses}>{children}</div>;
};
