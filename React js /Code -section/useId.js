import React,{useId} from "react";
export default function DynamicForm(){
  const nameId=useId();
  const emailId=useId();

  console.log("Name ID:",nameId);
  console.log("Email ID:",emailId);
return(
  <div style={{padding:"20px", fontFamily:"sans-serif"}}>
    <h2> Dynamic IDs Example</h2>
    <form>
        <div>
          <label htmlFor={nameId}>Name:</label>
          <input id={nameId} placeholder="Enter your name"/>
          </div>
          <br/>
          <div>
            <label htmlFor={emailId}>Email:</label>
            <input id={emailId} placeholder="Enter your emial"/>
            </div>
            <br/>
            <button  type="submit">Submit</button>
            </form>
            </div>
     );
}
