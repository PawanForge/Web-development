(Parent)
import React,{useState} from "react";
import Child from "./ChildComponent";
export default function Parent(){
  return <Child name="Rahul"/>;
}
(child)
import React,{useEffect} from "react";
export default function Child({name}){
  useEffect(()=>{
    console.log("Name props change",name);
  },[name]);
  return <h2>Name :{name}</h2>
}
