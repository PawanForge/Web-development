(Parent)
import React,{useState} from "react";
import Child from "./PFPChild";
export default function Parent(){
  function showMessage(){
  alert("Button clicked ");
}
return( 
  <>
   <h1>Parent component </h1>
  <Child onClickBtn={showMessage}/>
  </>
  )
}
/*Another file component (easy to view both code in same file )*/
(child)
import React,{useState} from "react";
export default function Child({onClickBtn}){
  return( 
    <>
  <h1>Child component</h1>
  <button onClick={onClickBtn}>Click</button>
  </>
  )
}
