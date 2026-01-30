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
// 
import React, { useId } from "react";

export default function App() {
  const id = useId();

  return (
    <>
      {/* Name field */}
      <label htmlFor={`${id}-name`}>Enter the user name</label>
      <br />
      <input
        id={`${id}-name`}
        type="text"
        placeholder="Enter the name"
      />

      <br />
      <br />

      {/* Password field */}
      <label htmlFor={`${id}-password`}>Enter the user password</label>
      <br />
      <input
        id={`${id}-password`}
        type="password"
        placeholder="Enter the password"
      />
    </>
  );
}
