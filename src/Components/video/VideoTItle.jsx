// Video Title for browse page
import React from "react";

const VideoTItle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 text-white absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg font-bold w-1/4">{overview}</p>
      <div>
        <button className="bg-white hover:bg-opacity-80 text-black py-2 md:py-4 px-6 md:px-12 mt-5 md:mt-0 rounded-md text-xl">
          {" "}
          ◀️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-50 hover:bg-opacity-80 text-white py-4 px-12 mx-2 rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTItle;
