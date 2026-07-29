Here is the **same content in a short, clean, revision-friendly format** with the important concepts preserved.

# 📘 React JS — Forms, Props, `useRef`, `forwardRef` & `useFormStatus`

---

## 1️⃣ Reusable Input Component — Props

A reusable component accepts data from its parent through **props**.

### Why?

* Reduce code repetition
* Reuse the same component
* Create dynamic UI

### Example

```jsx
const UserInput = (props) => {
  return (
    <input
      type="text"
      style={props.style}
    />
  );
};

export default UserInput;
```

### Usage

```jsx
<UserInput
  style={{
    padding: "10px",
    width: "200px"
  }}
/>
```

### 🧠 Remember

```text
Parent
  ↓ Props
Reusable Child Component
```

---

# 2️⃣ Passing Function as Props

A parent can pass a **function as a prop** to a child.

### Purpose

Used for **Parent ↔ Child communication**, especially when the child needs to trigger an action defined by the parent.

### Example

```jsx
function App() {
  const displayName = (name) => {
    alert(name);
  };

  return <User onClick={displayName} />;
}

function User(props) {
  return (
    <button onClick={() => props.onClick("Pawan")}>
      Click
    </button>
  );
}
```

### Flow

```text
Parent Function
      ↓
Pass as Prop
      ↓
Child Calls Function
      ↓
Parent Function Executes
```

---

# 3️⃣ `useRef` — Uncontrolled Component

`useRef` can be used to directly access a DOM element without storing its value in React state.

### Example

```jsx
import { useRef } from "react";

function App() {
  const userRef = useRef(null);

  const getUser = () => {
    alert(userRef.current.value);
  };

  return (
    <>
      <input type="text" ref={userRef} />
      <button onClick={getUser}>
        Get User
      </button>
    </>
  );
}
```

### Remember

```text
useRef
  ↓
DOM Reference
  ↓
inputRef.current
  ↓
Access Value / Focus / DOM
```

---

# 4️⃣ Controlled Component

A **controlled component** is an input whose value is controlled by **React state**.

### Example

```jsx
const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Flow

```text
User Types
    ↓
onChange
    ↓
setName()
    ↓
React State Updates
    ↓
Component Re-renders
```

### Best For

✅ Form validation
✅ Live updates
✅ Dynamic forms
✅ React has complete control

---

# 5️⃣ Uncontrolled Component

An **uncontrolled component** stores its current value in the **DOM** rather than React state.

Usually accessed using `useRef`.

```jsx
const userRef = useRef(null);

<input
  type="text"
  ref={userRef}
/>
```

Get value:

```jsx
userRef.current.value
```

### Best For

✅ Simple forms
✅ Less state management
✅ Direct DOM access

❌ Less control than controlled components

---

# 6️⃣ `useFormStatus` — React Forms

`useFormStatus` is a React DOM hook used to get the status of a **parent form submission**.

Import:

```jsx
import { useFormStatus } from "react-dom";
```

### Example

```jsx
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
```

### Purpose

* Show loading state
* Disable submit button
* Prevent repeated clicks during submission
* Improve user experience

### Important

`useFormStatus()` must be called from a component that is **inside the `<form>`** whose status you want to track.

---

# 7️⃣ Form Submission with Promise

React form actions can be asynchronous.

```jsx
const handleSubmit = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  console.log("Form Submitted");
};

<form action={handleSubmit}>
  <input
    type="text"
    placeholder="Enter Name"
  />

  <input
    type="password"
    placeholder="Enter Password"
  />

  <SubmitButton />
</form>
```

### Working

```text
Submit Form
     ↓
handleSubmit()
     ↓
Async Operation
     ↓
pending = true
     ↓
"Submitting..."
     ↓
Operation Complete
     ↓
pending = false
     ↓
"Submit"
```

---

# 8️⃣ Controlled Login Form

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();

    console.log(name, pass);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        value={pass}
        placeholder="Enter Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
```

### Flow

```text
Input
  ↓
onChange
  ↓
useState
  ↓
React Controls Value
  ↓
onSubmit
  ↓
Form Data
```

---

# 9️⃣ Controlled vs Uncontrolled

| Feature       | Controlled              | Uncontrolled                         |
| ------------- | ----------------------- | ------------------------------------ |
| Main Tool     | `useState`              | `useRef` / DOM                       |
| Data Stored   | React State             | DOM                                  |
| Re-render     | Usually on input change | No React re-render for value changes |
| Validation    | Easy                    | More manual                          |
| React Control | Full                    | Less                                 |
| Best For      | Complex forms           | Simple forms                         |

### 🧠 Easy Trick

```text
Controlled
    ↓
React State
    ↓
useState

Uncontrolled
    ↓
DOM
    ↓
useRef
```

---

# 🔟 `forwardRef`

`forwardRef` is used to allow a **parent component to pass a ref to a child component**, so the child can expose a DOM element or other ref target.

### Why Use It?

* Focus an input from parent
* Access child DOM element
* Build reusable input components

### Example

```jsx
import { forwardRef } from "react";

const UserInput = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
    />
  );
});

export default UserInput;
```

### Parent Component

```jsx
import { useRef } from "react";
import UserInput from "./UserInput";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <UserInput ref={inputRef} />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}
```

### Working

```text
Parent
  │
  │ ref
  ▼
forwardRef()
  │
  ▼
Child Input
  │
  ▼
inputRef.current
  │
  ▼
focus()
```

> **Note:** In React 19, `ref` can be passed as a prop to function components, so `forwardRef` is no longer necessary for many new components. However, you may still see `forwardRef` in existing React code and libraries.

---

# ⚡ Final Quick Revision

| Topic                  | Main Purpose                                                                    |
| ---------------------- | ------------------------------------------------------------------------------- |
| **Props**              | Pass data Parent → Child                                                        |
| **Function as Props**  | Child triggers parent function                                                  |
| **Reusable Component** | Avoid repeated code                                                             |
| **useRef**             | Access DOM / persist mutable value without re-render                            |
| **Controlled**         | Form controlled by React state                                                  |
| **Uncontrolled**       | Form value managed by DOM                                                       |
| **useFormStatus**      | Track parent form submission status                                             |
| **forwardRef**         | Pass ref to child component, mainly for compatibility with older React patterns |

### 🧠 One-Line Memory Formula

```text
Props       → Data Transfer
Function    → Communication
useRef      → DOM Reference
Controlled  → useState
Uncontrolled→ useRef / DOM
useFormStatus → Form Pending Status
forwardRef  → Parent Ref → Child
```
