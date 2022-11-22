import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Layout from '../../components/layout/Layout'
const axios = require("axios")

function Genre() {
  const [data,setData] = useState<any>([])
  const router = useRouter()
  const [type,setType] = useState<any>('movie')
  const [showSelect,setShowSelect] = useState(true)

  const {slug} = router.query

  useEffect(() => {
    const gen = fetchGenres()
    if (slug && slug[0]?.includes("&")) {
      setShowSelect(false)
    }
    return () => {
      gen
    }
  },[type,slug])

  const fetchGenres = async () => {
    let url = `https://api.themoviedb.org/3/discover/${slug && slug[0].includes("&") ? "tv" : type}?page=${slug && slug[1]}&api_key=cfe422613b250f702980a3bbf9e90716&with_genres=${slug && slug[0].split("-")[1]}`
    let req = await axios.get(url)
    let res = req.data
    setData(res.results)
  }
  const handleChange = (e:any) => {
    setType(e.target.value)
}

  console.log(data)
  return (
    <Layout title={slug && slug[0]?.split("-")[0]} >
    <Container Data={data} place={`/genre/${slug && slug[0]}`} heading={slug && slug[0].includes("&") ? `${slug && slug[0]?.split("-")[0]} Series` : type === "movie" ? `${slug && slug[0]?.split("-")[0]} Movies` : `${slug && slug[0]?.split("-")[0]} Series`} handleChange={handleChange} select={showSelect}/>
    </Layout>
  )
}

export default Genre