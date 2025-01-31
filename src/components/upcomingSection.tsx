"use client";

import { Key } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: number;
};
// /movie/upcoming?language=en-US&page=1
export const UpcomingSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const apiKey = "db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl = `${baseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`;

  const getMovies = async () => {
    try {
      const response = await fetch(popularUrl);
      const result = await response.json();
      const movies = result.results;

      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <section className="w-full max-w-screen-xl bg-black-600 page-primary py-8 lg:py-13 space-y-8 lg:space-y-13 h-screen  m-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-foreground text-2xl font-semibold">Upcoming</h3>
          <Link href={`/category/upcoming`}>
          <button className="text-foreground text-l font-semibold">See more...</button>
          </Link>
        </div>
        <div className=" grid grid-flow-col grid-rows-2 gap-[20px]">
          {movies.slice(0, 10).map((movie) => (
            <div
              key={movie.id}
              className="w-[230px] h-[440px] dark:bg-[#27272A] bg-[#F4F4F5] gap-[10px] rounded-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="w-[230px] h-[340px] rounded-xl"
              />
              <div className="p-[10px]">
                <p className="text-l"> ⭐️{movie.vote_average}/10</p>
                <p className="text-xl">{movie.original_title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
