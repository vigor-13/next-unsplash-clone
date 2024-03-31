import { QueryFunction } from '@tanstack/react-query';
import { Photo } from '.';
import { api } from './api';

export interface GetPhotosQueryParams {
  page: number;
  per_page?: number;
}

export const getPhotos = (params: GetPhotosQueryParams) => {
  const { page, per_page = 20 } = params;

  return api<Photo[]>('/photos', {
    params: {
      page: String(page),
      per_page: String(per_page),
    },
  });
};
