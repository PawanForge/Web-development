# 📘 Context API in React

---

## 🔹 What is Context API?

**Context API** is used to **share data between components** without passing props at every level.

---

## 🔹 Why do we use Context API?

### ❌ Without Context (Prop Drilling)

```text
App
 ↓ user
Navbar
 ↓ user
Header
 ↓ user
Profile
 ↓ user
UserName
```

The same props are passed through many components.

This is called **Prop Drilling**.

---

### ✅ With Context

```text
App (Provider)
      ↓
Dashboard
      ↓
Profile
      ↓
useContext()
```

Any component can directly access the data.

---

# 🧱 Three Main Parts

| Part              | Work            |
| ----------------- | --------------- |
| `createContext()` | Creates Context |
| `Provider`        | Shares data     |
| `useContext()`    | Reads data      |

---

# 🛠 Step 1 – Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

# 🛠 Step 2 – Provide Data

```jsx
import { UserContext } from "./UserContext";

function App() {
  const user = "Pawan";

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
```

👉 `user` is now available to all components inside `<Dashboard />`.

---

# 🛠 Step 3 – Use Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {

  const user = useContext(UserContext);

  return <h2>Welcome {user}</h2>;
}

export default Profile;
```

---

## 🔹 How It Works?

```text
createContext()
        ↓
Provider shares data
        ↓
useContext() reads data
        ↓
UI Updates
```

---

## 🔹 Passing Multiple Values

```jsx
<UserContext.Provider value={{ user, role }}>
```

Use:

```jsx
const { user, role } = useContext(UserContext);
```

---

## 🔹 Context with State

```jsx
const [user, setUser] = useState("Pawan");

<UserContext.Provider value={{ user, setUser }}>
```

Update from any child:

```jsx
const { setUser } = useContext(UserContext);

setUser("Rahul");
```

---

## 🔹 When to Use Context?

✅ User Authentication

✅ Theme (Dark / Light)

✅ Language

✅ Global Settings

---

## 🔹 When NOT to Use Context?

❌ Simple Parent → Child communication

❌ Local form data or frequently changing state

---

## 🧠 Remember

> **Context API = Share Data Globally (No Prop Drilling)**

```text
Without Context
App → Navbar → Header → Profile

        ↓

With Context
Provider → useContext()
```

### ⭐ One-Line Definition

> **Context API lets you share data globally between components without passing props through every level.**
