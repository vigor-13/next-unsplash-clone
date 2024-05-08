import React from 'react';
import { Box, UserInfo, UserTabButtons } from '@/components';
import { User } from '@supabase/supabase-js';

export interface UserLayoutProps {
  children: React.ReactNode;
  user: User;
}

export const UserLayout: React.FC<UserLayoutProps> = async (props) => {
  const { children, user } = props;

  return (
    <>
      <Box className="py-20 px-4">
        <UserInfo data={user} />
      </Box>
      <UserTabButtons data={user} />
      {children}
    </>
  );
};
