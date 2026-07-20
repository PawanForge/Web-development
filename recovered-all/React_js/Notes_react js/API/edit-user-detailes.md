
# 🟣 Edit User Details Page (Update API)

## 🔷 What is Edit / Update in API?

Editing means **changing existing data on the server**.

Example:

* Change user name
* Update age
* Correct email
* Modify profile info

👉 This is done using:

* **PUT** → full update (replace whole object)
* **PATCH** → partial update (only change required fields)

---

# 🟡 Why we use Edit API?

We use edit/update when:

* User wants to update profile
* Admin modifies data
* Fix wrong information
* Improve existing records

Without update → data stays static ❌

---

# 🟢 How Update API Works?

### Flow:

1. User clicks **Edit button**
2. Data fills in form
3. User changes values
4. Click **Update**
5. API sends request to server
6. Database updates record
7. UI refreshes

---

# 🔗 API Example

### Update user with id = 1

```http
PUT http://localhost:3000/users/1
```

OR

```http
PATCH http://localhost:3000/users/1
```

---

# 🧪 Example Backend (JSON Server)

```json
{
  "users": [
    {
      "id": 1,
      "name": "Pawan",
      "age": 22,
      "email": "pawan@gmail.com"
    }
  ]
}
```

---

# ⚛️ React Edit User Page Example

## 🧩 Step 1: Get User Data in Form

```jsx
import { useState, useEffect } from "react";

export default function EditUser({ userId }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // Fetch single user
  const getUser = async () => {
    let res = await fetch(`http://localhost:3000/users/${userId}`);
    let data = await res.json();

    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  useEffect(() => {
    getUser();
  }, []);
```

---

## 🧩 Step 2: Update API Function

```jsx
  const updateUser = async () => {
    let updatedData = {
      name,
      age,
      email,
    };

    await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    alert("User Updated Successfully");
  };
```

---

## 🧩 Step 3: Form UI

```jsx
  return (
    <div>
      <h2>Edit User Details</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Age"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <button onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}
```

---

# 🔁 Complete Flow

| Step | Action              |
| ---- | ------------------- |
| 1    | User clicks Edit    |
| 2    | Data loads in form  |
| 3    | User changes data   |
| 4    | Click Update        |
| 5    | PUT/PATCH API call  |
| 6    | Server updates data |
| 7    | Success message     |

---

# 🔥 PUT vs PATCH Difference

| Feature       | PUT                     | PATCH               |
| ------------- | ----------------------- | ------------------- |
| Update type   | Full replace            | Partial update      |
| Data required | Complete object         | Only changed fields |
| Use case      | Replace user completely | Edit one field      |

---

# 🧠 Interview Definition

> “Edit User page is used to update existing user data. It fetches current data, allows user modification, and sends a PUT or PATCH request to update the record on the server.”

---

# ⚡ Best Practice Tip

Instead of reloading page:

```js
navigate("/users");
```

Or update state directly after success.
