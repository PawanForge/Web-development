import React,{useState,useEffect} from "react";
function Counter(){
  const [count,setcount]=useState(0);

  useEffect(()=>{
    console.log("Component Mounted or Update");
   
  return ()=>{
    console.log("Component Unmounted");
  };
  },[count]);
  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={()=>setcount(count+1)}>
        Increment
        </button>
        </div>
  )
}
export default Counter;
