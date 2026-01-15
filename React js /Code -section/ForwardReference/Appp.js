import React,{useRef} from "react";
import Input from "./Input";

function App(){
  const inputRef=useRef(null);
  return(
    <div>
      <Input ref={inputRef}/>
      <button onClick={()=>
      inputRef.current.focus()}>Focus
        </button>
        </div>
  );
}
export default App;
