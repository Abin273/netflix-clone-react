import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptRecommentedMovies: null,
    gptSearchTmdbResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResults: (state, action) => {
      const { gptRecommentedMovies, tmdbMoviesResults } = action.payload;
      state.gptRecommentedMovies = gptRecommentedMovies;
      state.gptSearchTmdbResults = tmdbMoviesResults;
    },
  },
});

export const { toggleGptSearchView, addSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
