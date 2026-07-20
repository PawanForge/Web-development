import React,{useState} from "react";
export default function  App(){
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await new  Promise((res)=>setTimeout(res,2000));
    console.log("Form Submitted");
  }

  return(
    <div>
    <h1>useFormStatus Hook in React js 19</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter Name"/>
    <br/>
    <br/>
    <input type="text" placeholder="Enter Password"/>
    <br/>
    <br/>
    <button >Submit</button>
    </form>
    </div>
  )
}
