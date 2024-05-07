'use client';
import React from 'react';
import { FlashMessage } from '@/components';
import { Toaster } from 'react-hot-toast';
import { QueryProviders } from '@/utils';
import { Authentication } from '../Authentication';

export interface SystemProps {
  children: React.ReactNode;
}

export const System: React.FC<SystemProps> = (props) => {
  const { children } = props;

  return (
    <QueryProviders>
      <Authentication />
      <FlashMessage />
      {children}
      <Toaster
        containerStyle={{
          bottom: 100,
        }}
      />
    </QueryProviders>
  );
};
