'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;
  const [queryClient] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
