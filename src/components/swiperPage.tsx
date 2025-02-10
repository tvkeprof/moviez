"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
type Movie = {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  trailerUrl: string;
};
export const SwiperSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const mainUrl = `${baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;
  const getMovies = async () => {
    try {
      const response = await fetch(mainUrl);
      const result = await response.json();
      const movies = result.results;
      const moviesWithTrailers = await Promise.all(
        movies.map(async (movie: Movie) => {
          const trailerUrl = await getMovieTrailer(movie.id);
          return { ...movie, trailerUrl };
        })
      );
      setMovies(moviesWithTrailers);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieTrailer = async (movieId: number) => {
    const trailerUrl = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
    try {
      const response = await fetch(trailerUrl);
      const result = await response.json();
      const trailer = result.results.find(
        (video: any) => video.type === "Trailer" && video.site === "YouTube"
      );
      return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : "#";
    } catch (error) {
      console.log("Error fetching trailer:", error);
      return "#";
    }
  };

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="w-full h-[600px] bg-green-400 mt-[90px] flex items-center bg-[#09090B]">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="flex items-center justify-center"
          >
            <div className="flex w-[20%] absolute flex-col justify-items-start p-5 space-y-4 pt-[150px] pl-[100px]  text-white">
              <p className="text-sm">Now playing:</p>
              <h1 className="text-2xl font-medium font-bold Light:text-white-200">
                {movie.original_title}
              </h1>
              <p className="text-sm"> ⭐️{movie.vote_average}/10</p>
              <p className="text-l line-clamp-5 font-normal font-inter">
                {movie.overview}
              </p>
              <a
                href={movie.trailerUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[170px] bg-gray-800 text-white px-4 py-2 rounded-xl text-sm md:text-lg transition-all hover:bg-gray-700"
              >
                🎬 Watch Trailer
              </a>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              className=" w-full h-[600px]"
            />
            {}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
