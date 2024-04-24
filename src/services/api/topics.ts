import { api } from './api';
import { TopicDetail, type Topic } from './topics.type';
import { Photo } from './photos.type';

/**
 * 토픽 키워드 리스트
 */
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

/**
 * 개별 토픽 세부 정보
 */
export interface GetTopicParams {
  idOrSlug: string;
}
export const getTopic = (params: GetTopicParams) => {
  const { idOrSlug } = params;

  return api<TopicDetail>(`/topics/${idOrSlug}`);
};

/**
 * 토픽 연관 사진 리스트
 */
export interface GetTopicsPhotosParams {
  idOrSlug: string;
}
export const getTopicsPhotos = (params: GetTopicsPhotosParams) => {
  const { idOrSlug } = params;

  return api<Photo[]>(`/topics/${idOrSlug}/photos`);
};
