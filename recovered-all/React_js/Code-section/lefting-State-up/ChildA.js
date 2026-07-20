import React from "react";
export default function A({addItems}){
  return (
    <div>
      <h2>Component A</h2>
      <button onClick={addItems}>Add apple</button>
    </div>
  )
}
