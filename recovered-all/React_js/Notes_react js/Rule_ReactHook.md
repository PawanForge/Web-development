# 📘 Rules for React Hooks

---

## 🔹 What are Hooks?

Hooks are **special React functions** that let functional components use features like **state, effects, refs, etc.**

### Examples

* `useState()`
* `useEffect()`
* `useRef()`
* `useId()`

---

## 🔹 Naming Rule

Every Hook name **must start with `use`**.

| ✅ Correct   | ❌ Wrong  |
| ----------- | -------- |
| `useState`  | `state`  |
| `useEffect` | `effect` |
| `useRef`    | `ref`    |
| `useId`     | `id`     |

---

## 🔹 Where to Use Hooks?

Hooks should be used **only at the top level of a functional component**.

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

---

# ❗ Rules for React Hooks

---

## 1️⃣ Don't Use Hooks Inside Conditions

### ❌ Wrong

```jsx
if (isLogin) {
  const [user, setUser] = useState("");
}
```

### ✅ Correct

```jsx
const [user, setUser] = useState("");

if (isLogin) {
  console.log(user);
}
```

---

## 2️⃣ Don't Use Hooks Inside Loops

### ❌ Wrong

```jsx
for (let i = 0; i < 3; i++) {
  const [count, setCount] = useState(0);
}
```

### ✅ Correct

```jsx
const [count, setCount] = useState(0);
```

---

## 3️⃣ Don't Use Hooks After `return`

### ❌ Wrong

```jsx
return <h1>Hello</h1>;

const [data, setData] = useState("");
```

### ✅ Correct

```jsx
const [data, setData] = useState("");

return <h1>Hello</h1>;
```

---

## 4️⃣ Don't Use Hooks Inside Event Handlers

### ❌ Wrong

```jsx
function handleClick() {
  const [num, setNum] = useState(0);
}
```

### ✅ Correct

```jsx
const [num, setNum] = useState(0);

function handleClick() {
  setNum(num + 1);
}
```

---

## 5️⃣ Don't Use Hooks in Class Components

### ❌ Wrong

```jsx
class App extends Component {
  const [count, setCount] = useState(0);
}
```

### ✅ Correct

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

---

## 6️⃣ Don't Use Hooks Inside Nested Functions

### ❌ Wrong

```jsx
function helper() {
  const [value, setValue] = useState("");
}
```

### ✅ Correct

```jsx
const [value, setValue] = useState("");

function helper() {
  console.log(value);
}
```

---

## 🔹 Correct Structure

```jsx
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <input
      value={value}
      onChange={handleChange}
    />
  );
}

export default App;
```

---

## 🔹 Why These Rules?

React expects Hooks to be called **in the same order every time** a component renders.

If Hooks are used inside **conditions, loops, or functions**, their order can change, causing errors and unexpected behavior.

---

## 🧠 Easy Memory Trick

> **Hooks = Top of Functional Component Only**

```text
✅ Functional Component
   ↓
✅ Top Level
   ↓
useState()
useEffect()
useRef()

❌ Not Inside
• if
• for / while
• function
• event handler
• class component
• after return
```

### ⭐ Revision Shortcut

**Think: *Top Level Only***

If a Hook is **not at the top of a functional component**, it's probably **wrong**.
