import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TMDBService } from "@/services/tmdb-service";
import { PosterTypes } from "@/types";
import yearParser from "@/utils/year-parser";

const Poster = ({
  id,
  image,
  title,
  vote,
  release_date,
  type,
}: PosterTypes & { type: "tv" | "movie" | "person" }) => {
  const TMDB = new TMDBService();

  return (
    <Link href={`/${type}/${id}`}>
      <div className="group relative h-[300px] w-[200px] overflow-clip rounded-md will-change-scroll">
        <Image src={TMDB.getImage(image, "w500")} alt={title} fill />
        <div className="absolute inset-0 hidden justify-between bg-gradient-to-t from-black/70 to-transparent group-hover:flex group-hover:flex-col">
          <div className="flex space-x-2 bg-black/40 p-3 text-white backdrop-blur-sm">
            <Star fill="#FFDB00" className="h-5 w-5 text-[#FFDB00]" />
            {type !== "person" && vote && (
              <span className="font-bold">{Math.round(vote!)}</span>
            )}
          </div>
          <div className="flex h-20 w-full flex-col justify-center bg-black/40 p-3 text-white backdrop-blur-sm">
            <h3 className="space-x-1 font-semibold">
              <span>{title}</span>
              {type !== "person" && release_date && (
                <span className="text-gray-100">
                  ({yearParser(release_date)})
                </span>
              )}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
