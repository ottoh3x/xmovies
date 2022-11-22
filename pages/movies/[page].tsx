import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Layout from '../../components/layout/Layout'
const axios = require("axios")

function Movies() {
    const [data,setData] = useState<any>([])
    const router = useRouter()
    const {page} = router.query
    console.log(page)

    useEffect(() => {
        const mv = fetchMovies()

        return () => {
          mv
        }
    },[page])

    const fetchMovies = async () => {
      let req  = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=cfe422613b250f702980a3bbf9e90716`)
      let res = req.data
      setData(res.results)
  }

  return (
    <Layout title={"Movies"}>
    <Container Data={data} heading="Movies" place='movies' />
    </Layout>
  )
}

export default Movies