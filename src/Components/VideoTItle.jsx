// Video Title for browse page
import React from "react";

const VideoTItle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 text-white absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg font-bold w-1/4">{overview}</p>
      <div>
        <button className="bg-white hover:bg-opacity-80 text-black py-4 px-12 rounded-md text-xl">
          {" "}
          ◀️ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 hover:bg-opacity-80 text-white py-4 px-12 mx-2 rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTItle;
