import { QueryCache, QueryClient } from '@tanstack/react-query';
import { CustomError, handleError } from '@/utils/error';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        staleTime: 10 * 1000,
      },
      mutations: {
        onError: (error) => handleError(error as CustomError),
      },
    },
    queryCache: new QueryCache({
      onError: (error) => handleError(error as CustomError),
    }),
  });
};
