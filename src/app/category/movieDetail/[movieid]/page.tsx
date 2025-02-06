"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
};

const MovieDetail = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const detailUrl = `${baseUrl}/movie/${movieid}?language=en-US&api_key=${apiKey}`;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(detailUrl);
        const result = await response.json();
        setMovie(result);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };

    if (movieid) {
      getMovie();
    }
  }, [movieid]);
  console.log(movie);

  if (!movie) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col gap-[30px] items-center">
      <HeaderPage />
      <div className=" w-[1080px] h-[3000px] mt-[100px] flex flex-col gap-[30px]">
        {/* <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold">{movie.original_title}</h1>
          <p className="text-lg text-gray-500 mt-2">⭐️ {movie.vote_average.toFixed(1)}/10</p>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            className="w-[300px] h-[450px] mt-5 rounded-lg shadow-lg"
          />
          <p className="mt-4 max-w-2xl text-gray-300">{movie.overview}</p>
        </div> */}
        <div className="w-full h-auto bg-white flex flex-col gap-[20px]">
          <div className="w-full h-[100px] bg-red-500">h</div>
          <div className="flex justify-between">
            <div className="w-[25%] h-[400px] bg-green-500">
                <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            </div>
            <div className="w-[70%] h-[400px] bg-green-500">
                <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-full h-full"
                />
            </div>
          </div>
        </div>
        <div className="h-[1000px] w-full bg-green-500">
          <div className="h-[100px] w-full bg-red-500">
            <p>/Genres</p>
          </div>
        </div>
        <div className="h-[1000px] w-full bg-yellow-500">

        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default MovieDetail;
