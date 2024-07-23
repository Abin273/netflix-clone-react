// Video Background for browse page
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
// import YouTube from "react-youtube";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log("trailerVideo ", trailerVideo);
  // const onPlayerReady= (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // Fetch trailer video && update the store with trailer video data
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/L4DrolmDxmw?&rel=0&mute=1&autoplay=1`}
        // src={`https://www.youtube.com/embed/${trailerId}?si=Du68O3Z0OBFQIjZm`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay
      ></iframe>

      {/* {console.log("trailerVideo ", trailerVideo)} */}
      {/* <YouTube videoId={trailerVideo?.key} opts={opts} onReady={onPlayerReady} /> */}
    </div>
  );
};

export default VideoBackground;
