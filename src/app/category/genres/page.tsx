"use client";

import { FooterSection } from "@/components/footerSection";
import { HeaderPage } from "@/components/headerPage";

const AllGenres = () => {
  return (
    <div className="flex flex-col">
      <HeaderPage />
      <div className="w-full h-screen bg-red-500">
        <div className="">
          <div className="w-full h-[200px] max-w-screen-xl bg-green-500 m-auto "></div>
          <div className="flex gap-4 justify-center">
            <div className="w-[390px] h-[280px] bg-gray-500"></div>
            <div className="w-[50px] h-screen bg-gray-500"></div>
            <div className="w-[810px] h-[1200px] bg-gray-500"></div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default AllGenres;
