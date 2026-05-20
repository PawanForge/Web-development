
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserEdit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect(() => {
    const getUserData = async () => {
      const url = "http://localhost:3000/user/" + id;
      let response = await fetch(url);
      response = await response.json();

      setName(response.name);
      setEmail(response.email);
      setAge(response.age);
    };

    getUserData();
  }, [id]);

  return (
    <div>
      <h1>Edit User Details</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="User name"
      />
      <br /><br />

      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="User age"
      />
      <br /><br />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="User email"
      />
    </div>
  );
}

export default UserEdit;
