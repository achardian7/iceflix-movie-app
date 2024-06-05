export type MovieList = "now_playing" | "popular" | "top_rated" | "upcoming";

export type Detail =
  | "similar"
  | "recommendations"
  | "videos"
  | "images"
  | "watch/providers";

export type TvList = "airing_today" | "on_the_air" | "popular" | "top_rated";

export type ImageSizeType = "original" | "w500";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVShow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface PosterTypes {
  id: string;
  image: string;
  title: string;
  vote?: number;
  release_date?: string;
}

export interface MoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
