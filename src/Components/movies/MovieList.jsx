import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies List", movies);
  return (
    <div className="px-6 text-white">
        <h1 className="text-xl md:text-4xl py-4 font-bold">{title}</h1> 
      <div className="flex  overflow-y-scroll scrollgar no-scrollbar ">

        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
