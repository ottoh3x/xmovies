"use client";
import Player, { PlayerEvent,isMobile  } from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";
import { Highlight } from "@oplayer/ui/src/types";
import ReactPlayer from "@oplayer/react";
import { useMemo } from "react";

import React, { useEffect, useRef, useState,useCallback } from "react";
import { useRouter } from "next/router";


interface OplayerProps {
  src?: any;
  epnum?: string;
  malid?: string;
  poster?: any;
  title?:string;
  slug?: any;
  nextEp?: any;
  prevEp?:any
  goNext?:any;
  isAutoNext?:any;
  reload?:any;
  ref?:any;
  subtitles?:any;
}

export const plugins = [
  ui({
    controlBar: { back: 'always' },
    pictureInPicture: true,
    slideToSeek: "always",
    screenshot: true,
    keyboard: { global: true },
    theme: { primaryColor: "#0056d1" },
    topSetting : true,
    subtitle: {
      color: 'hotpink',
      fontSize: 30,
      fontFamily: '',


      background: true,
      source: [
        {
          name: 'English',
          src: "https://cc.2cdns.com/9d/c4/9dc448b6d9554a3fc205b6dd7b5514fd/9dc448b6d9554a3fc205b6dd7b5514fd.vtt"
        }
      ]
    }, 
  }),
  hls(),
];

const EnimePlayer = (props: OplayerProps) => {
  const playerRef = useRef<Player>();
  const router = useRouter();
  const [displayEpBar, setDisplayEpBar] = useState(true)

  const player = useRef<Player>(null);
  const {slug} :any = router.query
  




  


 

  


  useEffect(() => {

    player?.current
      ?.changeSource({
        src: props.src,
        title:props.title,
        poster:props.poster,
        
      })

      player.current!.context.ui.subtitle.updateSource(props.subtitles)
      
  }, []);



 


  

  

  return (
    // <div  ref={ref} />
    <div ref={props.ref}>


      <ReactPlayer
      
        plugins={plugins}
        ref={player}
        autoplay={false}
        playing={true}
        source={props.src as any}
        onEvent={() => {}}
        duration={0}
        
      />

    </div>
  );
};

export default EnimePlayer;
