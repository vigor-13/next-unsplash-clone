import { Topic } from '.';
import { api } from './api';

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
