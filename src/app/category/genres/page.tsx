"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
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

  const handleGenreClick = (genreId: string) => () => {
    const newParams = new URLSearchParams(searchParams);
    genreIds.push(genreId);

    newParams.set("genreIds", genreIds.join(","));
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    const genresSearchUrl = `${baseUrl}/discover/movie?language=en&with_genres=${genreIds.join(
      ","
    )}&page=1&api_key=${apiKey}`;

    const getSearchGenres = async () => {
      try {
        const response = await fetch(genresSearchUrl);
        const result = await response.json();
        setSearchGenres(result);
      } catch (err) {
        console.log(err);
      }
    };
    getSearchGenres();
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      <HeaderPage />
      <div className="w-full h-screen bg-red-500">
        <div className="">
          <div className="w-full h-auto max-w-screen-xl bg-green-500 m-auto mt-[100px]">
            <h1 className="mb-8 text-2xl font-semibold text-foreground lg:text-3xl">
              Search Filter
            </h1>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="w-[390px] h-auto bg-gray-500">
              <div className="">
                <h1>Genres</h1>
                <p>See lists of movies by genre</p>
              </div>
              <div className="items-top flex space-x-2 flex-wrap gap-2 p-4">
                {genres.map((genre) => (
                  <div
                    onClick={handleGenreClick(genre.id)}
                    className="flex border rounded-full items-center p-1 gap-2"
                  >
                    <p className="text-xs">{genre.name}</p>
                    <Checkbox className="w-4 h-4 rounded-full" id="terms1" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[50px] h-screen bg-gray-500">
              <div className="shrink-0 bg-border w-[1px] hidden lg:block border h-screen mx-4"></div>
            </div>
            <div className="w-[810px] h-[1200px] bg-gray-500">
              {genres.map((movies) => (
                <div>{movies.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default AllGenres;
