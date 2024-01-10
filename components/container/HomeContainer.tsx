import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCaretRight } from "react-icons/bi";
import HomeCard from "./HomeCard";
import { AnimatePresence } from "framer-motion";
import CardModal from "./CardModal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ContinueWatchingCard from "./ContinueWatchingCard";
import Link from "next/link";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// @ts-ignore

import { EffectCoverflow, Autoplay } from "swiper/modules";


import "swiper/css/navigation";
import "swiper/css/pagination";
// @ts-ignore

import "swiper/css";
import "swiper/css/autoplay";


interface HomeContainerProps {
  Data: [];
  heading: string;
  setTypeMovies?: Dispatch<SetStateAction<any>>;
  setTypeTV?: Dispatch<SetStateAction<any>>;
  swiperId:any
}

function HomeContainer(data: HomeContainerProps):any {
  const sliderRef = useRef<any>(null);
  const [selected, setSelected] = useState(false);
  const [cardId,setCardId] = useState(null)
  const [state,setState] = useState<any>(0)  
  const router = useRouter()
  console.log(state)
  const next = () => {
    sliderRef?.current?.slickNext();
  }
  const previous = () => {
    sliderRef?.current?.slickPrev();
  }

  const beforeChange = (prev:any,next:any) => {
    setState(next)
  }

  const NextArrow:any = () =>{ return state < 10 && (
    <div id="next" className="hidden lg:flex absolute cursor-pointer transition-all duration-300 ease-in-out top-0 right-0 h-full  items-center px-1 bg-[#00000085] z-50" onClick={next}><FaChevronRight size={30}/></div>
  )}

   const PrevArrow:any = () =>{ return state > 0 && (
    <div id="prev" className="hidden lg:flex absolute cursor-pointer transition-all duration-300 ease-in-out top-0 left-0 h-full  items-center px-1 bg-[#00000085] z-50" onClick={previous}><FaChevronLeft size={30}/></div>
  )}


  const handleClick = () => {
    setSelected(false);
  };
  const handleSelected = () => {
    setSelected(!selected);
  };
  const handleSimilar = () => {
    setSelected(false);
  };

  const breakpoints = [
    {
      1600: {
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 4.2 : 6,
          slidesToScroll: data.heading === "Continue Watching" ? 4.2 : 6,
          initialSlide: 0
        }
      }
    },
    {
      1400: {
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 4 : 6,
          slidesToScroll: data.heading === "Continue Watching" ? 4 : 6
        }
      }
    },
    {
      1240: {
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 3.4 : 5,
          slidesToScroll: data.heading === "Continue Watching" ? 3.4 : 5
        }
      }
    },
    {
      900: {
        settings: {
          slidesPerView: 4,
          slidesToScroll: 4
        }
      }
    },
    {
      600: {
        settings: {
          slidesPerView: 3.4
        }
      }
    },
    {
      480: {
        settings: {
          slidesPerView: 2.8,
          speed: 0
        }
      }
    },
    {
      380: {
        settings: {
          slidesPerView: 2.5,
          speed: 0
        }
      }
    }
  ];
console.log(cardId)
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    centerPadding : "70px",
    slidesPerView: data.heading === "Continue Watching"  ? 5.6 :  data.heading === "Casts" ? 7 : 8,
    slidesToScroll: data.heading === "Continue Watching"  ? 5.6 :  data.heading === "Casts" ? 7 : 8,
    initialSlide: 0,
    beforeChange:beforeChange,
     nextArrow:<NextArrow />,
     prevArrow:<PrevArrow />,
    
    
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 4.2 : 6,
          slidesToScroll: data.heading === "Continue Watching" ? 4.2 : 6,
          initialSlide: 0,
          
          
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 4 : 6,
          slidesToScroll: data.heading === "Continue Watching" ? 4 : 6,
         
          
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesPerView: data.heading === "Continue Watching" ? 3.4 : 5,
          slidesToScroll: data.heading === "Continue Watching" ? 3.4 : 5,
        
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesPerView: 4,
          slidesToScroll: 4,
       
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerView: 3.4,
      
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerView: 2.8,
          speed: 0,
          
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesPerView: 2.5,
          speed: 0,
          
        },
      },
    ],
  };
  return data?.Data.length > 0 && (
    <>
    <AnimatePresence>
        {selected && (
          <CardModal
            {...data}
            handleClick={handleClick}
            handleSimilar={handleSimilar}
            id={cardId}
          />
        )}
      </AnimatePresence>
   
    
    <div className="w-full relative overflow-hidden lg:px-6">
      <div className="p-2 flex justify-between items-center">
        <h1 className="text-lg lg:text-2xl lg:font-bold ">{data.heading}</h1>
        {data.heading.includes("Popular") || data.heading.includes("Trending") || data.heading.includes("Top") || data.heading.includes("Comedy") ? (
        <div onClick={() => sliderRef?.current.slickGoTo(0)} className="flex gap-1">
          <div
            onClick={data.setTypeMovies}
            className={`${
              data.heading == "Trending Movies" ||
              data.heading == "Popular Movies" || 
              data.heading == "Top Rated Movies" ||
              data.heading == "Comedy Movies"
                ? "bg-[#4815ff] font-semibold"
                : "bg-neutral-900 hover:bg-neutral-800"
            }  py-2 px-3 lg:py-2 lg:px-4  rounded-sm drop-shadow-xl cursor-pointer delay-400 hover:scale-105  transition-all`}
          >
            Movies
          </div>
          <div
            onClick={data.setTypeTV}
            className={`${
              data.heading == "Trending Shows" ||
              data.heading == "Popular Shows" ||
              data.heading == "Top Rated Shows" ||
              data.heading == "Comedy Shows"
                ? "bg-[#4815ff] font-semibold"
                : "bg-neutral-900"
            }   rounded-sm drop-shadow-xl py-2 px-3 lg:py-2 lg:px-4   cursor-pointer  hover:bg-neutral-800 hover:scale-105  transition-all`}
          >
            Tv Shows
          </div>
        </div>
        ):null}
      </div>


      <div className=" w-full flex justify-between items-center mt-5">
            <span className={` px-2 flex  $ font-semibold items-end  text-2xl`}>
              {/* {heading} */}
            </span>

            <div className="flex items-center gap-[2px] mx-1 p-2.5">
              <button className="   " id={`swiper-back-${data.swiperId}`}>
                <FaChevronLeft  width={24} />
              </button>
              <button className="     " id={`swiper-forward-${data.swiperId}`}>
                <FaChevronRight  width={24} />
              </button>
            </div>
          </div>

      {data.heading == "Continue Watching" ? (
        <Swiper
        ref={sliderRef} className="slidecard watchcard" 
        grabCursor={true}
        speed={900}
        slidesPerView={6} // Display 4 slides at once
        spaceBetween={2} // Add space between slides
        navigation={{
          nextEl: `#swiper-forward-${data.swiperId}`,
          prevEl: `#swiper-back-${data.swiperId}`,
        }}
        breakpoints={breakpoints}
        mousewheel={true}
        initialSlide={1}
          style={{ paddingBlock: "0rem" }}
        className="sw"
        // onSlideChange={handleSlideChange}
      >
          {data?.Data?.map((item: any, index) => (
            <SwiperSlide key={item} className=" max-h-[500px]"
            onClick={() => router.push(`/${item.media_type}/${item.id}`)}>
           
           <ContinueWatchingCard  {...item} heading={data.heading}  />
          
          
         
           
          </SwiperSlide>
        ))}
      </Swiper>


      ):(
      //   <Slider {...settings}  ref={sliderRef} className="slidecard">
      //   {data?.Data?.map((item: any, index) => (
      //     <div key={index} onClick={() => {
      //       setCardId(item.id);
      //       setSelected(!selected)
      //     }}>
           
      //         <HomeCard  {...item} heading={data.heading}  />
          
          
      //     </div>
          
      //   ))}
      // </Slider>
      <Swiper
        grabCursor={true}
        ref={sliderRef} className="slidecard"
        speed={900}
        slidesPerView={6} // Display 4 slides at once
        spaceBetween={2} // Add space between slides
        breakpoints={breakpoints}
        navigation={{
          nextEl: `#swiper-forward-${data.swiperId}`,
          prevEl: `#swiper-back-${data.swiperId}`,
        }}
        mousewheel={true}
        initialSlide={1}
          style={{ paddingBlock: "0rem" }}
        // onSlideChange={handleSlideChange}
      >
          {data?.Data?.map((item: any, index) => (
            <SwiperSlide key={item} className=" max-h-[500px]"
      onClick={() => {
            setCardId(item.id);
            setSelected(!selected)
          }}>
           
              <HomeCard  {...item} heading={data.heading}  />
          
          
         
           
          </SwiperSlide>
        ))}
      </Swiper>
      )}
     
    </div> </>
  )
}

export default HomeContainer;
