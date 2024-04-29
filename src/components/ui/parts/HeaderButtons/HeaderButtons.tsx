'use server';
import React from 'react';
import { Button, Profile } from '@/components';
import { createClient } from '@/utils/supabase/server';

export const HeaderButtons: React.FC = async () => {
  const supabase = createClient();

  // TODO: error handling;
  const { data, error } = await supabase.auth.getUser();

  return (
    <nav>
      <ul className="flex gap-4">
        {data.user ? (
          <>
            <li>
              <Button>사진 제출</Button>
            </li>
            <li>
              <Profile />
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
