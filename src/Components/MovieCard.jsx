import React from 'react'
import { IMG_PATH_URL } from '../utils/Constants/netflixApis'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_PATH_URL+posterPath} alt='Movie cart' />
    </div>
  )
}

export default MovieCard
