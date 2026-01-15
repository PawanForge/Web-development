import React,{useRef} from "react";
function Apppp(){
  const inputRef=useRef(null);

  const handleFocus=()=>{
    inputRef.current.focus();
  };
  return(
    <div>
      <input ref={inputRef} placeholder="Type something"/>
      <button onClick={handleFocus}>Focus Input</button>
      </div>
  );
}
export default Apppp;
