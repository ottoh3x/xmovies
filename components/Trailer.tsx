import React from "react";
import Backdrop from "./Backdrop";
import {motion} from "framer-motion"


interface TrailerProps {
    trailer_key:string;
    handleClose:any;
}

function Trailer(tr : TrailerProps) {

  const dropIn = {
    hidden : {
      y:"-100vh",
      opacity:0
    },
    visible : {
      y:0,
      opacity:1,
      transition : {
        type:"spring",
        damping:25,
        stiffness:500,
      }
    },
    exit: {
      y:"100vh",
      opacity:0
    }
  }
 

  return (
    <Backdrop onClick={tr.handleClose}>
      
          <motion.div
          
            className=""
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <iframe width="1014" height="578" className="drop-shadow-2xl"
  src={`https://www.youtube.com/embed/${tr.trailer_key}`}
  frameBorder="0"></iframe>
          </motion.div>
        
    </Backdrop>
  );
}

export default Trailer;
