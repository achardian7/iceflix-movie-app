import { TMDBService } from "@/services/tmdb-service";
import { Person, PersonResult } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

const tmdb = new TMDBService();

export const GET = async (req: Request, res: Response) => {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query");
    if (!query) throw new Error("There is no query param");
    const { data } = await axios.get(tmdb.getDataByQuery("person", query));

    const people: PersonResult = data.results.map((person: Person) => ({
      id: person.id,
      title: person.name,
      image: person.profile_path,
      release_date: null,
      vote: null,
      overview: null,
    }));

    return NextResponse.json(people);
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
};
