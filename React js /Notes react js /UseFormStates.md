

🔵 PART 1: useFormState


---

✅ What is useFormState?

useFormState is a React hook that:

Handles form submission

Stores the result of the form action

Automatically updates UI

Reduces manual state handling


It replaces:

useState

onSubmit

preventDefault

Manual state updates



---

✅ Syntax

const [state, action] = useFormState(actionFunction, initialState);

It returns:

state → Latest returned value from action

action → Attach this to <form action={action}>



---

🔵 Detailed Example: Login Form with Validation

import React from "react";
import { useFormState } from "react-dom";

// 1️⃣ Action function
async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Validation
  if (!email || !password) {
    return { error: "All fields are required", success: "" };
  }

  // Fake API delay
  await new Promise((res) => setTimeout(res, 2000));

  return { success: "Login Successful!", error: "" };
}

export default function App() {
  // 2️⃣ Hook
  const [state, action] = useFormState(loginAction, {
    error: "",
    success: "",
  });

  return (
    <div>
      <h2>Login Form</h2>

      <form action={action}>
        <input type="email" name="email" placeholder="Enter Email" />
        <br /><br />

        <input type="password" name="password" placeholder="Enter Password" />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {/* 3️⃣ Display result */}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}
    </div>
  );
}


---

🔎 Step-by-Step Execution

1️⃣ User clicks Submit
2️⃣ loginAction runs
3️⃣ It receives:

prevState

formData


4️⃣ It validates input
5️⃣ Returns new state
6️⃣ React updates state
7️⃣ UI re-renders automatically


---

🎯 Why Use useFormState?

✔ Cleaner code
✔ Automatic state updates
✔ Works with async actions
✔ Good for validation
✔ Good for server actions


---

🔵 PART 2: useFormStatus


---

✅ What is useFormStatus?

useFormStatus tells you:

Is the form submitting?

Is it pending?

Is it loading?


It is mainly used to:

Disable buttons

Show loading text

Show spinner



---

⚠️ Important Rule

useFormStatus must be used:

Inside a child component

That is inside the <form>


It will NOT work outside the form.


---

🔵 Example: useFormState + useFormStatus

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

// Action
async function submitAction(prevState, formData) {
  const name = formData.get("name");

  await new Promise((res) => setTimeout(res, 2000));

  return { message: `Welcome ${name}` };
}

// Submit Button Component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function App() {
  const [state, action] = useFormState(submitAction, {
    message: "",
  });

  return (
    <div>
      <h2>Form with Loading State</h2>

      <form action={action}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br /><br />

        <SubmitButton />
      </form>

      <p>{state.message}</p>
    </div>
  );
}


---

🔎 What Happens Here?

When button is clicked:

1️⃣ Form submits
2️⃣ pending becomes true
3️⃣ Button shows "Submitting..."
4️⃣ After action completes → pending becomes false
5️⃣ Message updates


---

🔵 Difference Between Hooks

Feature	useFormState	useFormStatus

Stores result	✅ Yes	❌ No
Tracks loading	❌ No	✅ Yes
Used in parent	✅ Yes	❌ No
Used in child inside form	❌ Not required	✅ Required



---

🔵 Comparison with Old React Way

Old Way:

useState()
onSubmit()
preventDefault()
setLoading()
setError()

More manual code.


---

New Way:

useFormState()
useFormStatus()

Cleaner and automatic.


---

🔵 When NOT to Use These

❌ If using React 18 normal setup
❌ If using Vite without React 19
❌ If not using form actions


---

🎯 Final Summary

useFormState

Manages form result state

Replaces manual useState for forms


useFormStatus

Tells you if form is submitting

Used for loading UI 
