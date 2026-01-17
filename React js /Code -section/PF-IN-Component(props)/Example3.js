(parent)
import React,{useState} from "react";
import Child from "./PFPChild";
export default function Parent(){
  const [count,setCount]=useState(0);
  function increase(name){
  setCount(count+1);
  }
  function decrease(name){
    setCount(count-1);
  }
return( 
  <>
   <h1>Parent component </h1>
   <h2>{count}</h2>
  <Child inc={increase} dec={decrease}/>
  </>
  );
}
(child)
import React,{useState} from "react";
export default function Child({inc,dec}){
  return( 
    <>
  <h1>Child component</h1>
  <button onClick={inc}>+</button>
  <button onClick={dec}>-</button>
  </>
  )
}
