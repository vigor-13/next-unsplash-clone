import React from 'react';
import classNames from 'classnames';
import { SystemComponentProps } from '@/components';

export interface TextProps extends SystemComponentProps {}

export const Text: React.FC<TextProps> = (props) => {
  const { children, className, as = 'p' } = props;

  const textClasses = classNames(className);

  return React.createElement(as, { className: textClasses }, children);
};
