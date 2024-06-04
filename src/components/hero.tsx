import { AxiosError } from "axios";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getAllMovies } from "@/actions/movie.action";
import { TMDBService } from "@/services/tmdb-service";
import { MoviesResult } from "@/types";

const Hero = async () => {
  let movie;
  let errorMessage;
  const TMDB = new TMDBService();

  try {
    const data = (await getAllMovies("now_playing")) as MoviesResult;
    movie = data.results[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage = error.message;
    } else {
      errorMessage = "Something went wrong";
    }
  }

  if (!movie) return null;

  return (
    <article className="-mt-12">
      <div className="relative h-screen w-full overflow-clip rounded-md">
        <Image
          src={TMDB.getImage(movie.backdrop_path)}
          alt="movie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-40 flex h-full flex-col justify-end space-y-3 bg-gradient-to-r from-white/60 to-white/0 px-3 py-20 text-black dark:from-black dark:to-transparent dark:text-white md:justify-center md:py-3 lg:px-10">
          <h1 className="text-2xl font-semibold md:text-3xl">{movie.title}</h1>
          <p className="hidden max-w-xl text-base md:block">{movie.overview}</p>
          <Link
            href={`/movie/${movie.id}`}
            className="mx-auto flex w-fit items-center space-x-3 rounded-md bg-red-700 p-3 font-bold text-white hover:bg-red-600 md:mx-0"
          >
            <Play />
            Watch Now
          </Link>
        </div>
        <div className="absolute inset-0 z-30 flex h-full flex-col justify-center space-y-3 bg-gradient-to-t from-white/40 to-white/0 dark:from-black/90 dark:to-transparent"></div>
      </div>
    </article>
  );
};

export default Hero;