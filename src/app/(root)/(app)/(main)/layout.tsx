import React from 'react';
import { WithHeader } from '@/components';

interface MainLayoutProps {
  children: React.ReactNode;
  // modal: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <>
      <WithHeader>{children}</WithHeader>
    </>
  );
};

export default MainLayout;
