"use client"

import HeaderLogo from "./ui/headerLogo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ModeToggle } from "./ui/toggle";
import InputSearch from "./ui/input-search";
import DownArrow from "./ui/chevron-down";
import { GenreButton } from "./genreButton";
import { useRouter } from "next/navigation";
import SearchMovie from "./searchInput";



export const HeaderPage = () => {
  const router = useRouter ();
  return (
    <>
      <header className="w-full fixed top-0 inset-x-0 z-20 h-[59px] bg-white dark:bg-[#09090B] flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
          <button className="flex items-center gap-x-2 text-indigo-700"
          onClick={()=> router.push("/")}>
            <HeaderLogo />
            <h4 className="italic font-bold">Movie Z</h4>
          </button>
          <div className="relative hidden lg:flex items-center gap-x-3">
            <div className="flex w-[120px] h-10 border border-[#E4E4E7] items-center rounded-[10px] p-[10px] ">
              <DownArrow/>
              <GenreButton/>
            </div>
            <div className="">
              {/* <InputSearch /> */}
              <SearchMovie/>
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
