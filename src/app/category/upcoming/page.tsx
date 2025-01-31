"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";

import { useEffect, useState } from "react";
type Movie = {
  id: number;
  poster_path: string;
  vote_average: number;
  original_title: string;
};

const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1)

  const apiKey = "db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl = `${baseUrl}/movie/upcoming?language=en-US&page=${currentPage}&api_key=${apiKey}`;

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

  return (
    <>
    
    <div className="flex flex-col h- w-full">
      <HeaderPage />
      <section className="w-full max-w-screen-xl bg-black-600 page-primary py-8 lg:py-13 space-y-8 lg:space-y-13  mt-[100px]  m-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-foreground text-2xl font-semibold">Upcoming</h3>
          <button className="text-foreground text-l font-semibold">
            See more...
          </button>
        </div>
        <div className=" grid grid-flow-col grid-rows-4 gap-[20px]">
          {movies.map((movie) => (
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
        <div className="flex gap-4 justify-end">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 cursor-pointer">1</button>
            <button>2</button>
            <button>3</button>
            <p>...</p>
            <button onClick={incresment()=> currentPage + 1}>Next > </button>
        </div>
      </section>
    </div>
      <FooterSection/>
    </>
  );
};

export default Upcoming;
