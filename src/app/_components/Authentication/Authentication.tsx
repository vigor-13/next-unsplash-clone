'use client';
import React from 'react';
import { createClient } from '@/utils/supabase/client';
import { useSupabaseStore, useUserStore } from '@/stores';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

export const Authentication: React.FC = () => {
  const pathname = usePathname();
  const supabase = createClient();
  const { setSupabase } = useSupabaseStore();
  const { setUser, clearUser } = useUserStore();

  const checkUserSession = React.useCallback(async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) clearUser();
    if (data.user) setUser(data.user);
  }, [setUser, clearUser, supabase]);

  React.useEffect(() => {
    setSupabase(supabase);
    checkUserSession();
  }, [supabase, setSupabase, checkUserSession]);

  React.useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      setUser(JSON.parse(user));
      Cookies.remove('user');
    }
  }, [pathname, checkUserSession, setUser]);

  return null;
};
