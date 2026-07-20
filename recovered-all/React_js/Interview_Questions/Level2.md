

🚀 React Interview – Level 2 (Questions with Proper Answers)

1️⃣ What is State in React?

Answer:
State is an object that stores dynamic data inside a component.
When the state changes, the component automatically re-renders to update the UI.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}


---

2️⃣ Difference between State and Props

State	Props

State stores data inside the component	Props pass data from parent to child
State can be changed	Props are read-only
Used for dynamic data	Used for communication between components



---

3️⃣ What is the useState Hook?

Answer:
useState is a React Hook used to add state in functional components.

It allows components to store and update data dynamically.

Example:

const [name, setName] = useState("Pawan");

name → state variable

setName → function to update state



---

4️⃣ What is Virtual DOM?

Answer:
Virtual DOM is a lightweight copy of the real DOM.

React first updates the Virtual DOM, compares it with the previous version (called diffing), and then updates only the changed parts in the real DOM.

Benefits:

Faster rendering

Better performance



---

5️⃣ What is useEffect Hook?

Answer:
useEffect is a React Hook used to handle side effects in a component.

Side effects include:

API calls

Timers

DOM updates

Event listeners


Example:

useEffect(() => {
  console.log("Component rendered");
}, []);

[] means the effect runs only once when the component loads.


---

6️⃣ What are Hooks in React?

Answer:
Hooks are special functions in React that allow functional components to use state and lifecycle features.

Common Hooks:

useState

useEffect

useContext

useRef


Hooks make code simpler and reusable.


---

7️⃣ What are the Rules of Hooks?

Answer:

1️⃣ Hooks must be used inside React functional components.
2️⃣ Hooks must be called at the top level of the component.
3️⃣ Hooks should not be used inside loops, conditions, or nested functions.


---

8️⃣ What is Conditional Rendering in React?

Answer:
Conditional rendering means displaying different UI based on conditions.

Example:

{isLoggedIn ? <Home /> : <Login />}

If isLoggedIn is true → show Home component
If false → show Login component


---

9️⃣ What is Event Handling in React?

Answer:
Event handling means responding to user actions like clicking a button, typing in input, etc.

Example:

function handleClick() {
  alert("Button Clicked");
}

<button onClick={handleClick}>Click</button>

React events are written in camelCase like onClick.


---

🔟 Difference between Functional Component and Class Component

Functional Component	Class Component

Simple JavaScript function	ES6 class
Uses Hooks	Uses lifecycle methods
Less code	More code
Mostly used today	Older method





These are asked in real developer interviews.
