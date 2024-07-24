import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptRecommentedMovies, gptSearchTmdbResults } = useSelector(
    (store) => store.gpt
  );
  if (!gptRecommentedMovies) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 rounded-lg text-white">
      <div>
        {gptRecommentedMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptSearchTmdbResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
