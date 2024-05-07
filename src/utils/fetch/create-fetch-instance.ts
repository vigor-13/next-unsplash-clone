import qs from 'qs';
import { CustomError } from '@/utils';

export type FetchHeaders = Record<string, string>;

export interface FetchOptions extends RequestInit {
  headers?: FetchHeaders;
  params?: Record<string, string>;
}

export interface CreateFetchInstanceProps {
  baseURL: string;
  headers: FetchHeaders;
}

export const createFetchInstance = (props: CreateFetchInstanceProps) => {
  const { baseURL, headers = {} } = props;

  const fetchInstance = async <T>(
    endpoint: string,
    options: FetchOptions = {},
  ): Promise<T> => {
    const url = new URL(`${baseURL}${endpoint}`);

    if (options.params) {
      url.search = new URLSearchParams(qs.stringify(options.params)).toString();
    }

    const defaultOptions: FetchOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
    const mergedOptions: FetchOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, mergedOptions);

      if (!response.ok) {
        throw new CustomError(`HTTP Error`, response.status);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      throw error;
    }
  };

  return fetchInstance;
};
