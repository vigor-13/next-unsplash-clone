import React from 'react';
import classNames from 'classnames';
import { Box, Text } from '@/components';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: string;
  subLabel?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    type = 'text',
    label,
    labelStyle,
    subLabel,
    id,
    ...rest
  } = props;

  const classes = classNames(
    'border border-stone-300 rounded w-full min-h-10 align-middle px-3 py-1',
    className,
  );

  const labelClasses = classNames('block mb-1', labelStyle);

  return (
    <Box>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
          {subLabel && (
            <Text as="span" className="text-stone-500 ml-1">
              ({subLabel})
            </Text>
          )}
        </label>
      )}
      <input id={id} type={type} className={classes} {...rest} />
    </Box>
  );
};
