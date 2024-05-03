import { createClient } from './server';

export const getUser = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return {
    user: data.user,
    error,
  };
};
