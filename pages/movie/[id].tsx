import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/container/Container";
import Watching from "../../components/episodewatching/Watching";
import { useSelector, useDispatch } from "react-redux";
import { addToMyList, removeFromList } from "../../redux/actions/myListAction";
import DetailContainer from "../../components/details/DetailContainer";
import HomeContainer from "../../components/container/HomeContainer";
import { FaPlay } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { SetContinueWatching } from "../../redux/actions/tvShowAction";

function timeConvert(n: any) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m.";
}

function MovieEpisode(res: any) {
  const [data, setData] = useState<any>(res.res);
  const [recommended, setRecommended] = useState<any>([]);
  const [casts, setCasts] = useState<any>([]);
  const [movieData, setMovieData] = useState<any>([]);
  const { MyList,ContinueWatching } = useSelector((state: any) => state);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  const eps: any = [];

  const [imdbId, setImdbId] = useState<any>([]);
  const [imdbData, setImdbData] = useState<any>([]);
  const ref = useRef();

  console.log(data);

  
  useEffect(() => {
    fetchRecommended();
    fetchImdbId();
    fetchImdbData();
    fetchCasts();
    setData(res.res)


    
    
    
    const current = MyList.filter((item: any) => item.id == id);
    current.length > 0 ? setClick(true) : setClick(false);

    
  }, [id, imdbId,res]);


  const handleIframe  = () => {

    const currentWatching = ContinueWatching.filter((item: any) => item.id == id);
  if(currentWatching.length > 0) {
    console.log("nothing")
  }else{
    dispatch(
      SetContinueWatching({
        id: id,
        poster_path: data?.poster_path,
        backdrop_path: data?.backdrop_path,
        title: data?.title,
        media_type: "movie",
        time: Date.now(),
      }),
    );
  }

  }
  

  const fetchData = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setData(res);
  };

  const fetchImdbId = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setImdbId(res.imdb_id);
  };

  const fetchImdbData = async () => {
    if (data?.imdb_id) {
      const url = `https://imdb-api.tprojects.workers.dev/title/${data?.imdb_id}`;
      let req = await fetch(url);
      let res = await req.json();
      setImdbData(res);
    }
  };

  const fetchRecommended = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setRecommended(res.results);
  };

  const fetchCasts = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setCasts(res.cast);
  };

  console.log(MyList);
  return (
    <>
      <div className="w-full relative mx-auto">
            <DetailContainer {...data} media_type="movie"/>
        <div className="gap-4">
          
          
          <div className=" mx-auto mt-8">
            <iframe
            onLoadCapture={handleIframe}
              className="p-2 w-full h-[270px] lg:h-[872px] mx-auto"
              src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
              allowFullScreen
            ></iframe>

            <HomeContainer Data={casts} heading="Casts" />

            <Container
              Data={recommended}
              heading="MOVIES YOU MAY ALSO LIKE"
              place="movie"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let id = context.params.id;
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=cfe422613b250f702980a3bbf9e90716`;
  let req = await fetch(url);
  let res = await req.json();

  return { props: { res } };
};

export default MovieEpisode;
