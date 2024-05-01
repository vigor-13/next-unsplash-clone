import { MainStructure } from '@/components';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: AuthLayoutProps) {
  const { children } = props;

  return <MainStructure>{children}</MainStructure>;
}
