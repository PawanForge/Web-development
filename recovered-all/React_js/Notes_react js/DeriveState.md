Here is your content **properly formatted, structured, and easy to revise** without removing the important concepts.

# 📘 Derived State in React JS

---

## 1️⃣ What is Derived State?

**Derived State** is a value that is **calculated from existing state or props**.

It is **not stored separately using `useState`**. Instead, it is calculated using a normal variable or constant.

### Example

```jsx
const totalUsers = users.length;
const lastUser = users[users.length - 1];
const uniqueUsers = [...new Set(users)];
```

Here, all three values are derived from the `users` state.

### Flow

```text
users (State)
    │
    ├── users.length
    │       ↓
    │   totalUsers
    │
    ├── users[last index]
    │       ↓
    │   lastUser
    │
    └── new Set(users)
            ↓
       uniqueUsers
```

---

# 2️⃣ Why Use Derived State?

Suppose you already have:

```jsx
const [users, setUsers] = useState([]);
```

You **don't need** to create another state for the total:

```jsx
const [totalUsers, setTotalUsers] = useState(0); ❌
```

Because `totalUsers` can be calculated directly:

```jsx
const totalUsers = users.length; ✅
```

### Problems with Duplicate State

```text
Duplicate State
      ↓
Need extra updates
      ↓
Possible mismatch
      ↓
More bugs
      ↓
More complex code
```

### Derived State

```text
Existing State
      ↓
Calculate Value
      ↓
Always in Sync
      ↓
Cleaner Code
```

---

# 3️⃣ Light Data vs Actual State

| Type              | Meaning                                     | Example        |
| ----------------- | ------------------------------------------- | -------------- |
| **Derived Value** | Calculated from existing data               | `users.length` |
| **State**         | Data that needs to be independently changed | `users`        |

### Example

```jsx
const total = users.length;  // Derived Value
```

```jsx
const [users, setUsers] = useState([]);  // State
```

> **Important:** Derived values are not necessarily "lightweight" or "heavyweight" in terms of performance. The key difference is whether the value needs to be **independently stored and updated**. If it can be calculated from existing state or props, you generally don't need another state variable.

---

# 4️⃣ Main Rule

> ⭐ **If a value can be calculated from existing state or props, don't store it separately in `useState`. Calculate it instead.**

### Example

```jsx
const [users, setUsers] = useState([]);

const totalUsers = users.length;
```

Instead of:

```jsx
const [users, setUsers] = useState([]);
const [totalUsers, setTotalUsers] = useState(0); ❌
```

---

# 5️⃣ Complete Example

```jsx
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUser = () => {
    if (!user.trim()) return;

    setUsers([...users, user]);
    setUser("");
  };

  // Derived Values
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)];

  return (
    <div>
      <input
        type="text"
        placeholder="Add new user"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />

      <button onClick={handleAddUser}>
        Add User
      </button>

      <h2>Total Users: {total}</h2>

      <h2>Last User: {last || "No users yet"}</h2>

      <h2>Unique Total Users: {unique.length}</h2>

      {users.map((item, index) => (
        <h4 key={index}>
          {item}
        </h4>
      ))}
    </div>
  );
}

export default App;
```

---

# 6️⃣ What is `Set()`?

`Set` is a JavaScript object that stores **unique values**.

### Example

```jsx
const users = ["Ram", "Shyam", "Ram"];

const unique = [...new Set(users)];
```

Result:

```text
Before:
["Ram", "Shyam", "Ram"]

        ↓ Set()

After:
["Ram", "Shyam"]
```

### Why `...`?

The spread operator converts the `Set` back into an array:

```jsx
[...new Set(users)]
```

---

# 7️⃣ Purpose of Derived State

| Benefit                    | Reason                                |
| -------------------------- | ------------------------------------- |
| **Clean Code**             | Avoids unnecessary state              |
| **Single Source of Truth** | Data is stored in one place           |
| **Always Updated**         | Recalculates when source data changes |
| **Less Bugs**              | No manual synchronization             |
| **Easy Debugging**         | Fewer state variables                 |

---

# 8️⃣ 🧠 Easy Example to Remember

```jsx
const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);

// Derived Value
const total = price * quantity;
```

You don't need:

```jsx
const [total, setTotal] = useState(200); ❌
```

Because:

```text
price × quantity
      ↓
    total
```

If `price` or `quantity` changes, `total` automatically gets the latest value.

---

# 🎯 Interview Definition

> **"Derived state is a value calculated from existing state or props instead of being stored separately. It helps maintain a single source of truth and keeps React components clean, predictable, and less error-prone."**

### ⭐ Quick Memory

```text
State / Props
      ↓
Calculate
      ↓
Derived Value
```

**Rule:**
👉 **If you can calculate it, don't store it as separate state.**
