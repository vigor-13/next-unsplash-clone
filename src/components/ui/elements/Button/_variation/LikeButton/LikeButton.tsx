import React from 'react';
import classNames from 'classnames';
import { IconHeartFilled } from '@tabler/icons-react';
import { Button, ButtonProps } from '@/components';

export interface LikeButton extends ButtonProps {
  active?: boolean;
}

export const LikeButton: React.FC<LikeButton> = (props) => {
  const { onClick, active = false } = props;
  const classes = classNames(
    active &&
      'bg-red-400 border-red-400 hover:border-red-600 hover:bg-red-600  text-white hover:text-white',
  );

  return (
    <Button className={classes} onClick={onClick}>
      <IconHeartFilled size={16} />
    </Button>
  );
};
