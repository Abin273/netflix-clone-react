import React, { useRef } from "react";

import { LANGUAGE } from "../utils/Constants/language";
import { useDispatch, useSelector } from "react-redux";
import { openaiClient } from "../config/openai";
import axios from "axios";
import { API_OPTIONS, SEARCH_MOVIES_URL } from "../utils/Constants/tmdbApis";
import { addSearchResults } from "../utils/redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies fot the query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      // const gptResults = await openaiClient.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [{ role: "user", content: gptQuery }],
      //   // stream: true,
      // });
      // // for await (const chunk of gptResults) {
      // //   process.stdout.write(chunk.choices[0]?.delta?.content || "");
      // // }
      // if (!gptResults.choices) throw new Error("Unable to fetch movies");
      // console.log(gptResults.choices?.[0].message?.content);

      // // Gadar, Sholay, Don, Golmaal, Koi Mil Gaya
      // const gptMovies = gptResults.choices?.[0].message?.content.split(", ");
      const gptMovies = ["Gadar", "Sholay", "Don", "Golmaal", "Koi Mil Gaya"]
      // First it returns 5 promises with pending state like, 
      // [Promise {<pending>}, Promise {<pending>}, Promise {<pending>}, Promise {<pending>}, Promise {<pending>}]
      const tmdbApiCalls = gptMovies.map((movie) => searchMoviesTMDB(movie));
      // Promise.all take the array of 5 promises and wait for every one is resolved.
      const tmdbMoviesResults = await Promise.all(tmdbApiCalls)
      console.log(tmdbMoviesResults);
      dispatch(addSearchResults({gptRecommentedMovies: gptMovies, tmdbMoviesResults}))
    } catch (error) {
      // console.log("GPT api need payment");
      console.log(error);
    }
  };

  // Search movies in tmdb
  // First it returns a promise with pending state. Then resolve it. 
  const searchMoviesTMDB = async (movie) => {
    const data = await axios.get(SEARCH_MOVIES_URL + movie, API_OPTIONS);
    return data?.data.results;
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          className="bg-black w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={LANGUAGE[language].gptSearchPlaceHolder}
          />
          <button
            className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
            onClick={handleGptSearchClick}
          >
            {LANGUAGE[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
