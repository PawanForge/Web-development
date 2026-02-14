import React,{useState} from "react";
  const arr=[
    {
    name:"pawan",
    roll:40
  },
  {
    name:"Pranav",
    roll:41
  },
  {
    name:"Shivam sharma",
    roll:90
  },
  ];
  export default function Loop(){
  return(
    <>
    <h1>loop</h1>
    {
      arr.map((item,idx)=>(
        <h2 key={idx}>{item.name} {item.roll}</h2>
      ))
    }
    </>

  )
}
