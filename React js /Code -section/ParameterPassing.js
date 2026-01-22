import React,{useState} from "react";
 const App=()=>{
  const showMessage=(name)=>{
    alert("Hello "+name);
  };
  return(
    <div>
      <button style={{color:"white" ,backgroundColor:"brown", outline:"none", border:"none", borderRadius:"5px"}}onClick={()=>showMessage("Pawan")}>Get Name</button>
      <ol><ul>Parameter passing</ul></ol>
      <hr/>
      <ul>
        <li>Send <b>Dynamic</b> Data</li>
        <li><b>Reuse</b> Same function for diferent Values</li>
        <li>Handel <b>user</b> action </li>
        <li><b>Avoid</b> writing multiple function </li>
        </ul>
    </div>
  )
}
export default App;
