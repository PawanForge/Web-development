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

import React from "react";
const UserInput=(props)=>{
  return(
    <div>
      <input type="text" ref={props.ref}/>
      </div>
  )
}
export default UserInput;
