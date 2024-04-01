import React from 'react';
import { IconDots } from '@tabler/icons-react';
import { Button } from '@components';

export const EllipsisButton: React.FC = () => {
  return (
    <Button>
      <IconDots size={20} />
    </Button>
  );
};
