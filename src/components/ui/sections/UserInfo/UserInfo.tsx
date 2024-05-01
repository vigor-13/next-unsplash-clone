'use server';
import React from 'react';
import { IconPencil } from '@tabler/icons-react';
import Image from 'next/image';
import { Grid, Box, Flex, Text, Button } from '@/components';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const UserInfo: React.FC = async () => {
  const supabase = createClient();

  // TODO: error handling;
  const { data, error } = await supabase.auth.getUser();
  if (!data.user) return redirect('/login');

  return (
    <Grid className="w-full gap-x-6 grid-cols-12 col-span-12">
      <Box className="col-span-4">
        <Box>
          <Image
            className="rounded-full ml-auto mr-4"
            src="/images/placeholder-avatars-extra-large.png"
            alt=""
            width={150}
            height={150}
          />
        </Box>
      </Box>
      <Box className="col-span-8">
        <Flex className="flex-col gap-4">
          <Flex className="gap-4 items-center">
            <Text className="bold text-3xl">{`${data.user.user_metadata.first_name} ${data.user.user_metadata.last_name}`}</Text>
            <Button as="a" className="flex items-center gap-1" href="/account">
              <IconPencil size={18} />
              프로필 편집
            </Button>
          </Flex>
          <Flex>
            <Text className="text-sm">{`${data.user?.user_metadata.first_name}이(가) 큐레이팅한 무료의 아름다운 고화질 사진을 다운로드 하세요.`}</Text>
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
};
