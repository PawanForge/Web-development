//transfering of the data from  child1 to parent and then chlid2
import React,{useState} from "react";
import AddUser from "./PC1";
import DisplayUser from './PC2';
export default function Parent(){
  const [user,setUser]=useState('');
  return(
    <div>
      <h1>Parent </h1>
      <AddUser setUser={setUser}/>
      <DisplayUser user={user}/>
      <hr/>
    </div>
  )
}
