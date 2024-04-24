import { MainStructure } from '@components';

interface AuthLayoutProps {
  children: React.ReactNode;
  // modal: React.ReactNode;
}

export default function MainLayout(props: AuthLayoutProps) {
  const { children } = props;
  return (
    <MainStructure>
      {children}
      {/* {modal} */}
    </MainStructure>
  );
}
