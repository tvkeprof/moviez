
"use client";

import { Key } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: number;
};
// /movie/upcoming?language=en-US&page=1
export const PopularSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl = `${baseUrl}/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

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
      <section className="w-full max-w-screen-xl bg-black-600 page-primary py-8 lg:py-13 space-y-8 lg:space-y-13 h-auto  m-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-foreground text-2xl font-semibold">Popular</h3>
          <button className="text-foreground text-l font-semibold"
          onClick={()=> router.push("/category/popular")}>See more...</button>
        </div>
        <div className=" grid xl:grid-cols-5 lg:grid-cols-4 gap-[20px] md:grid-cols-3 sm:grid-cols-2">
          {movies.slice(0, 10).map((movie) => (
            <div
              key={movie.id}
              className="w-[158px] h-[340px]  lg:w-[230px] lg:h-[440px] dark:bg-[#27272A] bg-[#F4F4F5] gap-[10px] rounded-xl"
              onClick={()=>router.push(`/category/movieDetail/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="w-[158px] h-[240px]  lg:w-[230px] lg:h-[340px] rounded-xl"
              />
              <div className="p-[10px]">
                <p className="text-l"> ⭐️{movie.vote_average.toFixed(1)}/10</p>
                <p className="text-xl">{movie.original_title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
