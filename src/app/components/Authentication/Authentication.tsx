'use client';
import React from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserStore } from '@/stores';

export const Authentication: React.FC = () => {
  const supabase = createClient();
  const { setUser } = useUserStore((state) => state);

  const _getUserSession = React.useCallback(async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data.user) setUser(data.user);
    // TODO: 에러 핸들링
  }, [supabase.auth, setUser]);

  React.useEffect(() => {
    _getUserSession();
  }, [_getUserSession]);

  return null;
};
