'use server';
import { redirect, notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { UserLayout } from '@/components';

const _isValidSlug = (slug: string) => {
  if (slug[0] !== '@') return false;
  return true;
};

const _isValidUsername = (slug: string, username: string): boolean => {
  const inputSlug = slug.slice(1);
  return inputSlug === username;
};

const _errorHandler = (code: number | undefined) => {
  switch (code) {
    case 400:
      return redirect('/login');
    default:
      return redirect('/error');
  }
};

interface LayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

export default async function Layout(props: LayoutProps) {
  const { children, params } = props;
  const routeSlug = decodeURIComponent(params.username);

  if (!_isValidSlug(routeSlug)) return notFound();

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const username = data.user?.user_metadata.name;

  if (error) _errorHandler(error.status);
  if (!_isValidUsername(routeSlug, username)) return notFound();

  return <UserLayout user={data.user!}>{children}</UserLayout>;
}
