import React,{useRef} from "react";
export default function InputFocus(){
  const inputRef=useRef();
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
      </div>
  );
}
