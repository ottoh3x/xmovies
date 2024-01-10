import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Sidebar from "./nav/Sidebar";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addToMyList, removeFromList } from "../redux/actions/myListAction";
import Link from "next/link";


function timeConvert(n: any) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m.";
}

const settings = {
  dots: false,
 
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed:700,
  autoplaySpeed: 7000,
  pauseOnHover: false,
  arrows: false,
};

interface HeaderProps {
  Data: [];
}

function Header(props: HeaderProps) {
  const [data, setData] = useState<any>([]);
  const { MyList } = useSelector((state: any) => state);
  const router = useRouter();

  const [notification, setNotification] = useState(false);

  const dispatch = useDispatch();

console.log(MyList)
  return (
    <>
    
      <Slider {...settings} className=" overflow-hidden">
        {props.Data?.map((item: any) => {
          const current = MyList.filter((item: any) => item.id === item?.id);
          let t = current.filter((f: any) => f.id == item.id);

          return (
            <div key={item.id} className="">
              <div
                className="head"
                style={{
                  background: `linear-gradient(to right, rgb(6, 6, 6) 15%, transparent 100%), url(https://image.tmdb.org/t/p/original//${item?.backdrop_path}) `,
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                }}
              >
                <div className="flex flex-col pl-4 w-full lg:w-2/5	z-50 justify-center relative items-start gap-4 h-full">
                  <h1 className="text-2xl lg:text-4xl font-black w-1/2 lg:w-full">
                    {item.title || item.name}
                  </h1>
                  <div className="text-[#b3b3b3] font-normal flex gap-3 ">
                  <span className="px-2 bg-neutral-900 font-semibold rounded-sm outline outline-1 outline-neutral-500">
                    {item?.first_air_date?.split("-")[0] ||
                      item?.release_date?.split("-")[0]}
                  </span>
                  
                    {/* <span className="">
                      {timeConvert(item?.runtime)}
                    </span> */}
              
                 
                </div>
                  <p className="text-stone-400">{item.overview}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => router.push(`/movie/${item.id}`)}
                      className="px-3 py-2 lg:px-4 lg:py-3 text-sm bg-[#2229] text-gray-200 rounded-sm font-semibold flex drop-shadow-2xl  items-center gap-2 hover:text-black hover:bg-gray-200 hover:scale-105 transition-all  easeInOut"
                    >
                      <FaPlay size={14} />
                      <span>PLAY</span>
                    </button>
                    {t.length > 0 ? (
                      <button
                        onClick={() => dispatch(removeFromList(item.id))}
                        className="px-3 py-2 lg:px-4 lg:py-3 text-sm bg-gray-200 text-black rounded-sm font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#2229] hover:scale-105 transition-all  easeInOut"
                      >
                        <IoMdRemove size={18} />
                        <span>REMOVE FROM LIST</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch(
                            addToMyList({
                              id: item.id,
                              title: item.title,
                              poster_path: item.poster_path,
                              overview: item.overview,
                              media_type: item.media_type,
                              backdrop_path : item.backdrop_path,
                            }),
                          );
                        }}
                        className="px-3 py-2 lg:px-4 text-sm bg-gray-200 text-black rounded-sm font-semibold flex  items-center gap-2 hover:text-white hover:bg-[#2229] hover:scale-105 transition-all  easeInOut"
                      >
                        <IoMdAdd size={18} />
                        <span>ADD TO LIST</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Header;
