import {
  string, number, shape, any, array, bool,
} from 'prop-types';

const unsplashImageType = shape({
  id: string,
  created_at: string,
  updated_at: string,
  width: number,
  height: number,
  color: string,
  description: any,
  urls: shape({
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
  }),
  links: shape({
    self: string,
    html: string,
    download: string,
    download_location: string,
  }),
  categories: array,
  sponsored: bool,
  sponsored_by: any,
  sponsored_impressions_id: any,
  likes: number,
  liked_by_user: bool,
  current_user_collections: array,
  user: shape({
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: string,
    portfolio_url: string,
    bio: string,
    location: string,
    links: shape({
      self: string,
      html: string,
      photos: string,
      likes: string,
      portfolio: string,
      following: string,
      followers: string,
    }),
    profile_image: shape({
      small: string,
      medium: string,
      large: string,
    }),
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: bool,
  }),
});

export default unsplashImageType;
