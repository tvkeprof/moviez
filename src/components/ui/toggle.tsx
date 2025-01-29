"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-[10px]">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// return (

//     <>
//     <div className="w-full h-[600px] bg-green-400 top-[100px] mt-[90px]">

//     <Swiper
//   spaceBetween={20}
//   slidesPerView={3}
//   onSlideChange={() => console.log('slide change')}
//   onSwiper={(swiper) => console.log(swiper)}

// >
//   <SwiperSlide></SwiperSlide>
//   <SwiperSlide>Slide 2</SwiperSlide>
//   <SwiperSlide>Slide 3</SwiperSlide>
//   <SwiperSlide>Slide 4</SwiperSlide>
//   ...
// </Swiper>
//     </div>
//     </>
// )
{
  /* {movies && movies.length > 0 ? (
        movies.map((movie) => (
            <SwiperSlide key={movie.id} className="flex items-center justify-center">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className=" w-full h-[600px]"
            />
            
        </SwiperSlide>
      ))
    ) : (
        <SwiperSlide className="flex items-center justify-center text-white">
        Loading...
      </SwiperSlide>
    )} */
}
