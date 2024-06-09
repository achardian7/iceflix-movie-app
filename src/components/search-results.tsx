import { PosterTypes } from "@/types";
import OvalLoader from "@/components/loader/oval-loader";
import Image from "next/image";
import Link from "next/link";
import { TMDBService } from "@/services/tmdb-service";
import yearParser from "@/utils/year-parser";

interface SearchResultsProps {
  results: PosterTypes[];
  isFetching: boolean;
  variant: "movie" | "tv" | "person";
  status: "success" | "error" | "pending";
  query: string;
}

const SearchResults = ({
  results,
  isFetching,
  variant,
  status,
  query,
}: SearchResultsProps) => {
  const tmdb = new TMDBService();

  return (
    <div className="flex flex-col gap-2">
      {isFetching && (
        <div className="mx-auto">
          <OvalLoader />
        </div>
      )}
      {results &&
        results?.map((item) => (
          <Link key={item.id} href={`/${variant}/${item.id}`}>
            <div
              key={item.id}
              className="flex items-center gap-3 overflow-clip rounded-md border border-gray-300 p-2 dark:border-gray-700"
            >
              <div className="relative h-[140px] w-[90px]">
                <Image
                  src={tmdb.getImage(item.image, "w500")}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h2 className="text-lg font-bold lg:text-xl">
                  <span>{item.title}</span>
                  {item.release_date && (
                    <span> ({yearParser(item.release_date)})</span>
                  )}
                </h2>
                {item.overview && (
                  <p className="hidden text-[12px] text-gray-800 dark:text-gray-200 lg:block">
                    {item.overview.length > 200
                      ? `${item.overview.slice(0, 200)}...`
                      : item.overview}
                  </p>
                )}
                <Link
                  href={`/${variant}/${item.id}`}
                  className="w-fit rounded-full border border-red-600 p-2 text-[12px] text-gray-800 hover:bg-red-600 dark:text-white"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </Link>
        ))}
      {!isFetching && status === "success" && results.length === 0 && query && (
        <div className="mt-3 text-center font-medium">
          <span>Cannot find &quot;{query}&quot; in database</span>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
