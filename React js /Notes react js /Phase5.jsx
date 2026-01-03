
1. What is “Getting Input Field Value” in React?

Getting input field value means reading what the user types in an <input> element and storing or using it inside a React component.

React handles input values using:

Events

State (useState)



---

2. Why Do We Get Input Field Value?

Input values are required to:

Capture user data (name, email, password)

Perform form submission

Validate user input

Update UI dynamically

Clear or reset input fields



---

3. Two Ways to Get Input Value in React

1️⃣ Using Event Only (Temporary use)

2️⃣ Using State (useState) – Recommended


---

4. Method 1: Using onChange Event Only

What This Does

Reads input value directly from the event

Does not store the value permanently


Example

function App() {
  return (
    <div>
      <h1>Get Input Field Value</h1>

      <input
        type="text"
        placeholder="Enter user name"
        onChange={(event) => alert(event.target.value)}
      />
    </div>
  );
}

export default App;

How It Works

onChange runs whenever the user types

event.target.value gives current input value

Value is used immediately (alert)


Limitation

❌ Value is not stored
❌ Cannot reuse or clear easily


---

5. Method 2: Using useState (Best Practice)

What is useState?

useState is a React Hook used to store and update data inside functional components.


---

6. Why Use useState for Input?

✔ Stores input value
✔ Allows UI updates
✔ Can clear/reset input
✔ Used in real-world forms


---

7. Proper Example Using useState

Code

import { useState } from "react";

function App() {
  const [val, setVal] = useState("");

  return (
    <div>
      <h1>Get Input Field Value</h1>

      <input
        type="text"
        placeholder="Enter user name"
        onChange={(event) => setVal(event.target.value)}
      />

      <h2>{val}</h2>

      <button onClick={() => setVal("")}>
        Clear Value
      </button>
    </div>
  );
}

export default App;


---

8. How This Code Works (Step-by-Step)

Step 1: Import useState

import { useState } from "react";

Step 2: Declare State

const [val, setVal] = useState("");

val → stores input value

setVal → updates value


Step 3: Capture Input Value

onChange={(event) => setVal(event.target.value)}

Step 4: Display Value

<h2>{val}</h2>

Step 5: Clear Input

<button onClick={() => setVal("")}>Clear</button>


---

9. Purpose of Using State with Input Field

✔ Two-way data binding
✔ Controlled components
✔ Real-time UI updates
✔ Form handling


---

10. Controlled Component (Important Term)

A controlled component is an input element whose value is controlled by React state.

<input value={val} onChange={...} />


---

11. Interview One-Liners ⭐

Q: How do you get input value in React?

> By using onChange event and storing the value in state using useState.



Q: Why use useState for inputs?

> To control, store, update, and reset input values.




---

12. Summary Table

Concept	Purpose

onChange	Capture input value
event.target.value	Access typed value
useState	Store input data
Controlled Input	React controls input



---

13. Final Definition (Exam Ready)

> In React, input field values are obtained using the onChange event and stored in component state using useState to create controlled components
