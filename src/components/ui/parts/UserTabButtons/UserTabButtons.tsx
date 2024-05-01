import React from 'react';
import { Flex, Box } from '@/components';

export interface UserTabButtonsProps {
  children: React.ReactNode;
}

export const UserTabButtons: React.FC<UserTabButtonsProps> = (props) => {
  const { children } = props;

  return (
    <Box className="px-4 border-b">
      <Flex className="gap-6">{children}</Flex>
    </Box>
  );
};
