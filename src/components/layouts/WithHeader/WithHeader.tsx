import React from 'react';
import { Header } from '@/components/ui/sections';

export interface WithHeaderProps {
  children: React.ReactNode;
}

export const WithHeader: React.FC<WithHeaderProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
