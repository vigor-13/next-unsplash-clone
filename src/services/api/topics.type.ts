import { User } from './api.type';
import { type Photo, type PhotoUrls } from './photos.type';

export interface Topic {
  cover_photo: Photo;
  current_user_contributions: [];
  description: string;
  starts_at: Date;
  ends_at: Date;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  id: string;
  links: {
    self: string;
    html: string;
    photos: string;
  };
  only_submissions_after: null;
  owners: User[];
  preview_photos: PreviewPhoto[];
  slug: string;
  status: string;
  title: string;
  total_current_user_submissions: null;
  total_photos: number;
  visibility: string;
}

export interface PreviewPhoto {
  asset_type: string;
  blur_hash: string;
  created_at: Date;
  id: string;
  slug: string;
  updated_at: Date;
  urls: PhotoUrls;
}

export interface TopicDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: any;
  only_submissions_after: any;
  visibility: string;
  featured: boolean;
  total_photos: number;
  links: {
    self: string;
    html: string;
    photos: string;
  };
  status: string;
  owners: User[];
  top_contributors: User[];
  cover_photo: CoverPhoto;
}

export interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: any;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: User;
  preview_photos: PreviewPhoto[];
}
