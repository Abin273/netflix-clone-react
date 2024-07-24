import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import backgroundImg from "../../assets/background/login-banner.jpg";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen md:h-full object-cover" src={backgroundImg} alt="netflix-logo" />
      </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearchPage;
