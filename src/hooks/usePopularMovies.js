import axios from "axios";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/Constants/netflixApis";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const popularMovies = await axios.get(
      POPULAR_MOVIES_URL,
      API_OPTIONS
    );
    
    dispatch(addPopularMovies(popularMovies.data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export { usePopularMovies };
