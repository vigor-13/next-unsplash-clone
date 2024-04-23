import { type User, type CurrentUserCollection } from './api.type';

export interface Photo {
  id: string;
  slug: string;
  alternative_slugs: {
    en?: string;
    es?: string;
    ja?: string;
    fr?: string;
    it?: string;
    ko?: string;
    de?: string;
    pt?: string;
  };
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  current_user_collections: CurrentUserCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
}

export interface PhotoDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  exif: Exif;
  location: Location;
  tags: Tag[];
  current_user_collections: CurrentUserCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
  user: User;
  views: number;
  breadcrumbs: Breadcrumb[];
}

export interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Tag {
  title: string;
  type: string;
  source: TagSource;
}

export interface TagSource {
  title: string;
  subtitle: string;
  meta_title: string;
  meta_description: string;
  description: string;
}

export interface Breadcrumb {
  index: number;
  slug: string;
  title: string;
  type: string;
}
