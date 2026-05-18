> **Routes for UserList and Add User UI using React + API**

---

## 🧭 Routing with **React Router**

Routing lets you create **multiple pages** in a React SPA without reloading.

### Key terms

| Term        | Meaning                           |
| ----------- | --------------------------------- |
| Router      | Manages page navigation           |
| Routes      | Group of all routes               |
| Route       | Path → Component mapping          |
| NavLink     | Navigation link with active style |
| useNavigate | Redirect after action             |

---

## 🗺 Route Setup (App.jsx)

```jsx
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Userlist from "./Userlist";
import UserAdd from "./UserAdd";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">User List</NavLink>
        <NavLink to="/add">Add User</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📄 UserList UI (GET data from API)

Connected to **JSON Server**:

```jsx
useEffect(() => {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(setUsers);
}, []);
```

### Concepts used

| Concept   | Use             |
| --------- | --------------- |
| useEffect | Run API on load |
| useState  | Store users     |
| map()     | Display list    |
| key       | Unique id       |

---

## ➕ Add User UI (POST data)

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleSubmit = async () => {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  navigate("/");
};
```

### Concepts used

| Concept        | Use              |
| -------------- | ---------------- |
| Form handling  | Take input       |
| POST method    | Send data        |
| JSON.stringify | Convert to JSON  |
| useNavigate    | Redirect to list |

---

## 🔌 API Integration Concepts

| Method | Work        |
| ------ | ----------- |
| GET    | Fetch users |
| POST   | Add user    |

---

## 🧠 Important terms around this topic

* SPA (Single Page Application)
* Routing
* Component rendering by path
* API integration
* CRUD (Create, Read)
* Hooks (useState, useEffect)
* Navigation after submit

---

## ✅ Flow

1. Click **User List** → Route `/` → Fetch & show users
2. Click **Add User** → Route `/add` → Submit form
3. POST to API → Redirect → Updated list

---

### One-line summary

> Using React Router, you create separate routes for listing users and adding users, both connected to a JSON Server API using GET and POST methods.
