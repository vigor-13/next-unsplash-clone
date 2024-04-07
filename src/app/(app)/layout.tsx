import { MainStructure } from '@components';

interface AppLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function AppLayout(props: AppLayoutProps) {
  const { children, modal } = props;
  return (
    <MainStructure>
      {children}
      {modal}
    </MainStructure>
  );
}
