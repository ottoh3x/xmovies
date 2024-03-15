import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Search from "./Search";

interface SideBarProps {
  handleSideNav:any;
}

function Sidebar(t:SideBarProps) {
  const [tran, setTran] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
   

    <header className={`${scrollPosition > 50 ? "bg-[#111]" : "bg-transparent"}  p-4  fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out  `}>
      <div className="flex justify-between mx-auto z-50">
      <div className="flex items-center gap-6">
        <div className="font-black text-white cursor-pointer" onClick={t.handleSideNav}><FaBars size={22} strokeWidth={2}/></div>
        <Link href={`/`}>
          <span className="hidden md:block text-white font-bold text-2xl cursor-pointer">
            OTTOMOVIES
          </span>
        </Link>
      </div>

      

     
      <Search />
      </div>
    </header>
   
  );
}

export default Sidebar;
