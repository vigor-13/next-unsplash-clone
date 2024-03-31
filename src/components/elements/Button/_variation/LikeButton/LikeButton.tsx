import React from 'react';
import { IconHeartFilled } from '@tabler/icons-react';
import { Button } from '@components';

export const LikeButton: React.FC = () => {
  return (
    <Button className="bg-stone-100 hover:bg-white">
      <IconHeartFilled size={16} />
    </Button>
  );
};
