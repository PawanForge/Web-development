
We will learn:

1. ✅ useMemo – Syntax + Simple Explanation


2. ✅ useCallback – Syntax + Simple Explanation


3. ✅ Difference between both


4. ✅ Simple real example




---

🔵 1. useMemo

✅ What is useMemo?

useMemo is used to remember (cache) a calculated value
So React does NOT calculate it again and again on every render.

👉 It is used to optimize performance.


---

✅ Syntax

import { useMemo } from "react";

const memoizedValue = useMemo(() => {
   return someExpensiveCalculation();
}, [dependency]);

Structure meaning:

First parameter → function (calculation)

Second parameter → dependency array

It runs again ONLY when dependency changes



---

✅ Simple Example

Without useMemo:

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const double = count * 2; // recalculates every render

  return (
    <div>
      <h1>{double}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

👉 Even when typing in input, double recalculates.


---

✅ Now With useMemo

import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // only runs when count changes

  return (
    <div>
      <h1>{double}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

👉 Now typing in input does NOT recalculate double.


---

🧠 Simple Meaning

useMemo = "Remember this value unless dependency changes"


---

🔵 2. useCallback

✅ What is useCallback?

useCallback is used to remember a function
So React does NOT recreate function on every render.

👉 Mostly used when passing function to child component.


---

✅ Syntax

import { useCallback } from "react";

const memoizedFunction = useCallback(() => {
   // function logic
}, [dependency]);


---

✅ Problem Without useCallback

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <Child onClick={handleClick} />
  );
}

👉 Every render → new function created
👉 Child component re-renders unnecessarily


---

✅ With useCallback

import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // function will not recreate

  return (
    <Child onClick={handleClick} />
  );
}

👉 Function will stay same
👉 Child will not re-render unnecessarily


---

🧠 Simple Meaning

useCallback = "Remember this function unless dependency changes"


---

🔵 Difference Between useMemo and useCallback

Feature	useMemo	useCallback

Stores	Value	Function
Returns	Calculated result	Function
Use for	Heavy calculations	Passing functions to child
Improves	Calculation performance	Prevents re-render



---

🔵 Very Easy Trick to Remember

useMemo → M → Memory → Value

useCallback → Callback → Function



---

🔵 When Should You Use?

Use ONLY when:

✔️ Heavy calculation
✔️ Child re-render issue
✔️ Performance optimization

❌ Do NOT use everywhere
It can make code complex.


---

🔥 Real Practical Example (Important for Interview)

const filteredList = useMemo(() => {
  return items.filter(item => item.includes(search));
}, [items, search]);

👉 Filtering large list
👉 Prevents unnecessary recalculation


---

🔥 Final Short Summary

useMemo → Caches value

useCallback → Caches function

Both are performance optimization hooks

Both depend on dependency array

