import { TMDBService } from "@/services/tmdb-service";
import { Movie, TVShow, TvResult } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

const tmdb = new TMDBService();

export const GET = async (req: Request, res: Response) => {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query");
    if (!query) throw new Error("There is no query param");
    const { data } = await axios.get(tmdb.getDataByQuery("tv", query));

    const tv: TvResult = data.results.map((tv: TVShow) => ({
      id: tv.id,
      title: tv.name,
      image: tv.poster_path,
      release_date: tv.first_air_date,
      vote: tv.vote_average,
      overview: tv.overview,
    }));

    return NextResponse.json(tv);
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
};
