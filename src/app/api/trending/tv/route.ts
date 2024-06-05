import { TMDBService } from "@/services/tmdb-service";
import { TVShow } from "@/types";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const TMDB = new TMDBService();
  try {
    const { data } = await axios.get(TMDB.getTrending("tv"));
    const tvShows = data.results as TVShow[];
    const posterData = tvShows.map((tv) => ({
      id: tv.id,
      image: tv.poster_path,
      title: tv.name,
      release_date: tv.first_air_date,
      vote: tv.vote_average,
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
