"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function GenreButton() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <a>Genre</a>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-3 gar-[10px] ml-[180px] bg-white dark:bg-[#09090B]">
        <DropdownMenuItem onClick={() => router.push("/category")}>
          <div>
            <p>Action</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Adventure
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Animation
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Comedy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Crime
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Documentary
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Drama
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Family
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Fantasy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          History
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Horror
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Music
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Mystery
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Romance
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Science Fiction
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          TV Movie
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Thriller
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          War
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Western
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
