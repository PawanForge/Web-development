
## 🔴 What is DELETE Method in API?

**DELETE** is an HTTP method used to **remove a resource** from the server.

> If a user is no longer needed in your app → call DELETE API to remove that user from DB.

---

## 🟡 Why we use DELETE API?

We use DELETE when:

* Remove a user
* Remove a product
* Remove a post/comment
* Clean unwanted data from database

Without DELETE → data can only increase, never removed ❌

---

## 🟢 How DELETE API Works?

Client (React) → sends request → Server → deletes record → sends response.

```
DELETE /users/5
```

Meaning: Delete user whose **id = 5**

---

## 🧪 Example Backend API (JSON Server)

If you run JSON server:

```bash
json-server --watch db.json --port 3000
```

`db.json`

```json
{
  "users": [
    { "id": 1, "name": "Pawan", "age": 22 },
    { "id": 2, "name": "Rahul", "age": 25 }
  ]
}
```

Delete URL will be:

```
http://localhost:3000/users/1
```

---

## ⚛️ React Example – User List with Delete Button

### Step 1: Fetch Users

```jsx
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("http://localhost:3000/users");
    let data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
```

---

### Step 2: Delete Function

```jsx
  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    // Refresh list after delete
    getUsers();
  };
```

---

### Step 3: UI with Delete Button

```jsx
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name} - {user.age}</p>
          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔁 Flow Summary

| Step | Action               |
| ---- | -------------------- |
| 1    | React shows users    |
| 2    | Click Delete button  |
| 3    | DELETE API called    |
| 4    | Server removes user  |
| 5    | React refreshes list |

---

## 💡 Important Terms

| Term        | Meaning                           |
| ----------- | --------------------------------- |
| API         | Bridge between frontend & backend |
| HTTP Method | GET, POST, PUT, DELETE            |
| Endpoint    | URL of API                        |
| Resource    | Data like user, product           |
| id          | Unique identifier to delete       |

---

## 🧠 Interview Line

> “DELETE method is used to remove a specific resource from the server using its unique id, and after deletion, UI is updated by refetching the data or updating state.”

---

## ✅ Pro Tip (Better Way Without Refetch)

Instead of calling `getUsers()` again:

```jsx
setUsers(users.filter((u) => u.id !== id));
```

This makes UI faster ⚡

---

If you want, next I can show **Update (PUT)** method in the same style to complete CRUD.
