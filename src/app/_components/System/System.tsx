'use client';
import React from 'react';
import { FlashMessage, FixedMessage } from '@/components';
import { Toaster } from 'react-hot-toast';
import { QueryProviders } from '@/utils';
import { useFlashMessage } from '@/hooks';
import { useAuthentication } from '../../_hooks';

export interface SystemProps {
  children: React.ReactNode;
}

export const System: React.FC<SystemProps> = (props) => {
  const { children } = props;
  useAuthentication();
  useFlashMessage();

  return (
    <QueryProviders>
      <FixedMessage />
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
