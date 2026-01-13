import React,{useState} from "react";
import A from "./A";
import B from "./B"; 
export default function Parent(){
  const [items,setItems]=useState([]);
  const totalItems=items.length;

  function addItems(){
    setItems([...items,"Apple"]);
  }
  return(
    <div>
      <h1>Parent Component</h1>
      <A addItems={addItems}/>
      <B totalItems={totalItems}/>
    </div>
  )
}
