# 📘 Custom Hooks in React

---

## 🔹 What is a Custom Hook?

A **Custom Hook** is a **JavaScript function** that uses one or more React Hooks.

It:

* Starts with **`use`**
* Reuses logic in multiple components
* Makes code clean and reusable

### Examples

* `useToggle()`
* `useFetch()`
* `useLocalStorage()`
* `useAuth()`

---

## 🔹 Why Do We Need Custom Hooks?

Without a Custom Hook:

```jsx
const [show, setShow] = useState(true);

const toggle = () => setShow(!show);
```

If this logic is needed in many components, we have to write it again and again.

With a Custom Hook:

```jsx
const [show, toggle] = useToggle(true);
```

✅ Less code
✅ Clean code
✅ Reusable logic

---

## 🔹 Structure of a Custom Hook

```jsx
const useCustom = () => {
  // Hooks
  // Logic

  return;
};
```

---

# 📁 Example – `useToggle` Hook

```jsx
import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(newValue) {
    if (typeof newValue === "boolean") {
      setValue(newValue);
    } else {
      setValue((prev) => !prev);
    }
  }

  return [value, toggleValue];
};

export default useToggle;
```

---

## 🔹 How to Use

```jsx
const [show, toggleShow] = useToggle(true);
```

| Returned Value | Meaning                  |
| -------------- | ------------------------ |
| `show`         | Current state            |
| `toggleShow`   | Function to update state |

---

## 🔹 Ways to Use

```jsx
toggleShow();
```

➡ Toggle value

```text
true → false
false → true
```

---

```jsx
toggleShow(true);
```

➡ Set value to **true**

---

```jsx
toggleShow(false);
```

➡ Set value to **false**

---

## 📁 App.jsx Example

```jsx
import useToggle from "./useToggle";

function App() {

  const [show, toggleShow] = useToggle(true);

  return (
    <>
      <button onClick={toggleShow}>
        Toggle
      </button>

      <button onClick={() => toggleShow(true)}>
        Show
      </button>

      <button onClick={() => toggleShow(false)}>
        Hide
      </button>

      {show && <h1>Hello World</h1>}
    </>
  );
}

export default App;
```

---

## 🔹 How It Works?

```text
Button Click
      ↓
toggleShow()
      ↓
useToggle Hook
      ↓
setValue()
      ↓
State Updates
      ↓
Component Re-renders
      ↓
UI Updates
```

---

## 🔹 Rules

✅ Hook name must start with **`use`**

✅ Can be used inside:

* React Components
* Custom Hooks

❌ Cannot be used inside normal JavaScript functions.

---

## 🔹 Advantages

| Benefit          | Reason                      |
| ---------------- | --------------------------- |
| Reusable         | Use the same logic anywhere |
| Less Code        | No repeated logic           |
| Easy to Read     | Cleaner components          |
| Easy to Maintain | Update logic in one place   |

---

## 🧠 Remember

> **Custom Hook = Reuse Logic, Not UI**

```text
Same Logic
     ↓
Custom Hook
     ↓
Use in Multiple Components
```

### ⭐ One-Line Definition

> **A Custom Hook is a JavaScript function that starts with `use` and uses React Hooks to share reusable logic between components.**
