
---

📌 1️⃣ Why {} Braces Are Used in React?

React uses JSX (JavaScript XML).

In JSX:

HTML is written inside JavaScript

To use JavaScript inside HTML, we must use {}



---

✅ Rule of JSX

<h1>{variable}</h1>

✔ {} tells React:

> “This is JavaScript. Execute it.”



Without {}:

<h1>variable</h1>

It prints the word variable, not its value.


---

✅ Why Double Braces {{}} in Inline Styling?

Example:

<div style={{ color: "red" }}>

Breakdown:

First {} → JSX says: JavaScript starts here

Second {} → JavaScript object


Because React expects style as an object, not a string.

React style syntax:

style = { JavaScript Object }

So it becomes:

style={{ property: "value" }}


---

📌 2️⃣ Different Methods of Styling in React

React mainly uses:

1. Inline Styling


2. External CSS


3. CSS Modules


4. Conditional/Dynamic Styling (Advanced)


5. CSS Frameworks (Bootstrap, Tailwind)




---

🔹 1️⃣ Inline Styling

✅ Implementation

function App() {
  const style = {
    backgroundColor: "blue",
    color: "white",
    padding: "20px"
  };

  return <div style={style}>Inline Style</div>;
}

Or directly:

<div style={{ color: "red" }}>Hello</div>


---

✅ Why Use Inline?

✔ Dynamic styles (based on state/props)
✔ Small components
✔ Quick styling


---

❌ Limitations

No hover effect

No media queries

Not reusable



---

🔹 2️⃣ External CSS

✅ Implementation

📁 App.css

.box {
  background-color: green;
  color: white;
  padding: 20px;
}

📁 App.js

import "./App.css";

function App() {
  return <div className="box">External CSS</div>;
}


---

✅ Why Use External CSS?

✔ Reusable
✔ Clean separation of concerns
✔ Better for large styling


---

❌ Limitation

Global scope

Class name conflicts possible



---

🔹 3️⃣ CSS Modules

✅ Implementation

📁 App.module.css

.box {
  background-color: purple;
  color: white;
  padding: 20px;
}

📁 App.js

import styles from "./App.module.css";

function App() {
  return <div className={styles.box}>CSS Module</div>;
}


---

✅ Why Use CSS Modules?

✔ Local scope
✔ No naming conflicts
✔ Best for large projects


---

🔹 4️⃣ Conditional (Dynamic) Styling

Used when styling changes based on condition.

function App() {
  const isActive = true;

  return (
    <div style={{ color: isActive ? "green" : "red" }}>
      Conditional Styling
    </div>
  );
}

✔ Very powerful
✔ Used with state


---

📌 3️⃣ Important Styling Rules in React

Rule	Explanation

class ❌	React uses className
CSS property names	camelCase (backgroundColor)
Style value	Usually string ("20px")
JavaScript inside JSX	Always {}



---

📌 4️⃣ Why React Uses Object for Style?

In normal HTML:

<div style="color:red"></div>

But React is JavaScript-based.

So style must be:

<div style={{ color: "red" }}>

Because:

React treats styles as JavaScript objects

Makes dynamic styling easier

Improves performance



---

📌 5️⃣ Quick Comparison

Feature	Inline	External	Module

Scope	Component	Global	Local
Reusable	❌	✔	✔
Conflict Safe	✔	❌	✔
Dynamic	✔	Limited	✔



---

🔥 Final Summary

✔ {} → Used to write JavaScript inside JSX
✔ {{}} → Used for inline styling (JSX + Object)
✔ Inline → Small & dynamic styles
✔ External → Reusable global styles
✔ CSS Module → Safe component-based styling
✔ Conditional styling → Based on state
