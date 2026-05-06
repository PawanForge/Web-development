import React, {useState} from "react";
import "./style.css";
 function BMI(){
   const [Height,setHeight]=useState("");
   const [weight,setweight]=useState("");
   const [BMI,setBMI]=useState("");

   function Calculate(){
     setBMI(weight/(Height*Height)*10000)
   }
   return(
     <div className="container">
     <h1>BMI calculator </h1>
     <input className="h" value={Height} placeholder="Enter the height in cm "onChange={(event)=>setHeight(event.target.value)}></input>
     <input className="w" value={weight} placeholder="Enter the weight in kg  " onChange={(event)=>setweight(event.target.value)}></input>
     <button style={{backgroundColor:"#8b6f50",color:"#fff", border:"none",borderRadius:"5px",padding:"5px", margin:"5px" ,boxShadow:"boxShadow:10px 10px 10px rgba(0,0,0,0.05)"}}onClick={Calculate}>Calculate BMI</button>
     <h2>BMI is :{BMI}</h2>
     {
       BMI && (
         BMI<=18.5 ?<h3 style={{color:"#ff9800"}}>❎underweight</h3>:
         BMI<25 ? <h3>✅normal weight</h3>:
         BMI<30 ? <h3>❎overweight</h3>:
         <h3>👎obese</h3>
       )


     }

     </div>

   )
 }
 export default  BMI;
