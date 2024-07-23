import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer,
		gpt: gptReducer,
		config: configReducer,
	},
});

export default store;
