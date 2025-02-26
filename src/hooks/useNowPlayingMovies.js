import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import {
  API_OPTIONS,
  NOW_PLAYING_MOVIES_URL,
} from "../utils/Constants/tmdbApis";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesExist = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      
      const nowPlayingMovies = await axios.get(
        NOW_PLAYING_MOVIES_URL,
        API_OPTIONS
      );
  
      dispatch(addNowPlayingMovies(nowPlayingMovies.data.results));
      
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    !nowPlayingMoviesExist && getNowPlayingMovies();
  }, []);
};

export { useNowPlaingMovies };
