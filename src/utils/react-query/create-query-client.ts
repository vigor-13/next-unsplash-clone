import { QueryCache, QueryClient } from '@tanstack/react-query';
import { CustomError, handleError } from '@/utils/error';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
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
