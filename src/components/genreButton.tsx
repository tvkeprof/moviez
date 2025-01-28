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
      <DropdownMenuContent className="grid grid-cols-3 gar-[10px]">
        <DropdownMenuItem onClick={() => router.push("/category")}>
          Action
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
