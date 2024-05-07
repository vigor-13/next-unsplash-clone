'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createQueryClient } from './create-query-client';

let browserQueryClient: QueryClient | undefined = undefined;

export const getQueryClient = () => {
  // On Server
  if (typeof window === 'undefined') return createQueryClient();

  // On Client
  if (!browserQueryClient) browserQueryClient = createQueryClient();
  return browserQueryClient;
};

interface ProvidersProps {
  children: React.ReactNode;
}

export const QueryProviders = (props: ProvidersProps) => {
  const { children } = props;
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
