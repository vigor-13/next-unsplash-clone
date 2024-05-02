import React from 'react';
import classNames from 'classnames';
import { Box, Text } from '@/components';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: string;
  subLabel?: string;
  error?: string[];
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    type = 'text',
    label,
    labelStyle,
    subLabel,
    id,
    error,
    ...rest
  } = props;

  const classes = classNames(
    'transition border  rounded w-full min-h-10 align-middle px-3 py-1',
    error ? 'border-red-300' : 'border-stone-300 hover:border-stone-500',
    className,
  );

  const labelClasses = classNames(
    'block text-sm mb-1',
    error && '',
    labelStyle,
  );

  return (
    <Box>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {subLabel && (
            <Text as="span" className="text-stone-500 text-sm ml-1">
              ({subLabel})
            </Text>
          )}
        </label>
      )}
      <input id={id} type={type} className={classes} {...rest} />
      {error && (
        <Text as="span" className="text-xs text-red-500">
          {error[0]}
        </Text>
      )}
    </Box>
  );
};
