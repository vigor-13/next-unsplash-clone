'use server';
import React from 'react';
import { Box, UserInfo } from '@/components';
import { createClient } from '@/utils/supabase/server';
import { redirect, notFound } from 'next/navigation';

export interface UserScreenProps {
  username: string;
}

export const UserScreen: React.FC<UserScreenProps> = async (props) => {
  const { username } = props;
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
    !isValidUsername(decodeURIComponent(username), data.user.user_metadata.name)
  ) {
    return notFound();
  }

  return (
    <Box className="py-12 px-4">
      <UserInfo data={data.user} />
    </Box>
  );
};

const isValidUsername = (input: string, username: string): boolean => {
  if (input[0] !== '@') return false;
  const inputUsername = input.slice(1);
  return inputUsername === username;
};
