'use server';
import React from 'react';
import { Box, UserInfo, UserTabButtons } from '@/components';

import { createClient } from '@/utils/supabase/server';
import { redirect, notFound } from 'next/navigation';

export interface UserLayoutProps {
  children: React.ReactNode;
  username: string;
}

export const UserLayout: React.FC<UserLayoutProps> = async (props) => {
  const { children, username } = props;
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    switch (error.status) {
      case 400:
        return redirect('/login');
      default:
        return redirect('/error');
    }
  }

  if (
    !_isValidUsername(
      decodeURIComponent(username),
      data.user.user_metadata.name,
    )
  ) {
    return notFound();
  }

  return (
    <>
      <Box className="py-20 px-4">
        <UserInfo data={data.user} />
      </Box>
      <UserTabButtons data={data.user} />
      {children}
    </>
  );
};

const _isValidUsername = (input: string, username: string): boolean => {
  if (input[0] !== '@') return false;
  const inputUsername = input.slice(1);
  return inputUsername === username;
};
