import React,{useState} from "react";
export default function Cart(){
  const[items,setItems]=useState([]);
  const totalItems=items.length;
  function addItem(){
    setItems([...items,"Apple"]);
  }
  return (
    <>
    <h1>Derived</h1>
    <button onClick={addItem}>Add Items</button>
    <p>Total items:{totalItems}</p>
    <p>setItems:{items}</p>
    </>
  )
}
