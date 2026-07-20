import React,{useState} from "react";
export default function App(){
  const [user,setUser]=useState({
    name : 'Anil',
    address:{
      city:'Delhi',
      country:'India'
    }
  })
  const handleName=(val)=>{
    user.name=val;
    setUser({...user});

  }
  const handleCity=(val)=>{
    user.address.city=val;
    setUser({...user});
  }
  return(
    <div>
      <input type="text" placeholder="updating name" onChange={(event)=>handleName(event.target.value)}/>
      <br/>
      <br/>

      <input type="text" placeholder="updating city" onChange={(event)=>handleCity(event.target.value)}/>


      <h2>Name:{user.name}</h2>
      <h2>city:{user.address.city}</h2>
      <h2>country  :{user.address.country}</h2>
    </div>

  )
}
