import { createFetchInstance } from '@/utils';

const baseURL = process.env.NEXT_PUBLIC_API_SERVER_URL;
const apiKey = process.env.NEXT_PUBLIC_API_ACCESS_KEY;
if (!baseURL) throw new Error('No Base URL!');

export const api = createFetchInstance({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${apiKey}`,
    'Accept-Version': 'v1',
  },
});
