// MainContainer for browse page
import React from "react";
import { useSelector } from "react-redux";
import VideoTItle from "./VideoTItle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  // Early return
  // This is to avoid the error Cannot read properties of null (reading '0') ie, nowPlayingMovies[0] before storing values to reduxstore.
  if (!nowPlayingMovies) return;
  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTItle title={original_title} overview ={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
