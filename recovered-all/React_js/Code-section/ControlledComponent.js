import React,{useState} from "react";
export default function ControlledInput(){
  const [name,setName]=useState("");
   return(
     <div>
       <input type="text" value={name} onChange={(e)=>
       setName(e.target.value)}/>
       <p>Name:{name}</p>
       <i>In controlled component,the browser does not handle the input ;React Handel it. </i>
       </div>
   );
}
