"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
type El = {
    id: number; 
    poster_path: string;
    vote_average: number;
    original_title: string;
}

const SimilarMovie = () => {
  const { movieid } = useParams();
  const [moreLike, setMoreLike] = useState<El[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiKey = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const moreLikeUrl = `${baseUrl}/movie/${movieid}/similar?language=en-US&page=${currentPage}&api_key=${apiKey}`;

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
  }, [movieid, moreLikeUrl, currentPage]);

  return (
    <div >
      <HeaderPage />
      <div className="w-full max-w-screen-xl bg-black-600 page-primary py-8 lg:py-13 space-y-8 lg:space-y-13  mt-[100px]  m-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-foreground text-2xl font-semibold">
            More like this
          </h3>
        </div>
      <div className=" grid grid-flow-col grid-rows-4 gap-[20px]">
        {moreLike.map((el) => (
            <div
            key={el.id}
            className="w-[230px] h-[440px] dark:bg-[#27272A] bg-[#F4F4F5] gap-[10px] rounded-xl"
            >
            <img
              src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
              className="w-[230px] h-[340px] rounded-xl"
              />
            <div className="p-[10px]">
              <p className="text-l"> ⭐️{el.vote_average.toFixed(1)}/10</p>
              <p className="text-xl">{el.original_title}</p>
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
    </div>
      <FooterSection />
    </div>
  );
};
export default SimilarMovie;
