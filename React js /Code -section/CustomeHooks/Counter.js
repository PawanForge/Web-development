import React,{useState} from "react";
import useCounter from "./useCounter";
const Counter=()=>{
  const {count,increment}=useCounter();
  return(
    <button onClick={increment}>Count:{count}</button>
  )
}
export default Counter;
