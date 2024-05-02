'use client';
import React from 'react';
import { createClient } from '@/utils/supabase/client';
import { useSupabaseStore, useUserStore } from '@/stores';

export const Authentication: React.FC = () => {
  const supabase = createClient();
  const { setSupabase } = useSupabaseStore();
  const { setUser, clearUser } = useUserStore();

  const _checkUserSession = React.useCallback(async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) clearUser();
    if (data.user) setUser(data.user);
  }, [setUser, clearUser, supabase]);

  React.useEffect(() => {
    setSupabase(supabase);
    _checkUserSession();
  }, [supabase, setSupabase, _checkUserSession]);

  return null;
};
