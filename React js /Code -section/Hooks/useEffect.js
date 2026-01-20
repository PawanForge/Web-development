import React,{useState,useEffect} from "react";
export default function Timer(){
const [second,setSeconds]=useState(0);

useEffect(()=>{
  const interval=setInterval(()=>
  setSeconds(s=>s+1),1000);

  return ()=>clearInterval(interval);
},[]);
return <h1>{second}</h1>
}
