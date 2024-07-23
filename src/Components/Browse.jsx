// This is browse Page
/**
 * Main container
 *  - Video background
 *  - Video title
 * Secondary container
 *  - Movies list (as n rows)
 *  - Cards (n cards per row)
 */
import React from "react";
import Header from "./Header";
import { useNowPlaingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlaingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
