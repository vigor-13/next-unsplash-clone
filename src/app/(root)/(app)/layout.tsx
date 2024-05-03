import React from 'react';
import { QueryModal } from '../../_components';

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
      <QueryModal />
    </>
  );
};

export default AppLayout;
