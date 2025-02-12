"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"
type Genre = {
  id: number;
  name: string;
};
const AllGenres = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchGenres, setSearchGenres] = useState([]);
  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const genresUrl = `${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`;
  const [total, setTotal] = useState(0);

  console.log(searchGenres);

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
    if (genreIds.length === 0) {
      setSearchGenres([]);
      return;
    }
    const genresSearchUrl = `${baseUrl}/discover/movie?language=en&with_genres=${genreIds.join(
      ","
    )}&page=1&api_key=${apiKey}`;

    const getSearchGenres = async () => {
      try {
        const response = await fetch(genresSearchUrl);
        const result = await response.json();
        console.log(result);
        setSearchGenres(result.results || []);
        setTotal(result.total_results);
      } catch (err) {
        console.log(err);
      }
    };
    getSearchGenres();
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <HeaderPage />
      <div className="w-full h-auto]">
        <div className="">
          <div className="w-full h-auto max-w-screen-xl m-auto mt-[100px]">
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
                    <Badge variant="outline" className="flex gap-2 border-[#27272A]">

                    <p className="text-xs">{genre.name}</p>
                    <Checkbox
                      className="w-4 h-4 rounded-full border-[#27272A]"
                      id="terms1"
                      id={`genre-${genre.id}`}
                      checked={genreIds.includes(String(genre.id))}
                    />
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-auto">
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
      <FooterSection />
    </div>
  );
};
export default AllGenres;
