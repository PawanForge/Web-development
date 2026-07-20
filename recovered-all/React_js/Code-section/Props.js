(Parent )
import React from "react";
import Message from "./C";

export default function App(){
  return <Message text="Hello React"/>;
}
(child)
import React from "react";
export default function Message(props){
  return <h2>{props.text}</h2>
}
