import { Link } from "react-router";

export default function UserList() {
  const userData = [
    { id: 1, name: 'Anil' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Anil' },
  ];

  return (
    <div style={{color:'red'}}>
      <h1>User List Page</h1>
{
    userData.map((items)=>(
        <div>
            <Link to={"/users/"+items.id+"/"+items.name}>{items.name}</Link>
        </div>    
    ))
}
    </div>
  );
}
