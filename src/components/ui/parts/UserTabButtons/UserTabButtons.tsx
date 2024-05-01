'use client';
import React from 'react';
import { Flex, Box, TabButton, Text } from '@/components';
import { IconPhoto, IconHeartFilled } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export interface UserTabButtonsProps {
  data: User;
}

export const UserTabButtons: React.FC<UserTabButtonsProps> = (props) => {
  const { data } = props;
  const pathname = usePathname();
  const currentEndpoint = decodeURIComponent(pathname).split('/').pop();

  return (
    <Box className="px-4 border-b">
      <Flex className="gap-6">
        <TabButton
          href={`/@${data.user_metadata.name}`}
          active={currentEndpoint === `@${data.user_metadata.name}`}
        >
          <IconPhoto size={16} />
          <Text>사진 0</Text>
        </TabButton>
        <TabButton
          href={`/@${data.user_metadata.name}/likes`}
          active={currentEndpoint === 'likes'}
        >
          <IconHeartFilled size={16} />
          <Text>좋아요 0</Text>
        </TabButton>
      </Flex>
    </Box>
  );
};
