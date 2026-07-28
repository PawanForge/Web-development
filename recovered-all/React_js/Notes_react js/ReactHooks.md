# React Hooks in React

---

# 1. What are React Hooks?

**React Hooks** are special functions introduced in **React 16.8** that allow functional components to use React features such as:

* State
* Side effects
* Context
* Refs
* Reducer logic
* Performance optimization

### Simple Definition ⭐

> **Hooks are special functions that allow functional components to use React features such as state and lifecycle-related behavior.**

---

# 2. Why Were Hooks Introduced?

Before Hooks, React applications commonly used **class components** for managing state and lifecycle methods.

### Old React — Class Components

State was managed using:

```jsx
this.state
```

Lifecycle methods included:

```jsx
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

### Problems with Class Components

```text
┌────────────────────────────────────┐
│     Problems with Class Components │
├────────────────────────────────────┤
│                                    │
│ ❌ Complex syntax                  │
│                                    │
│ ❌ this keyword confusion          │
│                                    │
│ ❌ Logic reuse was more difficult  │
│                                    │
│ ❌ Large components became complex │
│                                    │
└────────────────────────────────────┘
```

---

# 3. React After Hooks

With Hooks, we can use **functional components** to manage state and other React features.

### Modern React

```jsx
function App() {
  // Hooks can be used here
}
```

### Benefits

```text
┌────────────────────────────────────┐
│       Benefits of React Hooks      │
├────────────────────────────────────┤
│                                    │
│ ✔ Functional components            │
│                                    │
│ ✔ Cleaner code                     │
│                                    │
│ ✔ Easier state management          │
│                                    │
│ ✔ Easier logic reuse               │
│                                    │
│ ✔ Custom Hooks                     │
│                                    │
│ ✔ Better separation of logic      │
│                                    │
└────────────────────────────────────┘
```

### Important Note ⭐

> Modern React development primarily uses **function components and Hooks**. Class components are still supported, but new code commonly uses function components.

---

# 4. Purpose of React Hooks

Hooks allow functional components to:

```text
┌────────────────────────────────────┐
│          Purpose of Hooks          │
├────────────────────────────────────┤
│                                    │
│ ✔ Maintain component state         │
│                                    │
│ ✔ Handle side effects              │
│                                    │
│ ✔ Fetch data                       │
│                                    │
│ ✔ Access DOM elements              │
│                                    │
│ ✔ Use Context                      │
│                                    │
│ ✔ Manage complex state             │
│                                    │
│ ✔ Optimize performance             │
│                                    │
│ ✔ Reuse logic with Custom Hooks    │
│                                    │
└────────────────────────────────────┘
```

---

# 5. Popular React Hooks ⭐

| Hook          | Purpose                                                 |
| ------------- | ------------------------------------------------------- |
| `useState`    | Manage component state                                  |
| `useEffect`   | Synchronize with external systems / handle side effects |
| `useContext`  | Access Context data                                     |
| `useRef`      | Store mutable values and access DOM elements            |
| `useReducer`  | Manage complex state logic                              |
| `useMemo`     | Cache expensive calculation results                     |
| `useCallback` | Cache function definitions                              |
| Custom Hooks  | Reuse stateful logic                                    |

### Most Common Hooks

```text
useState
    ↓
Manage State

useEffect
    ↓
Handle Side Effects

useContext
    ↓
Access Context

useRef
    ↓
DOM / Persistent Mutable Value

useReducer
    ↓
Complex State Logic

useMemo
    ↓
Cache Calculation

useCallback
    ↓
Cache Function
```

---

# 6. What is `useEffect`?

`useEffect` is a React Hook used to **synchronize a component with an external system**.

Common examples include:

* API requests
* Timers
* Browser event listeners
* Subscriptions
* Logging
* DOM-related integrations

### Simple Definition ⭐

> **`useEffect` is a React Hook used to perform side effects and synchronize a component with external systems.**

---

# 7. What are Side Effects?

A **side effect** is an operation that interacts with something outside the component's normal rendering process.

### Examples

```text
┌────────────────────────────────────┐
│          Side Effects              │
├────────────────────────────────────┤
│                                    │
│ 🌐 API requests                    │
│                                    │
│ ⏱ Timers                           │
│                                    │
│ 🖱 Event listeners                 │
│                                    │
│ 🔔 Subscriptions                   │
│                                    │
│ 📝 Logging                         │
│                                    │
│ 🌳 DOM integrations                │
│                                    │
└────────────────────────────────────┘
```

### Example

```jsx
useEffect(() => {
  console.log("Effect executed");
}, []);
```

---

# 8. Why is `useEffect` Needed?

React rendering should primarily calculate what the UI should look like.

Side effects should be handled separately.

### Without Proper Effect Handling

```text
Render
   ↓
Side Effect
   ↓
State Update
   ↓
Render Again
   ↓
Side Effect Again
   ↓
Possible Infinite Loop
```

### With `useEffect`

```text
Component Render
      ↓
React Commits UI
      ↓
Effect Runs
      ↓
External System Interaction
```

`useEffect` allows you to control **when an effect should run** using its dependency array.

> Important: An effect is not automatically required for every piece of code that runs after rendering. If you are only calculating a value from props or state, you usually do not need `useEffect`.

---

# 9. Syntax of `useEffect`

```jsx
useEffect(() => {
  // Side effect code
}, [dependency]);
```

### Structure

```text
useEffect(
    │
    ├── Callback Function
    │      ↓
    │   Effect Logic
    │
    └── Dependency Array
           ↓
      Controls when effect
      is re-run
)
```

### Parameters

| Parameter         | Purpose                              |
| ----------------- | ------------------------------------ |
| Callback function | Contains the effect logic            |
| Dependency array  | Determines when the effect is re-run |

---

# 10. Component Lifecycle in React

A component generally goes through three major phases:

```text
┌──────────────────────────────────┐
│       React Component Lifecycle  │
├──────────────────────────────────┤
│                                  │
│ 1️⃣ Mounting                     │
│    Component appears in UI       │
│                                  │
│ 2️⃣ Updating                     │
│    State or props change         │
│                                  │
│ 3️⃣ Unmounting                   │
│    Component is removed          │
│                                  │
└──────────────────────────────────┘
```

### Lifecycle Flow

```text
Mount
  ↓
Render
  ↓
Effect
  ↓
Update
  ↓
Render
  ↓
Effect
  ↓
Unmount
  ↓
Cleanup
```

### Important Note ⭐

`useEffect` can be used to synchronize with external systems during the component's lifetime, and its cleanup function can run when dependencies change or when the component unmounts.

It is better to think of `useEffect` as **synchronization with external systems** rather than simply a direct replacement for every class lifecycle method.

---

# 11. Types of `useEffect` — VERY IMPORTANT ⭐

The behavior of `useEffect` depends mainly on its **dependency array**.

---

## ✅ 1. `useEffect` Without Dependency Array

```jsx
useEffect(() => {
  console.log("Effect runs after every render");
});
```

### Behavior

The effect runs after **every completed render**.

```text
Initial Render
      ↓
Effect Runs
      ↓
State Update
      ↓
Re-render
      ↓
Effect Runs Again
```

### Use Carefully ⚠️

If the effect updates state on every render, it can cause an infinite render loop.

---

## ✅ 2. `useEffect` With Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Effect runs after initial mount");
}, []);
```

### Behavior

The effect does not re-run because of later state or prop changes.

It is commonly used for setup that should happen when the component first appears, such as:

* Initial data loading
* Setting up a subscription
* Starting a timer

### Flow

```text
Component Mounts
      ↓
Effect Runs
      ↓
State Changes
      ↓
Component Re-renders
      ↓
Effect Does Not Re-run
```

### Important Note ⭐

In React development with **Strict Mode**, you may see certain effects run an extra setup/cleanup cycle during development. This is intended to help detect bugs and does not mean the production behavior is identical.

---

## ✅ 3. `useEffect` With One Dependency

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

### Behavior

The effect runs after the initial render and whenever `count` changes.

```text
Initial Render
      ↓
Effect Runs
      ↓
count Changes
      ↓
Re-render
      ↓
Effect Runs
```

If another state changes:

```text
data Changes
      ↓
Re-render
      ↓
count Did Not Change
      ↓
Effect Does Not Re-run
```

---

## ✅ 4. `useEffect` With Multiple Dependencies

```jsx
useEffect(() => {
  console.log("Count or data changed");
}, [count, data]);
```

### Behavior

The effect re-runs when either `count` or `data` changes.

```text
       ┌──────────────┐
       │    count     │
       └──────┬───────┘
              │
              ▼
          useEffect
              ▲
              │
       ┌──────┴───────┐
       │     data     │
       └──────────────┘
```

---

## ✅ 5. `useEffect` Based on Props

Suppose a component receives:

```jsx
function Child({ value }) {
  useEffect(() => {
    console.log("Value changed");
  }, [value]);

  return <h2>{value}</h2>;
}
```

### Behavior

The effect re-runs when the `value` prop changes.

```text
Parent
  ↓
Passes value
  ↓
Child receives value
  ↓
useEffect runs
  ↓
Parent changes value
  ↓
Child receives new value
  ↓
useEffect runs again
```

---

## ✅ 6. Cleanup Function

An effect can return a cleanup function:

```jsx
useEffect(() => {
  return () => {
    console.log("Cleanup runs");
  };
}, []);
```

Cleanup is useful for undoing or stopping work started by the effect.

### Common Uses

```text
┌────────────────────────────────────┐
│          Cleanup Uses              │
├────────────────────────────────────┤
│                                    │
│ ✔ Clear timers                     │
│                                    │
│ ✔ Remove event listeners            │
│                                    │
│ ✔ Unsubscribe from subscriptions   │
│                                    │
│ ✔ Disconnect external connections  │
│                                    │
│ ✔ Abort in-flight requests         │
│                                    │
└────────────────────────────────────┘
```

### Cleanup Flow

```text
Effect Setup
     ↓
External System Connected
     ↓
Dependency Changes
     ↓
Cleanup Runs
     ↓
Effect Runs Again
```

When the component is removed:

```text
Component Unmounts
     ↓
Cleanup Runs
```

### Example — Timer Cleanup

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# 12. Cleanup Function — Important Concept ⭐

Consider:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### What Happens?

```text
Component Mounts
       ↓
setInterval() Starts
       ↓
Timer Runs
       ↓
Component Unmounts
       ↓
Cleanup Function Runs
       ↓
clearInterval()
       ↓
Timer Stops
```

Without cleanup, resources such as timers or subscriptions may continue running when they should not.

---

# 13. Basic `useEffect` Example

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count Value: {count}</h2>
      <h2>Data Value: {data}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button onClick={() => setData(data + 1)}>
        Increment Data
      </button>
    </div>
  );
}

export default Counter;
```

---

# 14. Explanation of the Example

### State 1

```jsx
const [count, setCount] = useState(0);
```

Stores the count value.

### State 2

```jsx
const [data, setData] = useState(0);
```

Stores the data value.

### Effect

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

The effect depends on `count`.

### If Count Changes

```text
Click Increment Count
        ↓
setCount()
        ↓
count Changes
        ↓
Component Re-renders
        ↓
useEffect Runs
```

### If Data Changes

```text
Click Increment Data
        ↓
setData()
        ↓
data Changes
        ↓
Component Re-renders
        ↓
count Did Not Change
        ↓
Effect Does Not Re-run
```

---

# 15. `useEffect` Dependency Array — Quick Comparison ⭐

| Code                                 | When Effect Runs                                               |
| ------------------------------------ | -------------------------------------------------------------- |
| `useEffect(() => {})`                | After every render                                             |
| `useEffect(() => {}, [])`            | After initial mount; does not re-run due to dependency changes |
| `useEffect(() => {}, [count])`       | After initial render and when `count` changes                  |
| `useEffect(() => {}, [count, data])` | After initial render and when `count` or `data` changes        |

### Easy Formula

```text
No Dependency Array
        ↓
Every Render

Empty Dependency Array []
        ↓
No Dependency Changes
        ↓
Runs After Initial Mount

[count]
        ↓
count Changes

[count, data]
        ↓
count OR data Changes
```

---

# 16. Handling Props With `useEffect`

A component can run an effect when a prop changes.

### Example

```jsx
function Child({ value }) {
  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return (
    <h2>
      Value: {value}
    </h2>
  );
}
```

### Flow

```text
Parent Changes Prop
        ↓
Child Receives New Prop
        ↓
Component Re-renders
        ↓
[value] Changed
        ↓
Effect Runs
```

---

# 17. Preventing Unnecessary Effect Runs

Use dependencies carefully.

### Example

```jsx
useEffect(() => {
  console.log("Effect");
}, [count]);
```

This effect only depends on `count`.

Changing unrelated state does not cause this effect to re-run.

### Important Tips

```text
┌────────────────────────────────────┐
│     Effect Optimization Tips       │
├────────────────────────────────────┤
│                                    │
│ ✔ Specify correct dependencies     │
│                                    │
│ ✔ Avoid unnecessary state updates  │
│                                    │
│ ✔ Keep effects focused             │
│                                    │
│ ✔ Use cleanup when required        │
│                                    │
│ ✔ Don't use useEffect for simple   │
│   derived calculations             │
│                                    │
└────────────────────────────────────┘
```

### Important Clarification ⭐

`useMemo` and `useCallback` are **performance optimization tools**. They should not automatically be added to every component to prevent re-renders.

Use them when there is a clear performance reason, such as:

* Expensive calculations
* Stable function references needed by memoized children
* Avoiding unnecessary recalculation

---

# 18. Important Rules of Hooks ⚠️

There are important rules when using Hooks.

## Rule 1️⃣ — Call Hooks at the Top Level

Hooks should be called at the top level of a component or custom Hook.

✅ Correct:

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

❌ Incorrect:

```jsx
function App() {
  if (condition) {
    const [count, setCount] = useState(0);
  }

  return <h1>Hello</h1>;
}
```

---

## Rule 2️⃣ — Do Not Call Hooks Inside Loops

❌ Incorrect:

```jsx
for (let i = 0; i < 5; i++) {
  useState(0);
}
```

Hooks must always be called in the same order on every render.

---

## Rule 3️⃣ — Do Not Call Hooks Inside Conditions

❌ Incorrect:

```jsx
if (isLoggedIn) {
  useEffect(() => {
    console.log("Logged in");
  }, []);
}
```

✅ Correct:

```jsx
useEffect(() => {
  if (isLoggedIn) {
    console.log("Logged in");
  }
}, [isLoggedIn]);
```

---

## Rule 4️⃣ — Hooks Can Be Used in Function Components

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

---

## Rule 5️⃣ — Custom Hooks Can Use Hooks

Custom Hooks are functions whose names conventionally start with `use`.

Example:

```jsx
function useUserData() {
  const [data, setData] = useState(null);

  // Hook logic

  return data;
}
```

---

# 19. Why Must Hooks Be Called at the Top Level?

React relies on the **consistent order of Hook calls** between renders.

Example:

```text
Render 1

useState()
useEffect()
useRef()


Render 2

useState()
useEffect()
useRef()
```

The order remains consistent.

If Hooks are conditionally called:

```text
Render 1

useState()
useEffect()


Render 2

useState()
```

React can no longer reliably associate Hook state with the correct Hook call.

### Remember ⭐

```text
Hooks
  ↓
Same Order
  ↓
Every Render
```

Therefore:

> **Never call Hooks conditionally, inside loops, or inside nested functions.**

---

# 20. `useState` vs `useEffect`

| `useState`                | `useEffect`                            |
| ------------------------- | -------------------------------------- |
| Manages state             | Handles synchronization / side effects |
| Stores component data     | Runs effect logic                      |
| Updates trigger re-render | Runs after React commits the render    |
| Example: counter value    | Example: API request                   |
| Example: form input       | Example: event listener                |

### Simple Example

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed");
}, [count]);
```

```text
useState
    ↓
Stores count

setCount()
    ↓
Updates count

useEffect
    ↓
Responds to count change
```

---

# 21. `useEffect` and API Calls

A common use of `useEffect` is loading data when a component appears.

### Example

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://example.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {
        users.map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))
      }
    </div>
  );
}

export default Users;
```

### Flow

```text
Component Mounts
       ↓
useEffect Runs
       ↓
API Request
       ↓
Data Received
       ↓
setUsers()
       ↓
State Updates
       ↓
Component Re-renders
       ↓
Users Displayed
```

---

# 22. `useEffect` Cleanup Example — Event Listener

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### Flow

```text
Component Mounts
       ↓
Add Event Listener
       ↓
Window Resize
       ↓
handleResize()
       ↓
Component Unmounts
       ↓
Remove Event Listener
```

This prevents the event listener from remaining attached unnecessarily.

---

# 23. Common Mistakes ❌

## Mistake 1: Missing Dependency

```jsx
useEffect(() => {
  console.log(count);
}, []);
```

If the effect is intended to react to changes in `count`, `count` should be included in the dependencies.

---

## Mistake 2: Infinite Loop

```jsx
useEffect(() => {
  setCount(count + 1);
});
```

Because the effect runs after every render and updates state, it can cause continuous re-renders.

---

## Mistake 3: Forgetting Cleanup

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

If the timer should stop when the component is removed, provide cleanup:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

## Mistake 4: Using `useEffect` for Derived Values

Avoid using an effect just to calculate a value from existing state or props.

❌ Unnecessary:

```jsx
useEffect(() => {
  setFullName(firstName + " " + lastName);
}, [firstName, lastName]);
```

Often better:

```jsx
const fullName = firstName + " " + lastName;
```

> Use `useEffect` when you need to synchronize with something external, not simply to derive data during rendering.

---

# 24. Interview Questions ⭐

## Q1. What are React Hooks?

> React Hooks are special functions introduced in React 16.8 that allow function components to use state and other React features.

---

## Q2. What is `useEffect`?

> `useEffect` is a React Hook used to synchronize a component with external systems and handle side effects such as API requests, timers, subscriptions, and event listeners.

---

## Q3. What is the purpose of the dependency array?

> The dependency array tells React which reactive values an effect depends on and determines when the effect should be re-run.

---

## Q4. What happens when the dependency array is empty?

```jsx
useEffect(() => {
  // effect
}, []);
```

> The effect does not re-run because of later dependency changes. It is commonly used for setup that happens when the component initially appears.

---

## Q5. What happens when there is no dependency array?

```jsx
useEffect(() => {
  // effect
});
```

> The effect runs after every completed render.

---

## Q6. What is a cleanup function?

> A cleanup function is returned from an effect to undo or stop work created by that effect, such as clearing timers, removing event listeners, or unsubscribing from subscriptions.

---

## Q7. Can Hooks be used inside conditions?

> No. Hooks must be called at the top level of function components or custom Hooks, not inside conditions, loops, or nested functions.

---

## Q8. Can Hooks be used inside loops?

> No. Hooks must be called in the same order on every render, so they should not be called inside loops.

---

## Q9. What is the difference between `useState` and `useEffect`?

> `useState` manages component state, while `useEffect` is used to synchronize the component with external systems and handle side effects.

---

## Q10. What is the difference between `useEffect` and `useMemo`?

> `useEffect` is used for synchronization and side effects, while `useMemo` is used to cache the result of a calculation for performance optimization.

---

# 25. One-Line Definitions ⭐

### React Hooks

> **React Hooks are special functions that allow function components to use state and other React features.**

### `useState`

> **`useState` is a Hook used to manage state in a function component.**

### `useEffect`

> **`useEffect` is a Hook used to synchronize a component with external systems and handle side effects.**

### Cleanup

> **A cleanup function is used to undo or stop work started by an effect when it is no longer needed.**

---

# 26. Final Summary ⭐

```text
┌──────────────────────────────────────┐
│          REACT HOOKS                 │
├──────────────────────────────────────┤
│                                      │
│ ✔ Introduced in React 16.8           │
│                                      │
│ ✔ Used mainly with function         │
│   components                         │
│                                      │
│ ✔ useState → Manage State            │
│                                      │
│ ✔ useEffect → Synchronize / Effects  │
│                                      │
│ ✔ useContext → Context Data          │
│                                      │
│ ✔ useRef → DOM / Mutable Values      │
│                                      │
│ ✔ useReducer → Complex State        │
│                                      │
│ ✔ useMemo → Cache Calculations      │
│                                      │
│ ✔ useCallback → Cache Functions     │
│                                      │
│ ✔ Custom Hooks → Reuse Logic        │
│                                      │
└──────────────────────────────────────┘
```

---

# 27. Most Important `useEffect` Concept ⭐

```text
Component Render
       ↓
React Commits UI
       ↓
useEffect Runs
       ↓
External System Interaction
       ↓
Dependency Changes
       ↓
Effect Re-runs
       ↓
Cleanup Previous Effect
       ↓
New Effect Setup
```

### Remember This ⭐

```text
useState
   ↓
Manage State


useEffect
   ↓
Synchronize with External Systems
   ↓
API / Timer / Event / Subscription


Dependency Array
   ↓
Controls Re-run Conditions


Cleanup Function
   ↓
Stops / Undoes External Work
```

> **In short:**
> **React Hooks = Special Functions for Using React Features in Function Components**
>
> **`useEffect` = Synchronize with External Systems + Manage Side Effects + Cleanup When Needed**
