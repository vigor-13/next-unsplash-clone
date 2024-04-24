import { Photo, PhotoDetail } from './photos.type';
import { api } from './api';

/**
 * 사진 리스트
 */
export interface GetPhotosQueryParams {
  page: number;
  per_page?: number;
}
export const getPhotos = (params: GetPhotosQueryParams) => {
  const { page, per_page = 10 } = params;

  return api<Photo[]>('/photos', {
    params: {
      page: String(page),
      per_page: String(per_page),
    },
  });
};

/**
 * 사진 상세 정보
 */
export interface GetPhotoQueryParams {
  id: string;
}
export const getPhoto = (params: GetPhotoQueryParams) => {
  const { id } = params;

  return api<PhotoDetail>(`/photos/${id}`);
};
