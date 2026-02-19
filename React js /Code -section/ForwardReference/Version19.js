import React,{useRef} from "react";
import UserInput from "./Caller2";
export default function Display(){
  const InputRef=useRef();
  function Call(){
    InputRef.current.focus();
    InputRef.current.value=10;
  }
  return(
    <>
    <h1>Forward Reference</h1>
    <button onClick={Call}>Click</button>
    <UserInput ref={InputRef}/>
    </>
  )
}


// another file component

import React,{forwardRef} from "react";
const UserInput=(props,ref)=>{
  return(
    <div>
      <input type="text" ref={ref}/>
      <br/>
      </div>
  )
}
export default forwardRef(UserInput);
