// Video Background for browse page
// import { useSelector } from "react-redux";
import { useMovieTrailer } from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Fetch trailer video && update the store with trailer video data
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        // src={`https://www.youtube.com/embed/L4DrolmDxmw?&rel=0&mute=1&autoplay=1&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay
      ></iframe>

    </div>
  );
};

export default VideoBackground;
