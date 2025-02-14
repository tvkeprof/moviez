"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
// import PaginationD from "@/components/pagination";
import { DynamicPagination } from "@/components/pagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pages } from "next/dist/build/templates/app-page";

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};
const AllGenres = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchGenres, setSearchGenres] = useState<Movie[]>([]);
  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const genresUrl = `${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`;
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetch(genresUrl);
        const result = await response.json();
        setGenres(result.genres);
      } catch (err) {
        console.log(err);
      }
    };
    getGenres();
  }, []);

  const handleGenreClick = (genreId: number) => () => {
    const newParams = new URLSearchParams(searchParams);
    let newGenreIds = [...genreIds];
    newParams.set("page", currentPage.toString());

    if (newGenreIds.includes(String(genreId))) {
      newGenreIds = newGenreIds.filter((id) => id !== String(genreId));
    } else {
      newGenreIds.push(String(genreId));
    }
    if (newGenreIds.length > 0) {
      newParams.set("genreIds", newGenreIds.join(","));
    } else {
      newParams.delete("genreIds");
    }
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    const genresSearchUrl = `${baseUrl}/discover/movie?language=en&with_genres=${genreIds.join(
      ","
    )}&page=${currentPage}1&api_key=${apiKey}`;

    const getSearchGenres = async () => {
      try {
        const response = await fetch(genresSearchUrl);
        const result = await response.json();
        setSearchGenres(result.results || []);
        setTotal(result.total_results);
        setTotalPage(result.total_page);
      } catch (err) {
        console.log(err);
      }
    };
    getSearchGenres();
  }, [searchParams, currentPage]);

  console.log(searchGenres);

  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginationRange = () => {
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPage, currentPage + 3);
    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <HeaderPage />
      <div className="">
        <div className="">
          <div className=" max-w-screen-xl m-auto mt-[100px]">
            <h1 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
              Search Filter
            </h1>
          </div>
          <div className="flex gap-4 justify-center max-w-screen-xl m-auto ">
            <div className="w-1/3 h-auto space-y-5">
              <div className="text-foreground space-y-1">
                <h1 className="text-2xl font-semibold">Genres</h1>
                <p className="text-base">See lists of movies by genre</p>
              </div>
              <div className="items-top flex  flex-wrap gap-4">
                {genres.map((genre) => (
                  <div
                    key={genre.id}
                    onClick={handleGenreClick(genre.id)}
                    className=""
                  >
                    <Badge
                      variant="outline"
                      className="flex gap-2 border-[#27272A]"
                    >
                      <p className="text-xs">{genre.name}</p>
                      <Checkbox
                        className="w-4 h-4 rounded-full border-[#27272A]"
                        id={`genre-${genre.id}`}
                        checked={genreIds.includes(String(genre.id))}
                      />
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="shrink-0 bg-border border-[#27272A] w-[1px] hidden lg:block border h-full"></div>
            </div>
            <div className="w-full ">
              <h1 className="text-xl text-foreground font-semibold pb-5">
                {total} titles
              </h1>
              <div className="w-full h-auto flex flex-wrap gap-[20px] ">
                {searchGenres.length > 0 ? (
                  searchGenres.map((movie) => (
                    <div
                      key={movie.id}
                      className="mb-4 flex gap-4 flex-col flex-wrap w-[165px] h-[345px] dark:bg-[#27272A] bg-[#F4F4F5] rounded-xl"
                      onClick={() =>
                        router.push(`/category/movieDetail/${movie.id}`)
                      }
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        className="w-[165px] h-[245px] object-cover rounded"
                      />
                      <div className="p-1 w-full">
                        <p>⭐️{movie.vote_average.toFixed(1)}</p>
                        <p className="text-sm font-semibold truncate overflow-hidden w-full">
                          {movie.title}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No movies found for the selected genres.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => updateCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
            )}
{/* 
            {currentPage > 4 && (
              <>
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => updateCurrentPage(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
               
              </>
            )} */}
            {[1,2,3].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => updateCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => updateCurrentPage(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <FooterSection />
    </div>
  );
};
export default AllGenres;
