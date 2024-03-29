export interface CurrentUserCollection {
  id: number;
  title: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  cover_photo: null;
  user: null;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: ProfileImage;
  links: UserLinks;
  for_hire: boolean;
  accepted_tos: boolean;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

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
  urls: Urls;
  links: Links;
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

export interface PhotoDetailLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Tag {
  title: string;
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
  urls: Urls;
  links: PhotoDetailLinks;
  user: User;
}
