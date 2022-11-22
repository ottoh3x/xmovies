import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Layout from '../../components/layout/Layout'
const axios = require("axios")

function TvShows() {
    const [data,setData] = useState<any>([])
    const router = useRouter()
    const {page} = router.query

    useEffect(() => {
        fetchTvShows()
    },[page])

    const fetchTvShows = async () => {
      let req  = await axios.get(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&page=${page}&api_key=cfe422613b250f702980a3bbf9e90716`)
      let res = await req.data
      setData(res.results)
  }

  return (
    <Layout title={"Tv Shows"}>
    <Container Data={data} heading="TV Shows" place='tvshows' />
    </Layout>
  )
}

export default TvShows