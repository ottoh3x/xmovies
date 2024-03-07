import React, { useEffect, useState, useRef } from "react";
import Backdrop from "../Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiFillYoutube, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToMyList, removeFromList } from "../../redux/actions/myListAction";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaImdb, FaPlay } from "react-icons/fa";
import Container from "./Container";
import Card from "./Card";
import SimilarCard from "./SimilarCard";
import ReactPlayer from "react-player/lazy";

function timeConvert(n: any) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "hr " + rminutes + "min";
}

interface CardModalProps {
  title?: string;
  backdrop_path?: string;
  overview?: string;
  handleClick?: any;
  id: any;
  media_type?: string;
  poster_path?: string;
  name?: string;
  heading: string;
  handleSimilar?: any;
  place?: string;
}

function CardModal(card: CardModalProps) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const { MyList } = useSelector((state: any) => state);
  const router = useRouter();
  const [isTrailer, setIsTrailer] = useState(false);
  const [notification, setNotification] = useState(false);
  const [data, setData] = useState<any>([]);
  const [cardId, setCardId] = useState(card.id);
  const [trailer, setTrailer] = useState<any>("");
  const [similar, setSimilar] = useState<any>([]);
  const [castMovies, setCastMovies] = useState<any>([]);
  const [heading, setHeading] = useState(card.heading);
  const cardRef = useRef<any>(null);

  useEffect(() => {
    fetchTrailer();
    const sim = fetchSimilar();
    fetchData();
    fetchCastMovies();
    const current = MyList.filter((item: any) => item.id == data.id);
    current.length > 0 ? setClick(true) : setClick(false);

    return () => {
      sim;
    };
  }, [cardId, trailer, data.id, heading]);

  const fetchCastMovies = async () => {
    let url = `https://api.themoviedb.org/3/person/${data.id}/combined_credits?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    console.log(res);
    setCastMovies(res?.cast);
  };

  const fetchSimilar = async () => {
    const url = `https://api.themoviedb.org/3/${
      card.heading.includes("TV") ||
      card.heading.includes("Shows") ||
      card.heading.includes("Series") ||
      card.media_type === "tv" ||
      heading === "tv" ||
      heading === "SERIES YOU MAY ALSO LIKE"
        ? "tv"
        : "movie"
    }/${data.id}/${
      card.media_type === "tv" || card.heading.includes("Shows")
        ? "recommendations"
        : "similar"
    }?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setSimilar(res?.results?.slice(0, 9));
  };

  const fetchTrailer = async () => {
    let url = `https://api.themoviedb.org/3/${
      card.heading.includes("TV") ||
      card.heading.includes("Shows") ||
      card.heading.includes("Series") ||

      card.media_type === "tv" ||
      heading === "tv"
        ? "tv"
        : "movie"
    }/${data.id}/videos?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    let trailer = res.results;
    setTrailer(trailer?.filter((t: any) => t.type === "Trailer")[0]?.key);
  };

  const fetchData = async () => {
    let url = `https://api.themoviedb.org/3/${
      heading.includes("TV") ||
      heading.includes("Shows") ||
      heading.includes("Series") ||
      card.media_type === "tv" ||
      heading === "tv"
        ? "tv"
        : heading === "Casts"
        ? "person"
        : "movie" 
    }/${cardId}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setData(res);
    console.log(res)
  };

  const handleDispatch = () => {
    if (click) {
      dispatch(removeFromList(data.id));
      setClick(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    } else {
      dispatch(
        addToMyList({
          id: data.id,
          title: data.title || data.name,
          poster_path: data.poster_path,
          backdrop_path: data.backdrop_path,
          overview: data.overview,
          media_type: data.imdb_id ? "movie" : "tv",
        }),
      );
      setClick(true);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    }
  };

  console.log(card.media_type)
  console.log(data.heading)

  return (
    <Backdrop onClick={card.handleClick}>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{
          y: 0,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 130,
            damping: 15,
          },
        }}
        style={{zoom:""}}
        exit={{ y: "100vh" }}
        ref={cardRef}
        className="w-full max-w-[700px] 2xl:max-w-[800px] bg-[#060606] h-full mx-auto shadow-2xl mt-[9rem] overflow-y-scroll scroll-smooth	 cursor-default my-12"
        onClick={(e: any) => e.stopPropagation()}
      >
        {!isTrailer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            className=""
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original//${
                data.backdrop_path || data.profile_path
              }) `,
              backgroundSize: "cover",
              boxShadow:
                "rgb(6 6 6) 0px 11px 0px -10px inset, rgb(6 6 6) 0px -92px 46px -10px inset",
              height: "370px",
              position: "relative",
              backgroundPosition: "center",
            }}
          >
            {" "}
            <span
              onClick={card.handleClick}
              className=" p-2 absolute cursor-pointer hover:scale-105 top-0 right-0 drop-shadow-2xl"
            >
              <AiOutlineClose size={26} strokeWidth={3.5} />
            </span>
          </motion.div>
        )}
        {isTrailer && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            config={{
              youtube: {
                playerVars: { modestbranding: 1 },
              },
            }}
            playing
          />
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="flex flex-col gap-1 px-4 mb-3"
        >
          <div className={`p-3 z-50`}>
            <div className={`${!isTrailer && "mt-[-6rem]"}`}>
              <h1 className="text-gray-200 font-black text-3xl mb-2">
                {data.title || data.name}
              </h1>

              {heading !== "Casts" && (
                <div className="text-[#b3b3b3] font-normal flex gap-2 ">
                  <span className="px-2 bg-neutral-900 font-semibold rounded-sm outline outline-1 outline-neutral-700">
                    {data?.first_air_date?.split("-")[0] ||
                      data?.release_date?.split("-")[0]}
                  </span>
                  {data?.imdb_id && (
                    <span className="">
                      {timeConvert(data?.runtime || data?.episode_run_time)}
                    </span>
                  )}
                  <span className="px-2 bg-neutral-900 font-semibold rounded-sm outline outline-1 outline-neutral-700">
                    {data?.imdb_id ? "Movie" : "TV"}
                  </span>
                  {!data.imdb_id && (
                    <span className="">{data?.number_of_seasons} Season</span>
                  )}
                  {!data.imdb_id && (
                    <span className="">
                      {data?.number_of_episodes} Episodes
                    </span>
                  )}
                </div>
              )}
            </div>

            <p className={`text-zinc-300 text-sm py-1 mt-[0.7rem]`}>
              {data.overview || data.biography}
            </p>
          </div>
          {heading !== "Casts" && (
            <div className="flex gap-1 mb-2">
              <Link
                href={
                  card?.heading?.includes("Shows") || card.media_type == "tv"
                    ? `/tv/${data.id}`
                    : data.heading === "Casts"
                    ? `/cast/${data.name + "-" + data.id}`
                    : `/movie/${data.id}`
                }
              >
              <button
                onClick={card.handleClick}
                className="py-1 px-3 bg-violet-700 text-gray-200 rounded-sm font-semibold flex  items-center gap-2 hover:text-black hover:bg-gray-200 hover:scale-105 transition-all duration-500 easeInOut"
              >
                  <div className="flex gap-2 items-center">
                    <FaPlay size={16} />
                    <span>PLAY</span>
                  </div>
              </button>
                </Link>
              <button
                onClick={() => setIsTrailer(true)}
                className="py-1 px-3 bg-red-600 text-gray-200 rounded-sm font-semibold flex  items-center gap-2 hover:text-black hover:bg-gray-200 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <AiFillYoutube size={22} />
                <span>TRAILER</span>

                
              </button>
              {data?.imdb_id && (

              <a
                href={`https://www.imdb.com/title/${data?.imdb_id}`}
                target="_blank"
                className="py-1 px-3 bg-[#DBA506] text-gray-200 rounded-sm font-semibold flex  items-center gap-2 hover:text-black hover:bg-gray-200 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <FaImdb size={22} />
                <span>IMDB</span>

                
              </a>
              )}

              
              <div className="w-full flex justify-end">
                {click ? (
                  <button
                    onClick={handleDispatch}
                    className="p-2 rounded-full bg-gray-200 text-black  font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#4815ff] hover:scale-105 transition-all duration-300 easeInOut"
                  >
                    <IoMdRemove size={18} strokeWidth={2.5} />
                    {/* <span>REMOVE FROM MY LIST</span> */}
                  </button>
                ) : (
                  <button
                    onClick={handleDispatch}
                    className="p-2 rounded-full bg-gray-200 text-black font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#4815ff] hover:scale-105 transition-all duration-300 easeInOut"
                  >
                    <IoMdAdd size={18} strokeWidth={2.5} />
                    {/* <span>ADD TO LIST</span> */}
                  </button>
                )}
              </div>
            </div>
          )}
          <div className="grid grid-cols-3 gap-2 mb-20 mt-4">
            {heading !== "Casts" &&
              similar?.map((item: any, index: any) => (
                <SimilarCard
                  key={index}
                  {...item}
                  heading={card.heading}
                  handleSimilar={card.handleSimilar}
                  handlePage={() => {
                    setIsTrailer(false);
                    setCardId(item.id);
                    cardRef?.current?.scrollTo(0, 0);
                  }}
                />
              ))}
            {heading === "Casts" &&
              castMovies?.map((item: any, index: any) => (
                <SimilarCard
                  key={index}
                  {...item}
                  heading={card.heading}
                  handleSimilar={card.handleSimilar}
                  handlePage={() => {
                    setIsTrailer(false);
                    setCardId(item.id);
                    setHeading(item.media_type);

                    cardRef?.current?.scrollTo(0, 0);
                  }}
                />
              ))}
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: "-100vh", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { duration: 0.2, type: "spring", stiffness: 130 },
            }}
            exit={{
              
              x: "100vh",
              transition: { duration: 0.4 },
            }}
            className="fixed right-1 bottom-1 bg-gray-300 rounded-lg border-l-[5px] border-neutral-900 text-stone-900 p-4 drop-shadow-2xl z-50"
          >
            {click ? (
              <h1 className="font-bold px-2 flex items-center gap-3">
                <AiOutlineCheck color="green" size={20} strokeWidth={3} />{" "}
                <span>{data.title || data.name} Was Added To My List</span>
              </h1>
            ) : (
              <h1 className="font-bold px-2 flex items-center gap-3">
                <AiOutlineClose size={20} color="red" strokeWidth={3} />{" "}
                <span>{data.title || data.name} Was Removed From My List</span>
              </h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Backdrop>
  );
}

export default CardModal;
