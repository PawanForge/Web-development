import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    console.log(name, age, email);


    const url = "http://localhost:3000/user";

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

     
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }

      let data = await response.json();
      console.log("Added:", data);

      alert("New user added");

      setName("");
      setAge("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Error adding user");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <button onClick={createUser}>Add User</button>
    </div>
  );
}
