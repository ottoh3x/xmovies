import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../Backdrop";
import Link from "next/link";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { SiBarclays } from "react-icons/si";
import { RiMovieFill } from "react-icons/ri";
import { FaSlackHash } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import { useRouter } from "next/router";

interface SideNavProps {
  handleSideNav: any;
}
function SideNav(h: SideNavProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [showMovieCategory, setShowMovieCategory] = useState(false)

  const navList: any = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies/1" },
    { name: "Tv Shows", link: "/tvshows/1" },
    { name: "Top Rated", link: "/topimdb/1" },
    { name: "My List", link: "/movies-list" },
    
    // { name: "test", link: "/test" },
  ];

  const movieCategory:any = [
    { name: "Horror", link: "/genre/Horror-27/1" },
    { name: "Action", link: "/genre/Action-28/1" },
    { name: "Comedy", link: "/genre/Comedy-35/1" },
    { name: "Thriller", link: "/genre/Thriller-53/1" },
    { name: "Sci-Fi", link: "/genre/Science-Fiction-878/1" },
    { name: "Crime", link: "/genre/Crime-80/1" },
    { name: "Family", link: "/genre/Family-10751/1" },
    { name: "Anime", link: "/genre/Anime-16/1" },
    { name: "Mystery", link: "/genre/Mystery-9648/1" },
    { name: "Fantasy", link: "/genre/Fantasy-14/1" },
    { name: "Drama", link: "/genre/Drama-18/1" },
    { name: "Adventure", link: "/genre/Adventure-12/1" },
    { name: "Music", link: "/genre/Music-10402/1" },
    { name: "War", link: "/genre/War-10752/1" },
  ]

  const tvCategory:any = [
    { name: "Action & Adventure", link: "/genre/Action-Adventure-27/1" },
    { name: "Anime", link: "/genre/Anime-16/1" },
    { name: "Comedy", link: "/genre/Comedy-35/1" },
    { name: "Crime", link: "/genre/Crime-80/1" },
    { name: "Drama", link: "/genre/Drama-18/1" },
    { name: "Family", link: "/genre/Family-10751/1" },
    { name: "Mystery", link: "/genre/Mystery-9648/1" },
   
  ]

const handleMovieCategory = (e:any) => {
  e.stopPropagation()
  setShowMovieCategory(!showMovieCategory)


}
  console.log(router.query);
  console.log(router.asPath);
  return (
    <Backdrop onClick={h.handleSideNav}>
      <motion.div
        id="sidemenu"
        initial={{ x: "-100vh" }}
        animate={{ x: 0, transition: { duration: 0.4 } }}
        exit={{ x: "-100vh", transition: { duration: 0.4 } }}
        className="h-screen w-[17rem] bg-[#111]  drop-shadow-2xl absolute left-0 top-0 z-50"
      >
        <div className="flex flex-col  ">
          <div className="p-4 border-b-[2px] border-[#22222278]">
            <h1
              className="text-white font-bold text-2xl cursor-pointer text-center"
              onClick={h.handleSideNav}
            >
              OTMOVIES
            </h1>
          </div>

          <div className="text-gray-200  flex flex-col p-1 gap-1 ">
            {navList.map((item: any, index: any) => (
              <Link href={item.link} key={index}>
                <div
                  className={` ${
                    item.link == router.asPath && "bg-[#222] font-bold"
                  } flex gap-4 px-3 py-2 items-center hover:bg-[#222] cursor-pointer`}
                >
                  <span className=" text-xl ">{item.name}</span>
                </div>
              </Link>
            ))}
            <div className="flex justify-between px-3 py-2 items-center cursor-pointer" onClick={handleMovieCategory}>
              {" "}
              <span className=" text-xl ">Movie Category</span>{" "}
              {showMovieCategory ? (
                 <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={3.5}
                 stroke="currentColor"
                 className="w-4 h-4"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 15.75l7.5-7.5 7.5 7.5"
                 />
               </svg>

              ): (
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
              )}
             
            </div>
            <AnimatePresence>
            {showMovieCategory && (


            <motion.div initial={{y:-200}} animate={{y:0}} exit={{opacity:0}} className="grid grid-cols-2 px-2">
            {movieCategory.map((cat:any,index:number) => (
              <Link key={index} href={cat.link}>
              <span className="p-2 cursor-pointer hover:bg-[#3339] text-gray-400 hover:text-gray-200">{cat.name}</span>
              </Link>
            ))}
            </motion.div>
            )}
            </AnimatePresence>
            <div className="flex justify-between px-3 py-2 items-center cursor-pointer">
              {" "}
              <span className=" text-xl ">Tv Category</span>{" "}
              {showMovieCategory ? (
                 <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth={3.5}
                 stroke="currentColor"
                 className="w-4 h-4"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 15.75l7.5-7.5 7.5 7.5"
                 />
               </svg>

              ): (
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
              )}
             
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-0 flex justify-center mb-2 pb-2 border-t-[2px] border-[#22222278]">
            <a
              href="https://www.buymeacoffee.com/ottoprogrammer"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/coffe1.svg" className="pt-[1rem] cursor-pointer" />
            </a>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default SideNav;
