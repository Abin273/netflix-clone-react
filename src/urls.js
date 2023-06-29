import { API_KEY } from "./Constants/constants"


export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;

export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`  //we can start without / also 

export const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`

export const romanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`