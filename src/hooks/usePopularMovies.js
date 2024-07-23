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
    console.log(popularMovies.data.results);
    dispatch(addPopularMovies(popularMovies.data.results));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN);
    getPopularMovies();
  }, []);
};

export { usePopularMovies };
