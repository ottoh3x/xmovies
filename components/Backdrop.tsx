import React from "react";
import { motion } from "framer-motion";

interface BackdropProps {
  children: any;
  onClick: any;
}

const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
        duration:0.2,
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    
  },
};

function Backdrop(backdrop: BackdropProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] cursor-pointer "
      onClick={backdrop.onClick}
      
    >
      {backdrop.children}
    </motion.div>
  );
}

export default Backdrop;
