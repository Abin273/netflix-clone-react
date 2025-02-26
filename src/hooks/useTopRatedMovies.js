import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/Constants/tmdbApis";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMoviesExist = useSelector((store) => store.movies.popularMovies);

  const getTopRatedMovies = async () => {
    try {
      const topRatedMovies = await axios.get(
        TOP_RATED_MOVIES_URL,
        API_OPTIONS
      );
      
      dispatch(addTopRatedMovies(topRatedMovies.data.results));
      
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    !topRatedMoviesExist && getTopRatedMovies();
  }, []);
};

export { useTopRatedMovies };
