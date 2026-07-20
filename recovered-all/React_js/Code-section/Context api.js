import React, {createContext,useContext} from "react";
const MyContext=createContext();
export default function App()
{
  return (
    <MyContext.Provider value="pawan">
      <Child/>
      </MyContext.Provider>
  );
}
function Child(){
  return <GrandChild/>
}
function GrandChild(){
  const name=useContext(MyContext);
  return <h2>Hello {name}</h2>
}
/*createContext() is a React function that creates a global data container so values can be shared across components without using props.*/
