import { Link } from "react-router-dom";

export default function UserList() {
  const users = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Pawan" }
  ];

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
