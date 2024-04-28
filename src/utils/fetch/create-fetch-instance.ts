import qs from 'qs';

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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return fetchInstance;
};
