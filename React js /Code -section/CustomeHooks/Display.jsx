import React,{useState,useEffect} from "react";
import useToggle from "./useToggle"
export default function App(){
  const [value,togglevalue]=useToggle(true);
  const [Data,setData]=useToggle(false);
  console.log("val---",value);
  return (
    <div>
    <button onClick={togglevalue}> Toggle Heading </button>
    <button onClick={()=>togglevalue(false)}> Hide Heading </button>
    <button onClick={()=>togglevalue(true)}> Show Heading </button>
    {
     value?<h1>Custome hooks in react js</h1>:null
    }
    <hr/>
    <button onClick={setData}> Toggle Heading </button>
    <button onClick={()=>setData(false)}> Hide Heading </button>
    <button onClick={()=>setData(true)}> Show Heading </button>
    {
    Data?<h1>Second heading 
    </h1>:null
    }
    </div>
  )
}
