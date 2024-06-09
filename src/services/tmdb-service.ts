import { Detail, ImageSizeType, MovieList, TvList } from "@/types";

export class TMDBService {
  private BASE_URL = "https://api.themoviedb.org/3/";
  private IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  private API_KEY =
    process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_TMDB_API_KEY;

  public getAllMovies(type: MovieList) {
    return `${this.BASE_URL}movie/${type}?api_key=${this.API_KEY}`;
  }

  public getMovie(id: string, type?: Detail) {
    return `${this.BASE_URL}movie/${id}${type && `/${type}`}?api_key=${this.API_KEY}`;
  }

  public getAllTvSeries(type: TvList) {
    return `${this.BASE_URL}tv/${type}?api_key=${this.API_KEY}`;
  }

  public getTvSeries(id: string, type: Detail) {
    return `${this.BASE_URL}tv/${id}${type && `/${type}`}?api_key=${this.API_KEY}`;
  }

  public getDataByQuery(variant: "movie" | "tv" | "person", query: string) {
    return `${this.BASE_URL}search/${variant}?query=${query}&api_key=${this.API_KEY}`;
  }
  public getTrending(type: "movie" | "tv" | "person") {
    return `${this.BASE_URL}trending/${type}/day?api_key=${this.API_KEY}`;
  }

  public getImage(path: string, size: ImageSizeType) {
    if (!path) {
      return "/no-image-icon.png";
    }
    return `${this.IMAGE_BASE_URL}${size}${path}`;
  }
}
