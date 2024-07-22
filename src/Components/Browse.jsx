import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";

const Browse = () => {
  const diapatch = useDispatch()
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`,
    },
  };
  const getNowPlayingMovies = async () => {
    const nowPlayingMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    console.log(nowPlayingMovies.data.results);
    diapatch(addNowPlayingMovies(nowPlayingMovies.data.results))
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN);
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
