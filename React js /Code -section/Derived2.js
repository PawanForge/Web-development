//constent and variable used to store the value of state  //
// variable is light weigtt == better performance
import React,{useState} from "react";
export default function App(){
const [users,setUsers]=useState([]);
const [user,setUser]=useState('');
const handleAddUser=()=>{
  setUsers([...users,user])
}
const total=users.length;
const last=users[users.length-1];
const unique=[...new Set(users)].length;
return(
  <div>
    <h2>Total user:{total}</h2>
    <h2>Last user:{last}</h2>
    <h2>unique total  user:{unique}</h2>

    <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add new users"/>
    <button onClick={handleAddUser}>Add user </button>
    {
      users.map((item,index)=>(
        <h4 key ={index}>{item}</h4>
      ))
    }

  </div>
)
}
