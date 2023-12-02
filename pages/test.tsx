import React, { useState,useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import ReactPlayer from 'react-player/youtube'
import { useSSE } from "use-sse";
import {AiFillBell} from "react-icons/ai"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HomeContainer from "../components/container/HomeContainer";
import { GetServerSideProps } from "next";



export const getServerSideProps: GetServerSideProps = async () => {

  const [aRes, bRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/discover/movie?vote_average.gte=7.8&with_original_language=en&without_genres=16&api_key=cfe422613b250f702980a3bbf9e90716`), 
    fetch(`https://api.themoviedb.org/3/discover/tv?vote_average.gte=7.8&with_original_language=en&api_key=cfe422613b250f702980a3bbf9e90716`)
  ]);

 const [a, b] = await Promise.all([
    aRes.json(), 
    bRes.json()
  ]);

 return { props: { a, b } };
};

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 150,
    },
  },
  hidden: { opacity: 0, y: "100%" },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Test(a:any,b:any) {
  const [show, setShow] = useState<any>(false);
  const [da,setDa] = useState<any>([])
  const sliderRef = useRef<any>(null)
  const [state,setState] = useState<any>(0)  
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

  const NextArrow:any = () =>{ return state < 15 && (
    <div className="absolute top-0 right-0 h-full flex items-center bg-[#0000005c] z-50" onClick={next}><FaChevronRight size={30}/></div>
  )}

   const PrevArrow:any = () =>{ return state > 0 && (
    <div className="absolute top-0 left-0 h-full flex items-center bg-[#0000005c] z-50" onClick={previous}><FaChevronLeft size={30}/></div>
  )}


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
     beforeChange:beforeChange,
     nextArrow:<NextArrow />,
     prevArrow:<PrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        
          speed:0
        },
      },
    ],
  };
  const index = state
  console.log(index)
console.log(b)
  

  return (
    <Layout title={"test"} >
    <div>
 
 <iframe
 src="https://embed.smashystream.com/fizzzz1.php?tmdb=85937&season=4&episode=11"
 className="w-[1000px] h-[750px]"
//  sandbox="true"
 >

 </iframe>
      {state > 0 && <div onClick={previous}>prev</div>}
      {state < 15 && <div onClick={next}>next</div>}
      
       
      

      <Slider {...settings} className="flex gap-2" ref={sliderRef}>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2 ">
          <h3 className="font-black text-white">1</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2 ">
          <h3 className="font-black text-white">2</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">3</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">4</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">5</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">6</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">7</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">8</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">9</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">10</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">11</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">12</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">13</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">14</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">15</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">16</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">17</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">18</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">19</h3>
        </div>
        <div className="w-[300px] h-[270px] bg-neutral-700 p-2">
          <h3 className="font-black text-white">20</h3>
        </div>
      </Slider>

      
      <HomeContainer Data={a.a.results} heading="Drama Shows" />
      <HomeContainer Data={b} heading="Test Shows" />


      <div className="mt-12">
        <button
          className="p-3 bg-white text-black"
          onClick={() => setShow(!show)}
          >
          CLICK
        </button>

          <AnimatePresence>
        {show && (
          
            <motion.div
              className={`grid grid-cols-6 p-6 `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ opacity: 0, transition: { delay: 0.7 } }}
            >
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
               <h1>test</h1>
              <h1>test</h1>
            </motion.div>
        
        )}
      </AnimatePresence>
      <div><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   /></div>
      </div>
    </div>
    </Layout>
  );
}

export default Test;
