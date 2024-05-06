import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../components/container/Container";
import HomeContainer from "../components/container/HomeContainer";
import Header from "../components/Header";



export const getServerSideProps: GetServerSideProps = async () => {

  let url = `https://api.themoviedb.org/3/discover/movie?vote_average.gte=7.8&with_original_language=en&without_genres=16&api_key=cfe422613b250f702980a3bbf9e90716`;
  let req = await fetch(url);
  let res = await req.json();

  return { props: { res } };
};



const Home: NextPage = (res:any) => {
  const [trendingMovies, setTrendingMovies] = useState<any>([]);
  const [popularMovies, setPopularMovies] = useState<any>([]);
  const [latestMovies, setLatestMovies] = useState<any>([]);
  const [topRated, setTopRated] = useState<any>([]);
  const [animeMovies, setAnimeMovies] = useState<any>([]);
  const [animeShows, setAnimeShows] = useState<any>([]);
  const [comedyShows,setComedyShows] = useState<any>([])
  const [dramaShows,setDramaShows] = useState<any>([])
const [dt,setDt] = useState()
  const [fetchTrendingType, setFetchTrendingType] = useState("movie");
  const [fetchPopularType, setFetchPopularType] = useState("movie");
  const [fetchRatedType, setFetchRatedType] = useState("movie");
  const [fetchComedyType, setFetchComedyType] = useState("movie");

  const {ContinueWatching,CurrentState}  = useSelector((state:any) => state)
  const sortedList = ContinueWatching?.sort((a:any, b:any) => b.time - a.time);


//   const data = async () =>  {
    
//  return
//       {
//         trendingMovies:[],
//         popularMovies : [],
//         latestMovies : (async () => {
//           try {
//               const response = await fetch(`https://api.themoviedb.org/3/${fetchRatedType}/top_rated?page=1&api_key=cfe422613b250f702980a3bbf9e90716`);
//               const data = await response.json();
//               console.log(data);
//           } catch (error) {
//               console.error("Failed to fetch data:", error);
//           }
//       })(),
//         topRated : async () => await fetch(`https://api.themoviedb.org/3/${fetchRatedType}/top_rated?page=1&api_key=cfe422613b250f702980a3bbf9e90716`).then(res => res.json()),
//         animeMovies : [],
//         animeShows : [],
//       }
  

      
    
//   }

// console.log(dt)
// console.log(async () => await fetch(`https://api.themoviedb.org/3/${fetchRatedType}/top_rated?page=1&api_key=cfe422613b250f702980a3bbf9e90716`).then(res => res.json()))

  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMovies();
    fetchLatestMovies();
    ComedyShows();
    DramaShows();
    topR();
    fetchAnimesMovies()
    fetchAnimeShows()
    // data()
  }, [fetchTrendingType, fetchPopularType,fetchRatedType,fetchComedyType]);


  const topR = async () => {
    let req  = await fetch(`https://api.themoviedb.org/3/${fetchRatedType}/top_rated?page=1&api_key=cfe422613b250f702980a3bbf9e90716`)
    let res = await req.json()
    console.log(res)
    setTopRated(res.results)
}

const ComedyShows = async () => {
  let req  = await fetch(`https://api.themoviedb.org/4/discover/${fetchComedyType}?vote_average.gte=7.5&with_original_language=en&with_genres=35&without_genres=16&api_key=cfe422613b250f702980a3bbf9e90716`)
  let res = await req.json()
  console.log(res)
  setComedyShows(res.results)
}
const DramaShows = async () => {
  let req  = await fetch(`https://api.themoviedb.org/4/discover/tv?vote_average.gte=7.5&with_original_language=en&with_genres=18&api_key=cfe422613b250f702980a3bbf9e90716`)
  let res = await req.json()
  console.log(res)
  setDramaShows(res.results)
  
}

  const fetchTrendingMovies = async () => {
    let url = `https://api.themoviedb.org/3/trending/${fetchTrendingType}/week?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setTrendingMovies(res.results);
  };
  const fetchAnimesMovies = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US&page=1&with_genres=16&with_keywords=210024|287501`;
    let req = await fetch(url);
    let res = await req.json();
    setAnimeMovies(res.results);
  };

  const fetchAnimeShows = async () => {
    let url = `https://api.themoviedb.org/3/discover/tv?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US&page=1&with_genres=16&with_keywords=210024|287501`;
    let req = await fetch(url);
    let res = await req.json();
    setAnimeShows(res.results);
  };
  const fetchPopularMovies = async () => {
    let url = `https://api.themoviedb.org/3/${fetchPopularType}/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setPopularMovies(res.results);
  };

  const fetchLatestMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    setLatestMovies(res.results);
  };
  return (
    <div className="">
      <Head>
        <title>Otto Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header Data={res?.res?.results}/>
      <div >

<HomeContainer swiperId={0} Data={sortedList} heading="Continue Watching" />

      <HomeContainer
      swiperId={1}
        Data={trendingMovies}
        setTypeMovies={() => setFetchTrendingType("movie")}
        setTypeTV={() => setFetchTrendingType("tv")}
        heading={
          fetchTrendingType === "movie"
            ? `Trending Movies`
            : "Trending Shows"
        }
      />
      <HomeContainer swiperId={2} Data={dramaShows} heading="Drama Shows" />
      <HomeContainer
      swiperId={3}
        Data={popularMovies}
        setTypeMovies={() => setFetchPopularType("movie")}
        setTypeTV={() => setFetchPopularType("tv")}
        heading={fetchPopularType === "movie"
        ? `Popular Movies`
        : "Popular Shows"
    }
      />
      <HomeContainer swiperId={4} Data={topRated} setTypeMovies={() => setFetchRatedType("movie")}
        setTypeTV={() => setFetchRatedType("tv")}
        heading={fetchRatedType === "movie"
        ? `Top Rated Movies`
        : "Top Rated Shows"
    } />
    <HomeContainer swiperId={5} Data={comedyShows} setTypeMovies={() => setFetchComedyType("movie")}
        setTypeTV={() => setFetchComedyType("tv")}
        heading={fetchComedyType === "movie"
        ? `Comedy Movies`
        : "Comedy Shows"
    } />
      <HomeContainer swiperId={6} Data={latestMovies} heading="Upcoming Movies" />
      <HomeContainer swiperId={7} Data={animeShows} heading="Anime Shows" />
      <HomeContainer swiperId={8} Data={animeMovies} heading="Anime Movies" />


      </div>
    </div>
  );
};

export default Home;
