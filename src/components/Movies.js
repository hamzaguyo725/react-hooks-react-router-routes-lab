import React from "react";
import { Route } from "react-router-dom";
import { movies } from "../data";

function Movies() {
  let movieList = movies.map((movie,index)=>{
    return(
      <div key={index}>
        <h2>{movie.title}</h2>
        <h2>{movie.time}</h2>
        <ul>
          {movie.genres.map((genre,index)=>{
            return <li key={index}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;