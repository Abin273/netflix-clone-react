import axios from "axios";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/Constants/netflixApis";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedMovies = await axios.get(
      TOP_RATED_MOVIES_URL,
      API_OPTIONS
    );
    console.log(topRatedMovies.data.results);
    dispatch(addTopRatedMovies(topRatedMovies.data.results));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN);
    getTopRatedMovies();
  }, []);
};

export { useTopRatedMovies };
