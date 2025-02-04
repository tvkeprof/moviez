// "use client"
// import { useEffect, useState } from "react";



// const apiKey = process.env.API_KEY;
// const baseUrl = "https://api.themoviedb.org/3";
// const SearchMovie = () => {
//   const [searchValue, setSearchValue]= useState("");
//   const [filteredMovie, setFilteredMovies] = useState([]);
  
  
//   const searchMovieUrl = `${baseUrl}/search/movie?query=${searchValue}&language=en-US&page=${page}&api_key=${apiKey}`

//   useEffect(()=>{
//    if(!searchValue.trim()){
//      setFilteredMovies([]);
//      return
//    }
//   },)
//   const getMovie = async () => {
//     try{
//       const response = await fetch(searchMovieUrl)
//       const result = await response.json();
//       const movies = result.data;
//       setSearchValue(movies);
//     } catch (err) {
//       console.log(err);
//     }
//    }
//    getMovie();



//    return (
//     <>
//     <div>
//       <input 
//       value={searchValue}
//       onChange={(e)=> setSearchValue(e.target.value)}/>
//             {filteredMovie.length > 0 && (
//         <ul className="mt-4">
//           {filteredMovie.map((movie) => (
//             <li key={movie.id} className="py-2 border-b">
//               {movie.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
    
//     </>
//    )
// }
// export default SearchMovie
