import React, { useEffect, useState } from 'react'
import Card from './Card'
import CardModal from './CardModal'
import Pagination from './Pagination'

interface ContainerProps {
    Data : []
    heading : string
    place : string,
    handleChange?:any;
    select?:any;
}

function Container(data : ContainerProps) {

  const [selected,setSelected] = useState(false)

  

  const handleSelected = () => {
    setSelected(!selected)
  }
  return data?.Data?.length > 0 ?(
    <div className="w-full h-full mt-6 container mx-auto min-h-screen">
    <div className="p-1 relative flex justify-between">
        <h1 className="font-black text-2xl">{data.heading}</h1>
        {data.select && (

        <select id="countries" onChange={data.handleChange} className="bg-neutral-900 text-gray-200 font-semibold px-3 py-2 outline-none rounded-sm">
  <option  value="movie" >Movies</option>
  <option  value="tv">Shows</option>
  
</select>
        )}
    </div>
    
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-2 gap-y-4 p-2 container mx-auto">

    {data?.Data?.map((item:any,index) => (
        
        <Card  key={index} {...item} heading={data.heading} selected={handleSelected}/>
       
    ))}
    
    </div>
    {data.heading.includes("Shows") ||data.heading.includes("Movies")  || data.heading.includes("Series")? (

    <Pagination place={data.place}/>
    ): null}
    </div>
  ) : null
}

export default Container