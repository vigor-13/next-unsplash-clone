import React from 'react';
import { Box, NoResult } from '@/components';

export interface UserScreenProps {
  username: string;
}

export const UserScreen: React.FC<UserScreenProps> = async (props) => {
  return (
    <Box className="p-4">
      <NoResult />
    </Box>
  );
};
