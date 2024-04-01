import React from 'react';
import { IconHeartFilled } from '@tabler/icons-react';
import { Button } from '@components';

export const LikeButton: React.FC = () => {
  return (
    <Button>
      <IconHeartFilled size={16} />
    </Button>
  );
};
