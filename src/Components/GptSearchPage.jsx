import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <div className='text-black'>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage
