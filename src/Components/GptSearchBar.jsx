import React from "react";
import backgroundImg from "../assets/background/login-banner.jpg";
import { LANGUAGE } from "../utils/Constants/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(store=> store.config.language)
  return (
    <div>
      <div className="absolute -z-20">
        <img className="" src={backgroundImg} alt="netflix-logo" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={LANGUAGE[language].gptSearchPlaceHolder}
          />
          <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
            {LANGUAGE[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
