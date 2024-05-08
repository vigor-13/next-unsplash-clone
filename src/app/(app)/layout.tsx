import React, { Suspense } from 'react';
import { System } from '../_components';

interface AppLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children, modal } = props;

  return (
    <Suspense>
      <System>
        {children}
        {modal}
      </System>
    </Suspense>
  );
};

export default AppLayout;
