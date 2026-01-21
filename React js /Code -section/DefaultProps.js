(Parent code)
import React from "react";
import Button from "./Button";
export default function App(){
  return (
    <>
    <Button/>
   {/*} <Button text="Submit"/>
    <Button text="Delete" type="Submit"/>*/}
   </>
  )
}
(child code)
import React from "react";
export default function Button({text="Click Me", type="button"}){
  return(
    <button type={type}>{text}</button>
  );
} 
