import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import CardModal from './CardModal';

interface SimilarCardProps {
    title: string;
    backdrop_path: string;
    overview:string;
    handleClick: any;
    id:any;
    media_type:string;
    poster_path:string;
    name:string;
    heading:string;
    trailer:string;
    handlePage:any;


}

function SimilarCard(movie:SimilarCardProps) {
   
   const handleClick= () => {
        console.log(movie.id)
    }
  return (
    <>
   
    <div
    onClick={movie.handlePage}
        className="flex flex-col gap-2  rounded-b-lg  cursor-pointer hover:brightness-75	hover:scale-105 ease-out relative shadow-2xl transition-transform duration-500"
        
      >
        <div className="">

          {movie.heading === "Continue Watching" ? (

<div style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w780//${movie?.backdrop_path}) `,
                backgroundSize: "cover",

                width: "310px",
                height: "184px",
                boxShadow:
                  "rgb(6 6 6) 0px 11px 0px -10px inset, rgb(6 6 6) 0px -70px 50px -10px inset",
              }}></div>
          ): (

            <div
            className={`drop-shadow-xl w-full h-[11rem] lg:h-[19rem]`}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              layout="fill"
              objectFit="cover"
              unoptimized={true}
             
            />
          </div>

          )}
          

          
        </div>
       
      </div>
      </>
  )
}

export default SimilarCard