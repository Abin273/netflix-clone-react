import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/Constants/tmdbApis";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesExist = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const popularMovies = await axios.get(POPULAR_MOVIES_URL, API_OPTIONS);

    dispatch(addPopularMovies(popularMovies.data.results));
  };

  useEffect(() => {
    !popularMoviesExist && getPopularMovies();
  }, []);
};

export { usePopularMovies };
