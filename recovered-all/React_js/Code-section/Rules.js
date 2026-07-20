

✅ Rules of Hooks in React JS

React has 2 main rules for hooks.
These rules exist so React can track state correctly.


---

🔹 Rule 1: Call Hooks Only at the Top Level

❌ What NOT to do

Do not call hooks:

inside if

inside loops

inside functions

inside conditions


❌ Wrong Example

function App() {
  if (true) {
    const [count, setCount] = useState(0); // ❌ Wrong
  }
  return <div>Hello</div>;
}

❓ Why this is wrong?

React assigns state based on order of hooks.
If hooks are inside conditions, the order can change → React gets confused 😵


---

✅ Correct Example

function App() {
  const [count, setCount] = useState(0); // ✅ Always on top

  if (count > 0) {
    console.log("Count is positive");
  }

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

📌 Rule summary:

> Always call hooks at the top level of your component or custom hook.




---

🔹 Rule 2: Call Hooks Only in React Functions

You can call hooks only inside: ✅ React function components
✅ Custom hooks


---

❌ Wrong Example (Normal JS function)

function showCount() {
  const [count, setCount] = useState(0); // ❌ Wrong
}

🚫 Hooks do not work in normal JS functions.


---

✅ Correct Example (React Component)

function Counter() {
  const [count, setCount] = useState(0); // ✅ Correct
  return <h1>{count}</h1>;
}


---

✅ Correct Example (Custom Hook)

function useCounter() {
  const [count, setCount] = useState(0); // ✅ Correct
  return [count, setCount];
}


---

🔹 Rule 3: Custom Hooks Must Start with use

❌ Wrong

function toggle() {
  const [value, setValue] = useState(true);
}

✅ Correct

function useToggle() {
  const [value, setValue] = useState(true);
}

📌 React uses the use prefix to recognize hooks.


---

🔹 Rule 4: Do Not Call Hooks Inside Event Handlers

❌ Wrong

<button onClick={() => {
  const [count, setCount] = useState(0); // ❌ Wrong
}}>
  Click
</button>

✅ Correct

function App() {
  const [count, setCount] = useState(0); // ✅ Hook at top

  return (
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>
  );
}


---

🔹 Rule 5: Same Order on Every Render (Important Concept)

Hooks must run in the same order every time.

❌ Wrong

function App({ isLoggedIn }) {
  if (isLoggedIn) {
    useEffect(() => {
      console.log("Logged in");
    }, []);
  }
}

✅ Correct

function App({ isLoggedIn }) {
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Logged in");
    }
  }, [isLoggedIn]);
}


---

🧠 Why These Rules Exist?

Because React:

tracks hooks by call order

not by variable name


Breaking rules = ❌ bugs + ❌ wrong state


---

💼 Interview One-Line Answer

> Hooks must be called at the top level and only inside React function components or custom hooks to maintain consistent state behavior.


