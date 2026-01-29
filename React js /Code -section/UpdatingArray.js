import React,{useState} from "react";
export default function App()
{
  const [data,setData]=useState([
    'anil', 'sam','peter'
  ])
  const [dataDetailes,setDataDetailes]=useState([
    {name :'Anil' ,age:'29'},
    {name: 'sam' , age:'25'},
    {name: 'peter' , age :'33'},
  ])

  const handleUser=(name)=>{
    data[data.length-1]=name;
    setData([...data]);
  }
  const handleAge=(age)=>{
    dataDetailes[data.length-1].age=age;
    setDataDetailes([...dataDetailes]);

  }
  return(
    <div>
      <h1>Updating Array in state</h1>
      <input type="text" placeholder="Enter Last User Name" onChange={(e)=>handleUser(e.target.value)}/>
      <br/>
      <br/>
      <input type="text" placeholder="Enter age" onChange={(e)=>handleAge(e.target.value)}/>


      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr/>
      {
        dataDetailes.map((item,index)=>(
          <h3 key={index}>{item.name} ,{item.age}</h3>
        ))
      }

    </div>
  )
}
