'use server';
import { redirect } from 'next/navigation';
import { LoginScreen } from '@/components';
import { getUser } from '@/utils/supabase/server.lib';

export default async function LoginPage() {
  const { user } = await getUser();
  if (user) redirect('/');

  return <LoginScreen />;
}
