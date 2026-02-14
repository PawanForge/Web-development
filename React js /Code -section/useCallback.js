import React,{useState ,useCallback} from "react";
export default function App(){
  const [count,setCount]=useState(0);
  const sayHello=useCallback(()=>{
    console.log("Hello");
  },[])
return (
  <>
  <h2>{count}</h2>
  <br/>
  <button onClick={()=>setCount(count+1)}>+</button>
  <br/>
  <br/>
  <button onClick={sayHello}>Say Hello</button>
  </>
);
}
// useCallBack is used when passing the function to child component and child component used the memo (stop unnecessary re-render )
