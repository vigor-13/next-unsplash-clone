import { UserLayout } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

export default function Layout(props: LayoutProps) {
  const { children, params } = props;

  return <UserLayout username={params.username}>{children}</UserLayout>;
}
