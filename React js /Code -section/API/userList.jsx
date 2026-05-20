import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Userlist() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const url = "http://localhost:3000/user"; // (you want this)

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  const deletionUser = async (id) => {
    let response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    response = await response.json();

    if (response) {
      alert("record deleted");
      getUserData(); 
    }
  };
   const editUser=(id)=>{
    navigate("/edit"+id);
   }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      await getUserData();
    };
    fetchData();
  }, []);

  return (
    <div className="userlist">
      <h1 className="title">Integrate JSON Server API and Loader</h1>

      {loading && <h3>Loading...</h3>}

      {userData.map((user) => (
        <h2 key={user.id} className="user-item">
          {user.id}, {user.name}, {user.email}

          <button onClick={() => deletionUser(user.id)}>
            Delete
          </button>
          <button onClick={()=>editUser(user.id)}></button>
        </h2>
      ))}
    </div>
  );
}
