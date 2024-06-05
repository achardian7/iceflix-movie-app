"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Poster from "@/components/poster";
import { PosterTypes } from "@/types";

interface PosterCarouselProps {
  queryKey: string;
  type: "movie" | "tv" | "person";
  title: string;
}

const PosterCarousel = ({ queryKey, type, title }: PosterCarouselProps) => {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`api/trending/${type}`);
        return data;
      } catch (error) {
        return error;
      }
    },
  });

  const data = query.data as PosterTypes[];

  return (
    <div className="mx-3 lg:mx-10">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="scrollbar-track-rounded-md flex w-full gap-5 overflow-x-scroll p-5 scrollbar-thin scrollbar-track-red-600 scrollbar-thumb-red-800">
        {data?.map((items) => <Poster key={items.id} {...items} type={type} />)}
      </div>
    </div>
  );
};

export default PosterCarousel;
