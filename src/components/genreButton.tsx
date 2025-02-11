"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Badge, ChevronRight } from "lucide-react";

type Genre = {
  id: number;
  name: string;
};

export function GenreButton() {
  const router = useRouter();
  const apiKey = process.env.API_KEY;
  const [genres, setGenres] = useState<Genre[]>([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const genresUrl = `${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`;

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetch(genresUrl);
        const result = await response.json();
        setGenres(result.genres);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    getGenres();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Genres</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[580px] bg-white dark:bg-black p-4 ml-[-25px]"
        align="start"
      >
        <DropdownMenuLabel className="border-b mb-4 ">
          <p className="text-2xl font-semibold">Genres</p>
          <p className="font-normal mb-4">See lists of movies by genre</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <Link href={"/category/genres"}>
              <DropdownMenuItem key={genre.id}>
                <p className="   p-1 flex items-center">
                  {genre.name}
                  <ChevronRight />
                </p>
              </DropdownMenuItem>
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
