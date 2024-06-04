"use server";

import { TMDBService } from "@/services/tmdb-service";
import { MovieList } from "@/types";
import axios, { AxiosError } from "axios";

const TMDB = new TMDBService();

export const getAllMovies = async (type: MovieList) => {
  try {
    const { data } = await axios.get(TMDB.getAllMovies(type));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.message,
      };
    }

    return {
      message: "Something went wrong!",
    };
  }
};
