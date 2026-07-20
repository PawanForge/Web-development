import React from "react";
import "./style1.css";
export default function App(){
  const isSuccess=false;
  return (
    <h2 className= {isSuccess ? "success":"error"}>Result </h2>
  )
}
(css) (style1.css )file name 
  .sucess{
  color:green
}
.error{
  color:red;
}
