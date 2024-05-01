import { MainStructure } from '@/components';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout(props: UserLayoutProps) {
  const { children } = props;

  return <MainStructure>{children}</MainStructure>;
}
