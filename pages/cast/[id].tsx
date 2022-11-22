import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Layout from '../../components/layout/Layout'

function CastMovies() {
    const [data,setData] = useState<any>([])
    const router = useRouter()
    const {id}:any = router.query

    useEffect(() => {

            fetchCastMovies()
    },[id])

    const fetchCastMovies = async () => {
        let url = `https://api.themoviedb.org/3/person/${id && id.split("-")[1] as string}/combined_credits?api_key=cfe422613b250f702980a3bbf9e90716`
        let req = await fetch(url);
        let res = await req.json();
        console.log(res)
        setData(res.cast)
    }
  return (
      <Layout title={"Movies"} >
        <Container Data={data} heading={`${id && id.split("-")[0]} Movies & Series`} place="" />
        </Layout>
    
  )
}

export default CastMovies