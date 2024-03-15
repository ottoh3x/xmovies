import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Card from "./Card";
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
import { Navigation, Pagination, Grid } from "swiper/modules";

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
import { isMobile } from "@oplayer/core";

interface HomeContainerProps {
  Data: [];
  heading: string;
  setTypeMovies?: Dispatch<SetStateAction<any>>;
  setTypeTV?: Dispatch<SetStateAction<any>>;
  swiperId: any;
}

function HomeContainer(data: HomeContainerProps): any {
  const sliderRef = useRef<any>(null);
  const [selected, setSelected] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [state, setState] = useState<any>(0);
  const router = useRouter();
  console.log(state);
  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slideTo(1);
  };

  const beforeChange = (prev: any, next: any) => {
    setState(next);
  };

  const NextArrow: any = () => {
    return (
      state < 10 && (
        <div
          id="next"
          className="hidden lg:flex absolute cursor-pointer transition-all duration-300 ease-in-out top-0 right-0 h-full  items-center px-1 bg-[#00000085] z-50"
          onClick={next}
        >
          <FaChevronRight size={30} />
        </div>
      )
    );
  };

  const PrevArrow: any = () => {
    return (
      state > 0 && (
        <div
          id="prev"
          className="hidden lg:flex absolute cursor-pointer transition-all duration-300 ease-in-out top-0 left-0 h-full  items-center px-1 bg-[#00000085] z-50"
          onClick={previous}
        >
          <FaChevronLeft size={30} />
        </div>
      )
    );
  };

  const handleClick = () => {
    setSelected(false);
  };
  const handleSelected = () => {
    setSelected(!selected);
  };
  const handleSimilar = () => {
    setSelected(false);
  };

  const breakpoints = () => {
    return {
      300: {
        slidesPerView: data.heading === "Continue Watching" ? 1.5 : data.heading === "Casts" ? 2.5 : 2.5,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: data.heading === "Continue Watching" ? 2 : data.heading === "Casts" ? 3.3 : 3.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: data.heading === "Continue Watching" ? 2 : data.heading === "Casts" ? 3.7 : 4.2,
        spaceBetween: 10,
        speed: 500,
      },
      720: {
        slidesPerView: data.heading === "Continue Watching" ? 2.6 : 4,
        spaceBetween: 10,
        speed: 500,
      },
      1024: {
        slidesPerView: data.heading === "Continue Watching" ? 4 : 4.7,
        spaceBetween: 10,
        slidesPerGroup: 3,
        speed: 500,
      },
      1200: {
        slidesPerView: data.heading === "Continue Watching" ? 4.5 : 6,
        spaceBetween: 10,
        slidesPerGroup: 3,
        speed: 500,
      },
      1424: {
        slidesPerView: data.heading === "Continue Watching" ? 5 : 6.5,
        spaceBetween: 10,
        slidesPerGroup: 3,
        speed: 500,
      },
      1624: {
        slidesPerView: data.heading === "Continue Watching" ? 5.5 : 7,
        slidesPerGroup: 3,
        spaceBetween: 10,
        speed: 500,
      },
      1800: {
        slidesPerView: data.heading === "Continue Watching" ? 6.2 : 8.7,
        slidesPerGroup: 3,
        spaceBetween: 10,
        speed: 500,
      },
      2030: {
        slidesPerView: data.heading === "Continue Watching" ? 7 : 9.1,
        slidesPerGroup: 3,
        spaceBetween: 10,
        speed: 500,
      },
      2450: {
        slidesPerView: data.heading === "Continue Watching" ? 7.5 : 10.5,
        slidesPerGroup: 3,
        spaceBetween: 10,
        speed: 500,
      },
    };
  };

  return (
    data?.Data?.length > 0 && (
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
        <div className="w-full relative overflow-hidden px-1 lg:px-6 my-4">
          <div className="p-2 flex justify-between items-center">
            <h1 className="text-lg lg:text-2xl lg:font-bold ">
              {data.heading}
            </h1>
            {data.heading.includes("Popular") ||
            data.heading.includes("Trending") ||
            data.heading.includes("Top") ||
            data.heading.includes("Comedy") ? (
              <div
                onClick={() => sliderRef?.current.swiper.slideTo(0)}
                className="flex gap-1"
              >
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
            ) : null}
          </div>

          <div className=" w-full flex justify-between items-center mt-5">
            <span className={` px-2 flex  $ font-semibold items-end  text-2xl`}>
              {/* {heading} */}
            </span>

            {/* <div className="flex items-center gap-[2px] mx-1 p-2.5">
              <button className="prev" id={`swiper-back-${data.swiperId}`}>
                <FaChevronLeft width={24} />
              </button>
              <button className="next" id={`swiper-forward-${data.swiperId}`}>
                <FaChevronRight width={24} />
              </button>
            </div> */}
          </div>

          {data.heading == "Continue Watching" ? (
            <Swiper
              ref={sliderRef}
              className="slidecard watchcard"
              grabCursor={true}
              speed={900}
              spaceBetween={5} // Add space between slides
              navigation={{
                nextEl: `#swiper-forward-${data.swiperId}`,
                prevEl: `#swiper-back-${data.swiperId}`,
              }}
              breakpoints={breakpoints()}
        
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              // onSlideChange={handleSlideChange}
            >
              {data?.Data?.map((item: any, index) => (
                <SwiperSlide
                  key={item}
                  className=" max-h-[500px]"
                  onClick={() => router.push(`/${item.media_type}/${item.id}`)}
                >
                  <ContinueWatchingCard {...item} heading={data.heading} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
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
              ref={sliderRef}
              className="slidecard"
              speed={900}
              breakpoints={breakpoints()}
              navigation={{
                nextEl: `#swiper-forward-${data.swiperId}`,
                prevEl: `#swiper-back-${data.swiperId}`,
              }}
              pagination={{
                clickable: true,
              }}
              spaceBetween={10}
              slidesPerView={2}
              
              modules={[Navigation]}
              // onSlideChange={handleSlideChange}
            >
              <div className="flex items-center justify-between absolute inset-0 max-h-[200px] lg:max-h-[320px] ">
              <button className="prev absolute left-0 z-50  w-10 flex items-center justify-center  h-full" id={`swiper-back-${data.swiperId}`}>
                <FaChevronLeft width={32} />
              </button>
              <button className="next z-50  absolute right-0 w-10 flex items-center justify-center  h-full"  id={`swiper-forward-${data.swiperId}`}>
                <FaChevronRight width={32} />
              </button>
            </div>
              {data?.Data?.map((item: any, index) => (
                <SwiperSlide
                  key={item}
                  className=" max-h-[500px]"
                  onClick={() => {
                    setCardId(item.id);
                    setSelected(!selected);
                  }}
                >
                  <HomeCard {...item} heading={data.heading} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>{" "}
      </>
    )
  );
}

export default HomeContainer;
