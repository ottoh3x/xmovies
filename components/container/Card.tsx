import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardModal from "./CardModal";

interface CardProps {
  name: string;
  poster_path: string;
  type?: string;
  url?: string;
  duration?: string;
  vote_average: string;
  id: string;
  heading: string;
  title: string;
  media_type: string;
  overview: string;
  backdrop_path: string;
  profile_path: string;
  character: string;
  selected: any;
}

function Card(movie: CardProps) {
  const { CurrentState, ContinueWatching } = useSelector((state: any) => state);
  const [selected, setSelected] = useState(false);

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

  const handleClick = () => {
    setSelected(false);
  };
  const handleSelected = () => {
    setSelected(!selected);
  };
  const handleSimilar = () => {
    setSelected(false);
  };
  console.log(selected);
  return (
    <>
      <AnimatePresence>
        {selected && (
          <CardModal
            {...movie}
            handleClick={handleClick}
            handleSimilar={handleSimilar}
          />
        )}
      </AnimatePresence>

      <div
        className="flex flex-col gap-2  rounded-b-lg  cursor-pointer hover:brightness-75	hover:scale-105 ease-out relative shadow-2xl transition-transform duration-500"
        onClick={handleSelected}
      >
        <div className="">
          <div className={`drop-shadow-xl w-full h-[11rem] lg:h-[19rem]`}>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
                  : movie.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
              }
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
