import React,{useState} from "react";
export default function App(){
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <h1>{isLoggedIn? "welcome User" : "Please Login"}</h1>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
  )
}
