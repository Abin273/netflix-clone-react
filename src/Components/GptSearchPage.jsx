import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundImg from "../assets/background/login-banner.jpg";

const GptSearchPage = () => {
  return (
    <div>
        <div className="fixed -z-20">
        <img className="" src={backgroundImg} alt="netflix-logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage
