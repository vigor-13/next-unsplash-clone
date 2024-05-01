'use server';
import React from 'react';
import { Box, UserInfo, UserTabButtons, TabButton, Text } from '@/components';
import { createClient } from '@/utils/supabase/server';
import { redirect, notFound } from 'next/navigation';
import { IconPhoto, IconHeartFilled } from '@tabler/icons-react';

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
    <>
      <Box className="py-20 px-4">
        <UserInfo data={data.user} />
      </Box>
      <UserTabButtons>
        <TabButton href="/">
          <IconPhoto size={16} />
          <Text>사진 0</Text>
        </TabButton>
        <TabButton href="/" active>
          <IconHeartFilled size={16} />
          <Text>좋아요 0</Text>
        </TabButton>
      </UserTabButtons>
    </>
  );
};

const isValidUsername = (input: string, username: string): boolean => {
  if (input[0] !== '@') return false;
  const inputUsername = input.slice(1);
  return inputUsername === username;
};
