import { Photo } from '.';
import { api } from './api';

export interface GetSearchPhotosParams {
  query: string;
  page: number;
  per_page?: number;
}
export type GetSearchPhotosResponse = {
  total: number;
  total_pages: number;
  results: Photo[];
};
export const getSearchPhotos = (params: GetSearchPhotosParams) => {
  const { query, page, per_page = 10 } = params;

  return api<GetSearchPhotosResponse>('/search/photos', {
    params: {
      query,
      page: String(page),
      per_page: String(per_page),
    },
  });
};
