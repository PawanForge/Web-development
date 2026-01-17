(parent)
import React,{useState} from "react";
import Child from "./PFPChild";
export default function Parent(){
  const [value,setValue]=useState("");
  function handleInput(text){
    setValue(text);
  }
  
return( 
  <>
   <h1>Parent component </h1>
   <Child onType={handleInput}/>
  </>
  );
}
(child)
import React,{useState} from "react";
export default function Child({onType}){
  return( 
    <>
  <h1>Child component</h1>
  <input onChange={(e)=>onType(e.target.value)}/>
  </>
  )
}
