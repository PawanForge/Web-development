import React,{useState} from "react";
function useCounter(){
  const [Count,setCount]=useState(0);

  function increment(){
    setCount(Count+1);
  }
  return {Count,increment};
}
export default function App(){
  const {Count, increment}=useCounter();
  return (
    <div>
      <h2>Count :{Count}</h2>
      <button onClick={increment}>+</button>
    </div>
  )
}


/*🔹 Why curly braces {} are used?
Because we are doing object destructuring.
Instead of writing:
Copy code
Js
const result = useCounter();
const count = result.count;
const increment = result.increment;
We directly write:
(object destructuring)
const { count, increment } = useCounter();
This extracts values by key name.
