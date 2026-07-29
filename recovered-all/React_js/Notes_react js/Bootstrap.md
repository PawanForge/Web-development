Here is the **short, clean, revision-friendly version** of all topics:

# React Quick Notes

## 1️⃣ React Bootstrap

**React Bootstrap** is a React UI library that provides ready-made components like **Button, Alert, Card, Navbar**, etc.

### Installation

```bash
npm install react-bootstrap bootstrap
```

### Import CSS

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

### Use Components

```jsx
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <>
      <Alert variant="success">Success!</Alert>
      <Button variant="primary">Click Me</Button>
    </>
  );
}
```

**Remember:**

* `variant` → Changes component style/color
* `onClick` → Works normally with React events
* Provides ready-made UI components

---

# 2️⃣ React Hook — `useRef`

`useRef` is used to **reference DOM elements** or store a value that persists between renders **without causing a re-render when changed**.

### Syntax

```jsx
const inputRef = useRef(null);
```

### Example

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </>
  );
}
```

### Common Uses

* Access DOM elements
* Focus input
* Read DOM values
* Store mutable values without re-rendering

---

# 3️⃣ Controlled Component

A **controlled component** is a form input whose value is controlled by **React state (`useState`)**.

### Example

```jsx
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <input
      value={user}
      onChange={(e) => setUser(e.target.value)}
      placeholder="Username"
    />
  );
}
```

### Flow

```text
User Input
    ↓
onChange
    ↓
setUser()
    ↓
React State
    ↓
Input Value Updates
```

### Advantages

✅ Easy validation
✅ Live data updates
✅ React has full control

❌ More code

---

# 4️⃣ Uncontrolled Component

An **uncontrolled component** stores form data in the **DOM itself** instead of React state.

Usually accessed using `useRef`.

### Example

```jsx
import { useRef } from "react";

function App() {
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={userRef} />
      <button>Submit</button>
    </form>
  );
}
```

### Advantages

✅ Less code
✅ Simple forms

❌ Less control
❌ Validation can be more difficult

---

# 5️⃣ Props in React

**Props (Properties)** are used to pass data from a **parent component to a child component**.

```text
Parent Component
       │
       │ Props
       ▼
Child Component
```

### Parent

```jsx
function App() {
  return <User name="Amit" />;
}
```

### Child

```jsx
function User(props) {
  return <h2>Hello {props.name}</h2>;
}
```

### Using Destructuring

```jsx
function User({ name }) {
  return <h2>Hello {name}</h2>;
}
```

### Important Points

* Props are passed **Parent → Child**
* Props are **read-only**
* Props can contain strings, numbers, objects, arrays, functions, and more
* Props help make components **reusable**

---

# ⚡ Quick Revision Table

| Topic                      | Main Purpose                                        |
| -------------------------- | --------------------------------------------------- |
| **React Bootstrap**        | Ready-made UI components                            |
| **useRef**                 | Access DOM / store mutable values without re-render |
| **Controlled Component**   | Form controlled by React state                      |
| **Uncontrolled Component** | Form controlled by DOM                              |
| **Props**                  | Pass data from Parent → Child                       |

### 🧠 Easy Memory Trick

```text
Bootstrap → UI
useRef → DOM Reference
Controlled → React State
Uncontrolled → DOM
Props → Parent to Child
```
