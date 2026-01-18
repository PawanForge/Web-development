(change style using Varible)
import React from "react";
export default function App(){
  const isError=false;
  return (
    <h2 style={{color:isError ? "red" :"green"}}>Status Message</h2>
  )
}
