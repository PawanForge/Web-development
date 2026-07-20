

✅ Code

import React, { useTransition } from "react";

export default function App() {
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <>
      <h1>useTransition Hook</h1>
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </>
  );
}


---

🔹 Simple Explanation (Step-by-Step)

1️⃣ import

Imports React and useTransition hook.
👉 Type: Module Import


---

2️⃣ function App()

Creates a React functional component.
👉 Type: Component Declaration


---

3️⃣ useTransition()

const [pending, startTransition] = useTransition();

Returns:

pending → Boolean (true while transition runs)

startTransition → Function to mark low-priority updates


👉 Type: React Hook (State Management)


---

4️⃣ handleButton

const handleButton = () => { ... }

Runs when button is clicked.
👉 Type: Event Handler


---

5️⃣ startTransition

startTransition(() => { ... });

Marks code inside as low priority (non-urgent).
👉 Type: Concurrent UI Update


---

6️⃣ setTimeout with Promise

await new Promise(...)

Waits 2 seconds (simulates API call).
👉 Type: Asynchronous Operation


---

7️⃣ <button disabled={pending}>

If pending = true → button disabled

If pending = false → button enabled


👉 Type: Conditional Rendering


---

🔄 What Happens When You Click?

1. Button clicked


2. startTransition runs


3. pending = true


4. Button disables


5. After 2 sec → pending = false


6. Button enables




---

🎯 Purpose of useTransition

Used when:

Updating large lists

Heavy rendering

Filtering/searching big data


It keeps UI responsive.


---

🏁 Final Summary

Your code demonstrates:

Event handling

Async operation

React concurrent feature

Conditional UI update

