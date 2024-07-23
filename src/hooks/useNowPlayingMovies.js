import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants/netflixApis";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const nowPlayingMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    console.log(nowPlayingMovies.data.results);
    dispatch(addNowPlayingMovies(nowPlayingMovies.data.results));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN);
    getNowPlayingMovies();
  }, []);
};

export { useNowPlaingMovies };
