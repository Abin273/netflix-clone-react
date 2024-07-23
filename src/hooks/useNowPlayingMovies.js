import axios from "axios";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/Constants/netflixApis";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const nowPlayingMovies = await axios.get(
      NOW_PLAYING_MOVIES_URL,
      API_OPTIONS
    );
    
    dispatch(addNowPlayingMovies(nowPlayingMovies.data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export { useNowPlaingMovies };
