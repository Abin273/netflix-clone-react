import axios from "axios";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/Constants/tmdbApis";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedMovies = await axios.get(
      TOP_RATED_MOVIES_URL,
      API_OPTIONS
    );
    
    dispatch(addTopRatedMovies(topRatedMovies.data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export { useTopRatedMovies };
