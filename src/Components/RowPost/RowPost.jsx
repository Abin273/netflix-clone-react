import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import {imageUrl,API_KEY} from "../../Constants/constants";
import "./RowPost.css"
import axios from "../../axios";

function RowPost(props) {	//props are attributes of <RowPost />
	const[movies,setMovies]= useState([])
	const [youtubeVideoId,setYoutubeVideoId] = useState()
	useEffect(()=>{
		axios.get(props.url)
		.then((response)=>{
			console.log("Heloooooooooooo",response);
			setMovies(response.data.results)
		})
		.catch((error)=>{
			console.log(error);
		})
	},[])

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 1,
		},
	  };

	  function handleTrailer(id){
		console.log(id);
		axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).
		then((response)=>{
			console.log("resssssssssssss",response);
			if(response.data.results.length!==0){
				setYoutubeVideoId(response.data.results[0].key)
			}else{
				console.log("empty array");
			}

		})
	  }

	return (
		<div className="row">
			<h2>{props.title}</h2>
			<div className="posters">
				{movies.map((obj)=>{
					if(obj){   //some movies dont have data ,so we using if condition else shows 404 in console it that iteration
						return(
							<img onClick={()=>{handleTrailer(obj.id)}} className={props.isSmall?"small-poster":"poster"} src={props.isSmall?`${imageUrl+obj.backdrop_path}`:`${imageUrl+obj.poster_path}`} alt="poster"/>  //backtick in src won't work without curly bracket
						)
					}
				})}
				
			</div>
			{youtubeVideoId && <YouTube videoId={youtubeVideoId} opts={opts}  />}
		</div>
	);
}

export default RowPost;
