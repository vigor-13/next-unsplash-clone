import { api } from './api';
import { TopicDetail, type Topic } from './topics.type';
import { Photo } from './photos.type';

export interface GetTopicsParams {
  ids?: string;
  page?: number;
  per_page?: number;
  order_by?: 'featured' | 'latest' | 'oldest' | 'position';
}
export const getTopics = (params: GetTopicsParams) => {
  const { ids, page = 1, per_page = 20, order_by = 'position' } = params;
  const _params: any = {
    page: String(page),
    per_page: String(per_page),
    order_by,
  };
  if (ids) _params.ids = ids;

  return api<Topic[]>('/topics', {
    params: _params,
  });
};

export interface GetTopicParams {
  idOrSlug: string;
}
export const getTopic = (params: GetTopicParams) => {
  const { idOrSlug } = params;

  return api<TopicDetail>(`/topics/${idOrSlug}`);
};

export interface GetTopicsPhotosParams {
  idOrSlug: string;
  page?: number;
  per_page?: number;
  orientation?: 'landscape' | 'portrait' | 'squarish';
}
export const getTopicsPhotos = (params: GetTopicsPhotosParams) => {
  const { idOrSlug, page = 1, per_page = 10, orientation } = params;

  return api<Photo[]>(`/topics/${idOrSlug}/photos`, {
    params: {
      page: String(page),
      per_page: String(per_page),
    },
  });
};
