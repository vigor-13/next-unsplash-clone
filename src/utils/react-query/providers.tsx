'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        staleTime: 10 * 1000,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;
export const getQueryClient = () => {
  // On Server
  if (typeof window === 'undefined') return makeQueryClient();

  // On Client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
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
