export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`,
  },
};

// Image cdn url. To display image or thumbnail image
export const IMG_PATH_URL = 'https://image.tmdb.org/t/p/w500/'

// List movies
export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
export const NOW_PLAYING_MOVIES_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
export const TOP_RATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

// Search movies
export const SEARCH_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query='