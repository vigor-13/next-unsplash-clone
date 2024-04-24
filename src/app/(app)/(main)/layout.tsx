import { MainStructure, WithTopicList } from '@components';

interface AppLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function MainLayout(props: AppLayoutProps) {
  const { children, modal } = props;
  return (
    <MainStructure>
      <WithTopicList>{children}</WithTopicList>
      {modal}
    </MainStructure>
  );
}
