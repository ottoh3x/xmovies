import React from 'react'
import Head from "next/head";
import {motion} from "framer-motion"

type LayoutProps = {
    title:any;
    children:any
}

function Layout(data :LayoutProps) {
  return (
    <div className="mt-20  ">
        <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} key={data.title} />
      </Head>
      {data.children}
    </div>
  )
}

export default Layout