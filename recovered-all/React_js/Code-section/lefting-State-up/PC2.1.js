import React,{useState} from "react";

export default function AddUser({setUser}){
  return (
    <div>
      <h1> Add User {setUser} </h1>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User "/>
    </div>
  )
}
