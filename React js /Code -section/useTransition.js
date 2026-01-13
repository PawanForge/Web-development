import React,{useState, useTransition} from "react";
export default function Trans(){
  const [isPending,startTransition]=useTransition();
  const [text,setText]=useState("");
  const [list, setList]=useState([]);


  const handleChange=(e)=>{
    const value=e.target.value;
    setText(value);
    //console.log(Text);
    
    //setList(value);

    startTransition(()=>{
      const bigData=Array.from({length:200},(_,i)=>
      value+"item"+1
      );
      setList(bigData);
      console.log(list);
    });  };
  return (
    <div>
    <h2>useTransaction Basic Example</h2>
    <input type="txt" value={text} onChange={handleChange} placeholder="Type here..."/>
    {
      isPending && <p>updating List...</p>
    }
    <ul>
      {
        list.slice(0,30).map((item,index)=>(
          <li key={index}>{item}</li>  ))
        }
      </ul>
    </div>
  )
}
