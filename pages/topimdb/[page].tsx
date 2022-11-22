import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Pagination from '../../components/container/Pagination'
import Layout from '../../components/layout/Layout'
const axios = require("axios")




function TopImdb() {
    const [data,setData] = useState<any>([])
    const [type,setType] = useState<any>('movie')
    const router = useRouter()
    const {page} = router.query

    useEffect(() => {
        topRated()

    },[page,type])

    const fetchData = async () => {
        let req  = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=cfe422613b250f702980a3bbf9e90716`)
        let res = await req.json()
        console.log(res)
        setData(res.results)
    }

    const topRated = async () => {
        let req  = await axios.get(`https://api.themoviedb.org/3/${type}/top_rated?page=${page}&api_key=cfe422613b250f702980a3bbf9e90716`)
        let res = await req.data
        setData(res.results)
    }
    const handleChange = (e:any) => {
        setType(e.target.value)
    }
  return (
    <Layout title={"Top Rated"}>
    
    <Container Data={data} heading={type === "movie" ? "Top Rated Movies" : "Top Rated Shows"} place="topimdb" handleChange={handleChange} />
    
    </Layout>
  )
}



export default TopImdb