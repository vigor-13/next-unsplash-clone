import { QueryFunction } from '@tanstack/react-query';
import { Photo, PhotoDetail } from '.';
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

export interface GetPhotoQueryParams {
  id: string;
}
export const getPhoto = (params: GetPhotoQueryParams) => {
  const { id } = params;

  return api<PhotoDetail>(`/photos/${id}`);
};
