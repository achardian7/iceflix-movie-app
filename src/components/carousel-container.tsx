"use client";

import PosterCarousel from "@/components/poster-carousel";

const CarouselContainer = () => {
  return (
    <main className="my-5 flex flex-col space-y-10">
      <PosterCarousel title="Trending Movies" queryKey="movies" type="movie" />
      <div className="bg-gradient-to-r from-red-600 to-red-900 px-10 py-6 text-center text-4xl font-bold text-white">
        <span>Explore millions of movies and tv series</span>
      </div>
      <PosterCarousel title="Trending on TV" queryKey="tv_series" type="tv" />
    </main>
  );
};

export default CarouselContainer;
