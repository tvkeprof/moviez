"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
};

type Crew = {
  id: number;
  job: string;
  name: string;
};

type CastMember = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
  release_date: number;
  runtime: number;
  backdrop_path: string;
  genres: Genre[];
  cast: string[];
};

type MoreLike = {};
const formatRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

const MovieDetail = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<{
    cast?: CastMember[];
    crew?: Crew[];
  } | null>(null);
  const [moreLike, setMoreLike] = useState<any[]>([]);
  const router = useRouter();

  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const detailUrl = `${baseUrl}/movie/${movieid}?language=en-US&api_key=${apiKey}`;
  const creditsUrl = `${baseUrl}/movie/${movieid}/credits?language=en-US&api_key=${apiKey}`;
  const moreLikeUrl = `${baseUrl}/movie/${movieid}/similar?language=en-US&page=1&api_key=${apiKey}`;
  console.log(moreLikeUrl);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(detailUrl);
        const result = await response.json();
        setMovie(result);
      } catch (err) {
        console.error(err);
      }
    };

    if (movieid) {
      getMovie();
    }
  }, [movieid]);
  useEffect(() => {
    const getMoreLike = async () => {
      try {
        const response = await fetch(moreLikeUrl);
        const result = await response.json();
        setMoreLike(result.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMoreLike();
  }, [movieid, moreLikeUrl]);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await fetch(creditsUrl);
        const result = await response.json();
        setCredits(result);
      } catch (err) {
        console.log(err);
      }
    };
    getCredits();
  }, [movieid, creditsUrl]);

  if (!movie) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // console.log("Movie:", movie);
  // console.log("Credits:", credits);
  console.log("MoreLike:", moreLike);
  const director =
    credits?.crew?.find((member: Crew) => member.job === "Director")?.name ||
    "";
  const writer =
    credits?.crew?.find((member: Crew) => member.job === "Writer")?.name || "";

  return (
    <div className="w-full h-screen  flex flex-col gap-[30px] items-center">
      <HeaderPage />
      <div className=" w-[1080px] h-[3000px] mt-[100px] flex flex-col gap-[30px]">
        <div className="w-full h-auto  flex flex-col gap-[20px]">
          <div className="w-full h-[100px]  flex justify-between">
            <div className="space-y-1">
              <p className="break-words text-2xl font-bold w-52 lg:w-fit lg:text-4xl">
                {movie.original_title}
              </p>
              <p className="text-sm lg:text-lg">{`${movie.release_date}  · PG ·  ${formatRuntime(movie.runtime)}`}</p>
            </div>
            <div className="space-y-1">
              <p>Rating</p>
              <p className="font-medium">
                ⭐️{movie.vote_average.toFixed(1)}/10
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[25%] h-[400px] ">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="rounded-xl"
              />
            </div>
            <div className="w-[70%] h-[400px]">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="h-auto w-full space-y-5">
          <div className="h-[100px] w-full ">
            <div className="flex gap-4">
              {movie.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="inline-flex items-center border px-2.5 py-0.5 font-semibold flex gap-3 text-foreground rounded-full text-xs "
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <div className="p-2">{movie.overview}</div>
          </div>
          <div className="w-full h-[200px]">
            <div className=" flex gap-[50px] border-b-[1px] py-[10px]">
              <h1 className="font-extrabold">Director </h1>
              <p>{director}</p>
            </div>
            <div className="flex border-b gap-[50px] py-[10px]">
              <h1 className="font-extrabold">Writers</h1>
              <p>{writer}</p>
            </div>
            <div className="flex border-b gap-[50px]  py-[10px]">
              <h1 className="font-extrabold">Stars</h1>
              <div className="flex gap-[20px]">
                {credits?.cast?.slice(0, 5).map((e) => (
                  <p key={e.id}>{e.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-full">
        <div className="flex justify-between py-4">
              <h1 className="text-2xl font-semibold">More like this </h1>
              <button
              className="hover:border-b"
              onClick={()=>router.push(`/category/movieDetail/${movie.id}/similarMovie`)}
              >See more...</button>
            </div>
          <div className="flex gap-8 flex-wrap ">
            {moreLike.slice(0, 5).map((el) => (
              <div
                key={el.id}
                className="w-[190px] h-[380px] dark:bg-[#27272A] bg-[#F4F4F5] gap-[10px] rounded-xl hover:bg-primary/30"
                onClick={()=>router.push(`/category/movieDetail/${el.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                  alt={el.original_title}
                  className="w-[190px] h-[280px] rounded-xl"
                />
                <div className="p-[10px]">
                  <p className="text-l">
                    ⭐️{movie.vote_average.toFixed(1)}/10
                  </p>
                  <p className="text-l">{movie.original_title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default MovieDetail;
