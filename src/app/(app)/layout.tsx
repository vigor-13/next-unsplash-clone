import React, { Suspense } from 'react';
import { System, QueryModal } from '../_components';
import { FixedMessage } from '@/components';

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
        <QueryModal />
      </System>
    </Suspense>
  );
};

export default AppLayout;
