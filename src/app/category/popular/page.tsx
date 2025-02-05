"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useEffect, useState } from "react";
type Movie = {
  id: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
};
const apiKey = process.env.API_KEY;
const Popular = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const baseUrl = "https://api.themoviedb.org/3";
  const popularUrl = `${baseUrl}/movie/popular?language=en-US&page=${currentPage}&api_key=${apiKey}`;

  const getMovies = async () => {
    try {
      const response = await fetch(popularUrl);
      const result = await response.json();
      const movies = result.results;
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, [currentPage]);
  return (
    <>
      <div className="flex flex-col w-full">
        <HeaderPage />
        <section className="w-full max-w-screen-xl bg-black-600 page-primary py-8 lg:py-13 space-y-8 lg:space-y-13  mt-[100px]  m-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-foreground text-2xl font-semibold">Popular</h3>
            <button className="text-foreground text-l font-semibold">
              See more...
            </button>
          </div>
          <div className=" grid grid-flow-col grid-rows-4 gap-[20px]">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="w-[230px] h-[440px] dark:bg-[#27272A] bg-[#F4F4F5] gap-[10px] rounded-xl hover:opacity-50"
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
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="w-16 h-9 bg-gray-700 text-white rounded-md"
              >
                &lt; Back
              </button>
            )}
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-md border ${
                  currentPage === page
                    ? "bg-gray-600 text-white"
                    : "bg-background text-white"
                }`}
              >
                {page}
              </button>
            ))}
            <p>...</p>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="h-9 w-16 bg-gray-700 text-white rounded-md"
            >
              Next &gt;
            </button>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
};
export default Popular;


