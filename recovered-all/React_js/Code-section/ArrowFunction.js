import React ,{useState} from "react";
 const App=()=>{
  const [isDark,setIsDark]=useState(false);
  return(
    <div 
    style={{height:"100vh", backgroundColor:isDark ? "#efefef" :"#8ef5", color:isDark ? "black ": "white",textAlign:"center",paddingTop:"50px"}}>
      <h1>
        {
          isDark ? "Dark Mode" : "light Mode"
        }
        <button onClick={()=>setIsDark(!isDark)}>switch </button>
        </h1>
        </div>
  );
};
export default App;
