import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyList, removeFromList } from "../../redux/actions/myListAction";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Trailer from "../Trailer";
import { AiFillYoutube, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoMdRemove, IoMdAdd } from "react-icons/io";

function timeConvert(n: any) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "hr " + rminutes + "min.";
}

interface DetailContainerProps {
  id: number;
  poster_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  release_date: string;
  status: string;
  homepage: string;
  runtime: number;
  media_type: string;
  genres: [];
  spoken_languages: [];
  production_countries: [];
  production_companies: [];
  created_by: [];
  title: string;
  backdrop_path: string;
  episode_run_time: number;
  number_of_episodes: number;
  number_of_seasons: number;
}

function DetailContainer(data: DetailContainerProps) {
  const [click, setClick] = useState(false);
  const { MyList } = useSelector((state: any) => state);
  const router = useRouter();
  const { id } = router.query;
  const [notification, setNotification] = useState(false);
  const [isTrailer, setIsTrailer] = useState(false);
  const [trailer, setTrailer] = useState<any>("");

  const dispatch = useDispatch();

  const handleClose = () => {
    setIsTrailer(false);
  };
  useEffect(() => {
    fetchTrailer();

    const current = MyList?.filter((item: any) => item.id == id);
    current.length > 0 ? setClick(true) : setClick(false);
  }, [isTrailer]);

  const fetchTrailer = async () => {
    let url = `https://api.themoviedb.org/3/${data?.media_type}/${id}/videos?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    let trailer = res.results;
    setTrailer(trailer?.filter((t: any) => t.type === "Trailer")[0].key);
  };

  const handleClick = () => {
    if (!click) {
      dispatch(
        addToMyList({
          id: data?.id,
          title: data.media_type === "tv" ? data?.name : data.title,
          poster_path: data?.poster_path,
          overview: data?.overview,
          backdrop_path: data.backdrop_path,
          media_type: data?.media_type,
          time: Date.now(),
        }),
      );
      setClick(true);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    } else {
      dispatch(removeFromList(data?.id));
      setClick(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 4000);
    }
  };

  return (
    <>
      <div className="flex gap-4 drop-shadow-2xl">
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to right, rgb(6, 6, 6) 40%, transparent 100%), url(https://image.tmdb.org/t/p/original//${data.backdrop_path}) `,

            width: "100%",
            height: "820px",
            boxShadow:
              "grey 0px 11px 0px -10px inset, #111 0px -117px 50px -10px inset",
          }}
        >
          <motion.div  className="flex flex-col pl-4 w-full  md:w-2/3 xl:w-2/5	 justify-center datas-start gap-2 h-full">
            <div>
              <div className="py-3">
                <h1 className="text-4xl font-black">
                  {data.title || data.name}
                </h1>
                {data.media_type === "tv" && (
                  <div className="space-x-3 p-1 text-1xl text-zinc-400">
                    <span>{data?.number_of_seasons} SS</span>
                    <span>{data?.number_of_episodes} Episodes</span>
                    <span className="flex-1 float-right">
                  {data?.genres?.map((g: any, i: number) => (
                    <Link href={`/genre/${g.name + "-" + g.id}/1`}>
                       <span
                        key={i}
                        className="text-blue-100 cursor-pointer hover:scale-105 hover:font-semibold animation-all"
                      >
                        {/* {(i ? " • " : "") + g.name} */}
                        {i ? (<span className="ml-1 text-stone-700 ">•</span>) : ""} {g.name}
                      </span>
                    </Link>
                  ))}
                </span>
                  </div>
                  
                )}
                {data.media_type === "movie" && (

                <div className="px-2 w-full flex items-center justify-end">
                {data?.genres?.map((g: any, i: number) => (
                    <Link href={`/genre/${g.name + "-" + g.id}/1`}>
                      <span
                        key={i}
                        className="text-blue-100 cursor-pointer hover:scale-105 hover:font-semibold animation-all"
                      >
                        {/* {(i ? " • " : "") + g.name} */}
                        {i ? (<span className="ml-1 text-stone-700 ">•</span>) : ""} {g.name}
                      </span>
                    </Link>
                  ))}
                  </div>
                )}
              </div>
              <p className="text-gray-400 font-light p-1">{data.overview}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-1">
                <h1 className="font-semibold text-stone-400">Duration:</h1>
                <p className="text-gray-100">
                  {timeConvert(data?.runtime || data?.episode_run_time || "?")}
                </p>
              </div>
              <div className="flex gap-1">
                <h1 className="font-semibold text-stone-400">Status:</h1>
                <p className="text-gray-100">{data.status}</p>
              </div>

              <div className="flex gap-1">
                <h1 className="font-semibold text-stone-400">Released:</h1>
                <p className="text-gray-100">
                  {data?.first_air_date || data?.release_date}
                </p>
              </div>

              
              <div className="flex gap-1 flex-wrap">
                <h1 className="font-semibold text-stone-400">Languages:</h1>
                <div className="flex gap-1 flex-wrap">
                  {data?.spoken_languages?.map((g: any, i: number) => (
                    <span className="text-gray-100" key={i}>
                      {(i ? " ," : "") + g.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-1 flex-wrap">
                <h1 className="font-semibold text-stone-400">Countries:</h1>
                <div className="flex gap-1 ">
                {data?.production_countries?.map((g: any, i: number) => (
                  <span className="text-gray-100" key={i}>
                    {(i ? "," : "") + g.name}
                  </span>
                ))}
                </div>
              </div>
              {data?.created_by?.length > 0 && (

              <div className="flex gap-1 flex-wrap">
                <h1 className="font-semibold text-stone-400">Director:</h1>

                {data?.created_by?.map((g: any, i: number) => (
                  <span className="text-gray-100" key={i}>
                    {(i ? "," : "") + g.name}
                  </span>
                ))}
              </div>
              )}
            </div>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => setIsTrailer(!isTrailer)}
                className="py-3 px-5 bg-red-600 text-gray-200 rounded-sm font-semibold flex  items-center gap-2 hover:text-black hover:bg-gray-200 hover:scale-105 transition-all duration-500 easeInOut"
              >
                <AiFillYoutube size={24} />
                <span>TRAILER</span>
              </button>
              {click ? (
                <button
                  onClick={handleClick}
                  className="py-3 px-5 bg-gray-200 text-black rounded-sm font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#3339] hover:scale-105 transition-all duration-300 easeInOut"
                >
                  <IoMdRemove size={18} />
                  <span>REMOVE FROM LIST</span>
                </button>
              ) : (
                <button
                  onClick={handleClick}
                  className="py-3 px-5 bg-gray-200 text-black rounded-sm font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#3339] hover:scale-105 transition-all duration-300 easeInOut"
                >
                  <IoMdAdd size={18} />
                  <span>ADD TO LIST</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: "100vh", scale: 0 }}
            animate={{
              y: 0,
              scale: 1,
              transition: { duration: 0.1, type: "spring", stiffness: 130 },
            }}
            exit={{
              
              x: "100vh",
              transition: { duration: 0.2 },
            }}
            className="fixed right-1 bottom-1 bg-gray-300 rounded-lg border-l-[5px] border-neutral-900  text-stone-900 p-4 drop-shadow-2xl z-50"
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
      </div>
      {isTrailer && <Trailer trailer_key={trailer} handleClose={handleClose} />}
    </>
  );
}

export default DetailContainer;
