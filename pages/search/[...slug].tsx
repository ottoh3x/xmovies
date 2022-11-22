import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Layout from "../../components/layout/Layout";

function Search() {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    fetchMovies();
  }, [slug]);

  const fetchMovies = async () => {
    let url = `https://api.themoviedb.org/3/search/multi?query=${
      slug && slug[0]
    }&api_key=cfe422613b250f702980a3bbf9e90716`;
    let req = await fetch(url);
    let res = await req.json();
    console.log(res);
    setData(res.results);
  };
  console.log(slug);
  console.log(data);

  return (
    <Layout title={"Showing Results"}>
      <Container Data={data} place="" heading="Showing Results for" />
    </Layout>
  );
}

export default Search;
