"use client";

import HeaderLogo from "./ui/headerLogo";

import { ModeToggle } from "./ui/toggle";
import DownArrow from "./ui/chevron-down";
import { GenreButton } from "./genreButton";
import { useRouter } from "next/navigation";
import SearchMovie from "./searchInput";

export const HeaderPage = () => {
  const router = useRouter();
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[60px] bg-white dark:bg-[#09090B] flex items-center justify-center shadow-md z-50">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
          <button
            className="flex items-center gap-x-2 text-indigo-700"
            onClick={() => router.push("/")}
          >
            <HeaderLogo />
            <h4 className="italic font-bold">Movie Z</h4>
          </button>
          <div className="relative hidden items-center gap-x-3 lg:flex">
            <div className="flex w-[120px] h-10 border border-[#E4E4E7] items-center rounded-[10px] p-[10px] ">
              <DownArrow />
              <GenreButton />
            </div>
            <div className="">
              {/* <InputSearch /> */}
              <SearchMovie />
              {/* <Input
                type="text"
                placeholder="Search..."
                className="border-none "
              /> */}
            </div>
          </div>
          <ModeToggle />
        </div>
      </header>
    </>
  );
};
