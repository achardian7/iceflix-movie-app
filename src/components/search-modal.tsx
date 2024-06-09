"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/ui/button";
import { cn } from "@/utils/cn";
import useSearchModal from "@/store/use-search-modal";
import { PosterTypes } from "@/types";
import SearchResults from "@/components/search-results";

const SearchModal = () => {
  const { isOpen, setIsOpen } = useSearchModal();
  const [variant, setVariant] = useState<"movie" | "tv" | "person">("movie");
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 1000);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const route = useRouter();

  const { data, refetch, isFetching, status } = useQuery({
    queryKey: ["movies_query"],
    queryFn: async () => {
      try {
        if (isOpen && query) {
          const { data } = await axios.get(
            `api/search/${variant}?query=${query}`,
          );
          return data;
        }
        return [];
      } catch (error) {
        return error;
      }
    },
  });

  const results = data as PosterTypes[];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`/search?variant=${variant}&query=${text}`);
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
      document.body.classList.add("modal-open");
    } else {
      modalRef.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  useEffect(() => {
    refetch();
  }, [query, refetch, variant, isOpen]);

  return (
    <dialog
      ref={modalRef}
      onClick={() => setIsOpen(false)}
      className="w-full rounded-md border-none border-gray-800 bg-gray-100 outline-none backdrop:backdrop-blur-sm dark:bg-gray-950 lg:w-[600px]"
    >
      <div className="relative w-full p-8" onClick={(e) => e.stopPropagation()}>
        <Button
          onClick={() => setIsOpen(false)}
          className="-mt-2 mb-3 rounded-full p-2 text-white"
        >
          <X className="h-4 w-4" />
        </Button>
        <form onSubmit={handleSubmit} className="my-3 flex flex-col">
          <div className="flex items-center gap-2">
            <input
              placeholder="Search by keyword"
              className="flex-1 rounded-sm border-none px-2 py-1 outline-none ring-red-600/60 focus:ring focus:ring-offset-1 focus:ring-offset-red-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button className="text-white">Search</Button>
          </div>

          <div className="my-3 flex items-center text-sm text-white">
            <div>
              <input
                type="radio"
                name="variants"
                id="movie"
                checked={variant === "movie"}
                onChange={(e) => setVariant("movie")}
                hidden
              />
              <label
                htmlFor="movie"
                className={cn(
                  variant === "movie" ? "bg-red-600" : "bg-gray-400",
                  "p-2",
                )}
              >
                Movie
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="variants"
                id="tv"
                hidden
                checked={variant === "tv"}
                onChange={(e) => setVariant("tv")}
              />
              <label
                htmlFor="tv"
                className={cn(
                  variant === "tv" ? "bg-red-600" : "bg-gray-400",
                  "border-x border-gray-300 p-2 dark:border-gray-700",
                )}
              >
                TV
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="variants"
                id="person"
                hidden
                checked={variant === "person"}
                onChange={(e) => setVariant("person")}
              />
              <label
                htmlFor="person"
                className={cn(
                  variant === "person" ? "bg-red-600" : "bg-gray-400",
                  "p-2",
                )}
              >
                Person
              </label>
            </div>
          </div>
        </form>
        <SearchResults
          results={results}
          isFetching={isFetching}
          variant={variant}
          query={query}
          status={status}
        />
      </div>
    </dialog>
  );
};

export default SearchModal;
