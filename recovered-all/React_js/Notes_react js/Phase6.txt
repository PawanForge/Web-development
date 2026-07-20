
1. What is a Controlled Component?

A Controlled Component is a React component in which form input values (like input, textarea, select) are controlled by React state instead of the DOM.

👉 The value of the input is stored in state and updated using onChange.


---

2. Why is it Called “Controlled”?

Because:

React controls the input value

Input value comes from state

Any change happens only through React


<input value={stateValue} onChange={handleChange} />


---

3. Why Do We Use Controlled Components?

Controlled components are used to:

✔ Manage form data easily
✔ Validate user input
✔ Handle multiple inputs
✔ Submit forms safely
✔ Reset / clear fields
✔ Sync UI with state

👉 All real-world React forms use controlled components


---

4. How Controlled Components Work (Flow)

1. User types in input


2. onChange event triggers


3. event.target.value is captured


4. State updates using setState


5. Input value updates automatically




---

5. Basic Controlled Component Example

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Component</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h3>{name}</h3>
    </div>
  );
}

export default App;


---

6. Explanation of Code

useState

const [name, setName] = useState("");

name → stores input value

setName → updates value


Controlled Input

Final control:

value={name}
onChange={(e) => setName(e.target.value)}


---

7. Multiple Inputs Example (Name, Email, Password)

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Controlled Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          setName("");
          setEmail("");
          setPassword("");
        }}
      >
        Clear
      </button>

      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
}

export default App;


---

8. Purpose of onChange in Controlled Components

Captures user input

Updates state

Keeps input & UI synchronized


onChange={(e) => setValue(e.target.value)}


---

9. Benefits of Controlled Components

✔ Single source of truth
✔ Better form control
✔ Easy validation
✔ Predictable behavior
✔ Clean debugging


---

10. Controlled vs Uncontrolled Component

Controlled	Uncontrolled

Uses useState	Uses DOM
React controls value	Browser controls value
Recommended	Not preferred
Easy validation	Hard validation



---

11. When to Use Controlled Components?

✔ Login forms
✔ Signup forms
✔ Search inputs
✔ Dynamic forms
✔ Real-time validation


---

12. Interview One-Line Answer ⭐

> A controlled component is a form element whose value is controlled by React state using useState and onChange.




---

13. Final Summary

Controlled components use state

Input value = state value

Changes handled using onChange

Makes forms reliable & scalable
