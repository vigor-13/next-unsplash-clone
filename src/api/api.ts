import qs from 'qs';

export interface FetchResponse<T> extends Response {
  data: T;
}

export interface APIProps {
  endpoint: string | URL;
  options?: RequestInit;
  queryParams?: any;
}

export const api = async <Data>(
  props: APIProps,
): Promise<FetchResponse<Data>> => {
  const _baseUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
  const _apiKey = process.env.NEXT_PUBLIC_API_ACCESS_KEY;
  const { endpoint, options, queryParams } = props;

  const queryString = qs.stringify(queryParams);
  const url = `${_baseUrl}/${endpoint}?${queryString}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${_apiKey}`,
    'Accept-Version': 'v1',
    ...options?.headers,
  };
  delete options?.headers;

  const response = await fetch(url, {
    headers,
    ...options,
  });

  if (response.status >= 400) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return { ...response, data };
};
