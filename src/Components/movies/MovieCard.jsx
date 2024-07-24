import React from 'react'
import { IMG_PATH_URL } from '../../utils/Constants/tmdbApis'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-36 md:w-48 pr-4 hover:scale-105 transition-transform duration-300'>
      <img src={IMG_PATH_URL+posterPath} alt='Movie cart' />
    </div>
  )
}

export default MovieCard
