"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const apiKey = process.env.API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};
const SearchMovie = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovie, setFilteredMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const searchMovieUrl = `${baseUrl}/search/movie?query=${searchValue}&language=en-US&page=${page}&api_key=${apiKey}`;

  useEffect(() => {
    if (!searchValue.trim()) {
      setFilteredMovies([]);
      return;
    }

    const getMovie = async () => {
      try {
        const response = await fetch(searchMovieUrl);
        const result = await response.json();
        const movies = result.results;
        setFilteredMovies(movies);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [searchValue, page]);

  return (
    <div className="relative flex flex-col items-center justify-center ">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className=" w-[300px] h-10 border border-[#E4E4E7] rounded-[10px] p-[10px]"
        placeholder="Search..."
      />
      <div className="absolute top-[50px] ">
        {filteredMovie.length > 0 && (
          <ul className="border w-[600px] dark:bg-black bg-[#F4F4F5] cursor-pointer p-4 rounded-xl">
            {filteredMovie.slice(0, 5).map((movie) => (
              <Link href={`/category/movieDetail/${movie.id}`}>
                <div className="flex justify-between items-end hover:bg-[#27272A] border-b rounded-xl">
                  <div key={movie.id} className="py-2 flex ">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      className="w-[80px] h-[100px] rounded-xl"
                    />
                    <div className="p-[10px]">
                      <p className="">{movie.title}</p>
                      <p className="text-l">
                        ⭐️ {movie.vote_average.toFixed(1)}/10{" "}
                      </p>
                    </div>
                  </div>
                  <button className="hover:border-b mb-4">See more..</button>
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default SearchMovie;
