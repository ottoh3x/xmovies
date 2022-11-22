import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardModal from "./CardModal";
import { BsPlayCircle } from "react-icons/bs";
import { useRouter } from "next/router";

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
}

function HomeCard(movie: CardProps) {
  const { CurrentState, ContinueWatching } = useSelector((state: any) => state);
  const [selected, setSelected] = useState(false);
  const router = useRouter();

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
  return (
    <>
      {/* <AnimatePresence>
        {selected && (
          <CardModal
            {...movie}
            handleClick={handleClick}
            handleSimilar={handleSimilar}
          />
        )}
      </AnimatePresence> */}

      {movie.heading === "Continue Watching" ? (
        
          <>
          
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w780//${movie?.backdrop_path}) `,
                backgroundSize: "cover",

                width: "100%",
                height: "184px",
                boxShadow:
                  "rgb(6 6 6) 0px 11px 0px -10px inset, rgb(6 6 6) 0px -70px 50px -10px inset",
              }}
            >
              {" "}
              <span className="h-full flex items-center justify-center brightness-75">
                <BsPlayCircle size={50} color="white" />
              </span>
            </div>
            

            <div>
              <h1 className="font-normal text-center  text-md lg:text-1xl whitespace-normal pb-[5px] overflow-hidden pt-1 text-ellipsis flex justify-start items-center">
                {movie.name || movie.title}
              </h1>
              {movie.media_type === "tv" && (
                <p className=" text-[#a8a6a6] text-sm pb-[5px]	">
                  S{dataState.season}, E{dataState.ep_num}: {dataState.ep_name}
                </p>
              )}
            </div>
          </>
        
      ) : (
        <div
          onClick={handleSelected}
          className="flex flex-col gap-2  rounded-b-lg  cursor-pointer hover:brightness-75  ease-out relative hover:drop-shadow-xl transition-transform duration-500"
        >
          <div className="">
            <div
              className={`drop-shadow-xl w-[142px] md:w-full
             h-[12.3rem]  md:h-[320px]`}
            >
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
                priority={true}
                unoptimized={true}
              />
            </div>

            <div className="">
              {movie.heading === "Casts" && (
                <>
                  <h1 className="font-normal text-center  text-md lg:text-1xl whitespace-normal pb-[5px] overflow-hidden pt-1 text-ellipsis flex justify-start items-center">
                    {movie.name || movie.title}
                  </h1>
                  <p className=" text-[#a8a6a6] text-sm pb-[5px]	">
                    {movie.character}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeCard;
