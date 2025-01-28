"use client"
import { useState } from "react";



 //db430a8098715f8fab36009f57dff9fb
 const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}&api_key=db430a8098715f8fab36009f57dff9fb`)
    const result = await response.json();
    const movies = result.data;

  }

