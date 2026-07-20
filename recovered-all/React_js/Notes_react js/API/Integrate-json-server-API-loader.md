Here’s how to **integrate a JSON Server API in React** and show a **Loader** while data is loading.

We’ll use **JSON Server** as the backend.

---

## 1) Start JSON Server

`db.json`

```json
{
  "users": [
    { "id": 1, "name": "Pawan", "email": "pawan@gmail.com" },
    { "id": 2, "name": "Rahul", "email": "rahul@gmail.com" }
  ]
}
```

Run:

```bash
json-server --watch db.json --port 3000
```

API: `http://localhost:3000/users`

---

## 2) React component with Loader

### `Users.jsx`

```jsx
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 3) Better Loader (spinner with CSS)

### `index.css`

```css
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin 1s linear infinite;
  margin: 80px auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Use it

```jsx
if (loading) {
  return <div className="loader"></div>;
}
```

---

## 4) Result flow

1. Component mounts
2. `loading = true` → Loader shows
3. Data comes from API
4. `loading = false` → Users list shows

---

## 5) With async/await (clean)

```jsx
useEffect(() => {
  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };
  getUsers();
}, []);
```

---

### One-line

> Show a loader using state while React fetches data from JSON Server, then render the API data when loading finishes.
