import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer
	},
});

export default store;
