import { FetchResponse, Photo } from ".";
import { api } from "./api";

export const getPhotos = async () => {
  const response = await api<Photo[]>({
    endpoint: "/photos",
    queryParams: {
      page: 1,
      per_page: 10,
    },
  });
  return response;
};
