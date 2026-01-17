(Parent)
import React,{useState} from "react";
import Child from "./PFPChild";
export default function Parent(){
  function getName(name){
  console.log(name);
  }
return( 
  <>
   <h1>Parent component </h1>
  <Child sendName={getName}/>
  </>
  )
}
(child)
import React,{useState} from "react";
export default function Child({sendName}){
  return( 
    <>
  <h1>Child component</h1>
  <button onClick={()=>sendName("Pawan")}>Click</button>
  </>
  )
}
