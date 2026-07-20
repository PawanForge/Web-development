import React,{useState} from "react";
import useCounter from "./useCounter";
const Counter=()=>{
  const {count,inc, dec}=useCounter();
  return(
    <>
    <h1>{count}</h1>
    <button onClick={inc}>+</button>
    <br/>
    <br/>
    <button onClick={dec}>-</button>
    </>
  )
}
export default Counter;
