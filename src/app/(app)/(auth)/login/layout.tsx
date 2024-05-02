'use server';
import { MainStructure } from '@/components';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout(props: AuthLayoutProps) {
  const { children } = props;

  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) redirect('/');

  return <MainStructure>{children}</MainStructure>;
}
