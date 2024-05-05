import React, { Suspense } from 'react';
import { QueryModal } from '../_components';

interface AppLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <>
      {children}
      {modal}
      <Suspense>
        <QueryModal />
      </Suspense>
    </>
  );
};

export default AppLayout;
