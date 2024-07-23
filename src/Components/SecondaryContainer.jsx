// SecondaryContainer for browse page
/**
 * MovieList (Each list have multiple cards)
 * ========
 * Now playing
 * Trending
 * Horror
 */
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies)
  return (
    <div className='bg-black'>
        <div className='-mt-56 pl-12 relative z-20' >

        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcomming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
