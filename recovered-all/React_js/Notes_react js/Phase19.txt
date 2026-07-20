
🔷 What is useActionState?

useActionState is a React Hook used to handle form submission and async server-like actions easily.
It automatically manages:

previous state

form data

loading (pending) state

response (success / error)



---

🔷 Why use useActionState?

Without useActionState we write:

useState

onSubmit

preventDefault

loading state manually

error handling manually


With useActionState, React handles all this internally.


---

🔷 Syntax

const [state, action, pending] = useActionState(actionFunction, initialState);

Parameter	Meaning

state	result returned from action
action	function passed to form
pending	true while form is submitting



---

🔷 How it works?

1. User submits form


2. actionFunction(previousState, formData) runs


3. Whatever object you return becomes state


4. While submitting → pending = true




---

🔷 Example (Correct Working Code)

import { useActionState } from "react";

export default function Action() {

  const handleSubmit = async (previousState, formData) => {

    const name = formData.get("name");
    const password = formData.get("password");

    await new Promise(res => setTimeout(res, 2000)); // simulate API

    if(name && password){
      return { message: "Data Submitted Successfully", name, password };
    }
    else{
      return { error: "Please enter proper data" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {});

  return (
    <div>
      <h1>useActionState Hook in React</h1>

      <form action={action}>

        <input type="text" name="name" placeholder="Enter name" /><br/><br/>
        <input type="password" name="password" placeholder="Enter password" /><br/><br/>

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>

      </form>

      {data?.error && <p style={{color:"red"}}>{data.error}</p>}
      {data?.message && <p style={{color:"green"}}>{data.message}</p>}

      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>

    </div>
  );
}


---

🔷 Purpose of useActionState

Feature	Benefit

Form auto handling	No preventDefault
Async supported	API / server delay easily
Pending state	Loader / disable button
Cleaner code	No extra useState
Error handling	Just return error object



---

🔷 Real-world usage

Login form

Register form

Payment form

Contact form

Any form with server request



---

🔷 Interview Line

> "useActionState simplifies async form handling in React by managing form state, loading state, and returned data automatically without writing manual handlers."



