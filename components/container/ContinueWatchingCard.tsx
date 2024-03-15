import React from 'react'
import { BsPlayCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";


interface ContinueWatchingCardProps {
    id:number;
    backdrop_path:string;
    title:string;
    name:string;
    media_type:string;
}

function ContinueWatchingCard(movie:ContinueWatchingCardProps) {
    const { CurrentState, ContinueWatching } = useSelector((state: any) => state);

    const dataState: any = { ep_num: 1, season: 1, ep_name: "Episode 1" };

  ContinueWatching?.filter((item: any) => {
    if (item.id == movie.id) {
      dataState["ep_name"] = item.episode_name;
      dataState["episode_image"] = item.episode_image;
    }
  });
  CurrentState?.filter((item: any) => {
    if (item.id == movie.id) {
      dataState["ep_num"] = item.episode_number;
      dataState["season"] = item.season_number;
      dataState["ep_name"] = item.episode_name;
    }
  });
  return (
    <>
          
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780//${movie?.backdrop_path}) `,
        backgroundSize: "cover",
        cursor:"pointer",

        width: "100%",
        height: "184px",
        boxShadow:
          "black 0px 11px 0px -10px inset, #111 0px -68px 50px -10px inset",
      }}
      className='hover:-translate-y-[1px] transform transition-all duration-500'
    >
      {" "}
      <span className="h-full flex items-center justify-center text-white hover:text-red-600">
        <BsPlayCircle size={50} />
      </span>
    </div>
    

    <div>
      <h1 className="font-normal  text-md lg:text-1xl whitespace-normal pb-[5px] overflow-hidden pt-1 text-ellipsis flex justify-start items-center">
        {movie.name || movie.title}
      </h1>
      {movie.media_type === "tv" && (
        <p className=" text-[#a8a6a6] text-sm pb-[5px]	">
          S{dataState.season}, E{dataState.ep_num}: {dataState.ep_name}
        </p>
      )}
    </div>
  </>
  )
}

export default ContinueWatchingCard