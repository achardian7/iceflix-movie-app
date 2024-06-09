import { TMDBService } from "@/services/tmdb-service";
import { Movie, MoviesResult } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

const tmdb = new TMDBService();

export const GET = async (req: Request, res: Response) => {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query");
    if (!query) throw new Error("There is no query param");
    const { data } = await axios.get(tmdb.getDataByQuery("movie", query));

    const movies: MoviesResult = data.results.map((movie: Movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path,
      release_date: movie.release_date,
      vote: movie.vote_average,
      overview: movie.overview,
    }));

    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
};
