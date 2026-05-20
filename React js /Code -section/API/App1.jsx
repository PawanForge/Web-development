import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const url = "http://localhost:3000/user"; 
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    };
    fetchData();
  }, []);

  return (
    <div style={{display:"flex",alignItems:"center"}}>
      <h1>Integrate JSON Server API and Loader</h1>

      {userData.map((user, index) => (
        <h2 key={index}>{user.id},{user.name},{user.age}</h2>
      ))}
    </div>
  );
}
