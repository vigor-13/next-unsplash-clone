'use server';
import React from 'react';
import { Button, Profile } from '@/components';
import { getUser } from '@/utils/supabase/server.lib';

export const HeaderButtons: React.FC = async () => {
  const { user } = await getUser();

  return (
    <nav>
      <ul className="flex gap-3">
        {user ? (
          <>
            <li>
              <Button>사진 제출</Button>
            </li>
            <li>
              <Profile data={user} />
            </li>
          </>
        ) : (
          <>
            <li>
              <Button as="a" href="/login" variant="ghost">
                로그인
              </Button>
            </li>
            <li>
              <Button>사진 제출</Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
