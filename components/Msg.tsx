

  import React from 'react'

  type MsgProps = {
    title:string;
    message:string;
  }
  
  export default function Msg({ title, message } :MsgProps) {
    return (
        <div className="flex flex-col">
        <span>
          <span className="font-bold text-gray-200">{title}</span> {message}
        </span>
  
        <span className="text-blue-800 text-xl "></span>
      </div>
    )
  }
  