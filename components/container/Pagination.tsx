import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  place: string;
}

function Pagination(data: PaginationProps) {
  const router = useRouter();
  let p = parseInt(router.query.page as string);
  const {slug} = router.query
  let pp:any = slug && +slug?.[1]

  
  return (
    <nav className="relative mb-4 p-6">
      <div className="flex justify-center items-center">
          <Link
            href={`/${data.place}/${p - 1 || pp - 1}`}
            
          >
        <span className=" cursor-pointer  py-2 px-3 ml-0  bg-[#00000094]  hover:bg-neutral-900">
            <FaArrowLeft size={24} />
        </span>
          </Link>

        <span className=" cursor-pointer  py-2 px-3 ml-0 font-semibold text-gray-200   ">
          
            Page {p || pp}
        </span>

          <Link
            href={`/${data.place}/${p + 1 || pp + 1}`}
            
          >
        <span className=" py-2 cursor-pointer px-3  bg-[#00000094] hover:bg-neutral-900">
            <FaArrowRight size={24}/>
        </span>
          </Link>
      </div>
    </nav>
  );
}

export default Pagination;
