import { TMDBService } from "@/services/tmdb-service";
import { Movie } from "@/types";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const TMDB = new TMDBService();
  try {
    const { data } = await axios.get(TMDB.getTrending("movie"));
    const movies = data.results as Movie[];
    const posterData = movies.map((movie) => ({
      id: movie.id,
      image: movie.poster_path,
      title: movie.title,
      release_date: movie.release_date,
      vote: movie.vote_average,
    }));

    return NextResponse.json(posterData);
  } catch (error) {
    console.log("ERROR:trending/movie", error);
    if (error instanceof AxiosError) {
      return NextResponse.json({
        message: error.message,
      });
    }

    return NextResponse.json({
      message: "Something went wrong",
    });
  }
};
