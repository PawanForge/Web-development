# 📘 React JS — `useTransition` Hook & Pure Components

---

## 1️⃣ `useTransition` Hook — React 18+

### 🔹 What is `useTransition`?

`useTransition` is a React Hook used to mark **non-urgent state updates** as a transition.

It helps keep the UI **responsive** when an update causes heavy rendering.

### Common Uses

* Large list rendering
* Searching / filtering
* UI updates after data changes
* Showing a pending/loading state

---

### 🔹 Why Use `useTransition`?

**Without `useTransition`:**

```text
Heavy Update
     ↓
UI becomes slow
     ↓
Button / Typing may feel delayed
```

**With `useTransition`:**

```text
Urgent Update → Runs immediately ⚡
Non-Urgent Update → Runs as transition
                         ↓
                    isPending
                         ↓
                  Show Loading UI
```

---

### 🔹 Syntax

```jsx
import { useTransition } from "react";

const [isPending, startTransition] = useTransition();
```

| Term                | Meaning                            |
| ------------------- | ---------------------------------- |
| `isPending`         | `true` while transition is pending |
| `startTransition()` | Marks state updates as non-urgent  |

---

### 🔹 Example

```jsx
import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleButton() {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  }

  return (
    <div>
      <h2>useTransition Hook</h2>

      {isPending && <p>Loading...</p>}

      <button
        onClick={handleButton}
        disabled={isPending}
      >
        {isPending ? "Please Wait..." : "Click Me"}
      </button>

      <h3>Count: {count}</h3>
    </div>
  );
}

export default App;
```

> ⚠️ **Important:** `startTransition()` does **not** make `setTimeout` or other asynchronous work faster. It tells React that the **state update inside it is non-urgent**. The `isPending` state is mainly useful for React transition work, such as expensive rendering.

---

### 🔹 Purpose

| Problem               | `useTransition` Solution        |
| --------------------- | ------------------------------- |
| UI feels unresponsive | Keeps urgent updates responsive |
| Expensive rendering   | Marks update as non-urgent      |
| Need pending UI       | Provides `isPending`            |

### 🧠 Remember

> **`useTransition` = Keep urgent UI responsive while React handles non-urgent rendering.**

---

# 2️⃣ Keep Components Pure

### 🔹 What is a Pure Component?

A pure React component should:

* Use its **props and state** as inputs
* Not modify outside data during rendering
* Produce predictable output for the same inputs
* Avoid side effects during rendering

### Simple Formula

```text
Same Input
    ↓
Same Output
```

---

### 🔹 Why Keep Components Pure?

```text
Pure Component
      ↓
Predictable UI
      ↓
Easy Debugging
      ↓
Reusable Code
```

If a component changes external data during rendering, it can cause:

* Unexpected UI behavior
* Difficult debugging
* Unpredictable results

---

## 🔹 Parent → Child Using Props

### Parent

```jsx
function App() {
  const count = 3;

  return (
    <>
      <h1>Keeping Components Pure</h1>
      <Cup count={count} />
    </>
  );
}

export default App;
```

### Child

```jsx
function Cup({ count }) {
  return (
    <h2>
      We have {count} guests and need to make {count} cups of tea.
    </h2>
  );
}

export default Cup;
```

Here, `count` is passed from **Parent → Child** through props.

---

### 🔹 Data Flow in React

```text
Parent
   │
   │ Props
   ▼
Child
```

React generally follows **one-way data flow**.

The child should **not directly modify the parent's props**.

If the child needs to request a change, the parent can pass a **function as a prop**.

```text
Parent State
     ↓
Function as Prop
     ↓
Child calls Function
     ↓
Parent updates State
```

---

### 🔹 Benefits of Pure Components

| Benefit        | Reason                                |
| -------------- | ------------------------------------- |
| Easy Debugging | Fewer unexpected side effects         |
| Reusable       | Predictable behavior                  |
| Maintainable   | Clear data flow                       |
| Predictable UI | Same inputs produce consistent output |

---

# 🧠 Final Quick Revision

| Topic               | Main Goal                                          |
| ------------------- | -------------------------------------------------- |
| `useTransition`     | Keep UI responsive during non-urgent React updates |
| `isPending`         | Shows transition pending status                    |
| `startTransition()` | Marks state updates as non-urgent                  |
| Pure Components     | Predictable and side-effect-free rendering         |
| Props               | Pass data Parent → Child                           |
| React Data Flow     | One-way: Parent → Child                            |

### ⭐ Easy Memory Trick

```text
useTransition
    ↓
Smooth UI

Pure Components
    ↓
Predictable UI

Props
    ↓
Parent → Child
```
