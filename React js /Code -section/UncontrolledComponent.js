import React,{useRef} from "react";
export default function Input(){
  const inputRef=useRef();
  function handleSubmit(){
    alert(inputRef.current.value);
  }
  return (
    <>
    <h1>Uncontrolled Input </h1>
    <ul>
      <li>Uses useRef</li>
      <li>DOM control value</li>
      <li>value via Ref</li>
      <li>Less code </li>
      </ul>
    <input type="text" ref={inputRef}/>
    <button onClick={handleSubmit}>Submit</button>
    </>

  );
}
