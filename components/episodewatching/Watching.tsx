import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


interface WatchingProps {
    iframe : string,
    title : string,
    description : string,
    duration : string,
    imdb : string,
    released:string,
    image : string,
    casts : string,
    seasons : [],
    season_title :string,
    episodes : [],
    href : string,
    episode_title : string,
    tmdb_id:string
}
function Watching(data : WatchingProps) {

  const [currentEp,setCurrentEp] = useState(1)
  const [currentSeason,setCurrentSeason] = useState(1)
  const router = useRouter()


  return (
    <div>

    <iframe src={`https://www.2embed.to/embed/tmdb/tv?id=${data.tmdb_id}&s=${currentSeason}&e=${currentEp}`} className="w-full h-[800px] p-8"  />

    <div className="flex p-2">
    <div>

    <img src={data.image} />
    
    </div>
    <div className="p-2">
    <h1 className="font-black text-3xl">{data.title}</h1>
    <span>IMDB:<span>{data.imdb}</span></span>
    <p className="text-gray-700">Description: <span>{data.description}</span></p>
    <p>Duration:<span>{data.duration}</span></p>
    <p>Released:<span>{data.released}</span></p>
    <p>Casts:<span>{data.casts}</span></p>
    </div>
    </div>

    <div>

        <h1>Seasons</h1>
      
      <div>
        {data?.seasons?.map((s:any) => (
      <div>
          <h1>{s.title}</h1>
          <span>{s.year}</span>

      </div>
        ))}
      <div>
        {data?.episodes?.map((ep:any) => (
          <h1 onClick={() => setCurrentEp(ep.episode_num)}>Episode {ep.episode_num}<span>{ep.episode_title}</span></h1>
        ))}

      </div>
      </div>

    </div>

    </div>
  )
}

export default Watching