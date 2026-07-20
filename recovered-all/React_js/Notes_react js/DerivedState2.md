

1️⃣ Import Section

import React,{useState} from "react";

✅ Why?

React → Required to write JSX.

useState → A React Hook used to create state in functional components.



---

2️⃣ Component Declaration

export default function AppF(){

This defines a functional component.

export default allows this component to be imported in other files.



---

3️⃣ State Variables

const [users,setUsers]=useState([]);
const [user,setUser]=useState('');

🔹 First State: users

const [users,setUsers]=useState([]);

users → Stores all entered names (array).

setUsers → Function to update users.

Initial value → [] (empty array).


👉 Purpose: Store multiple users.


---

🔹 Second State: user

const [user,setUser]=useState('');

user → Stores current input value.

setUser → Updates input value.

Initial value → '' (empty string).


👉 Purpose: Temporarily hold the input before adding to array.


---

4️⃣ handleSubmit Function

const handleSubmit=()=>{
   setUsers([...users,user]);
}

🔥 What is happening?

...users → Spread operator copies old array.

user → Adds new value at the end.


If:

users = ["Pawan"]
user = "Rahul"

After clicking:

["Pawan", "Rahul"]

✅ Why use spread operator?

Because React state should not be mutated directly.

❌ Wrong:

users.push(user)

✅ Correct:

setUsers([...users,user])


---

5️⃣ Derived State Values

Now comes the important part 👇

const Total=users.length;
const Last=users[users.length-1];
const unique=[...new Set(users)].length;

These are Derived State.

👉 Derived state means: We don’t store them in useState.
They are calculated from existing state.


---

🔹 Total Users

const Total=users.length;

Counts total users.

Example:


["Pawan","Rahul"] → 2


---

🔹 Last User

const Last=users[users.length-1];

Gets last item of array.

Example:


["A","B","C"] → C


---

🔹 Unique Users

const unique=[...new Set(users)].length;

What is Set?

Set removes duplicates.


Example:

["A","B","A"]

Step 1:

new Set(users) → {"A","B"}

Step 2:

[...new Set(users)] → ["A","B"]

Step 3:

.length → 2

👉 Purpose: Count unique names.


---

6️⃣ JSX Return Section

return(
<>

<> </> → React Fragment
Used to avoid extra <div>.


---

🔹 Display Derived State

<h2>Total user:{Total}</h2>
<h2>Last user:{Last}</h2>
<h2>unique Total Test:{unique}</h2>

Shows:

Total users

Last entered user

Unique count



---

🔹 Input Field

<input 
type="text"
onChange={(e)=>setUser(e.target.value)} 
placeholder="Enter the name"
/>

What happens?

When user types,

onChange runs,

setUser(e.target.value) updates state.


👉 This is called a controlled component.


---

🔹 Button

<button onClick={handleSubmit}>Click</button>

On click → handleSubmit() runs.

Adds user to array.



---

7️⃣ Mapping Users (There is a Mistake 🚨)

users.map((item,index)=>{
  <h4 key={index}>{index}</h4>
})

❌ Problem:

You forgot return.

Correct version:

users.map((item,index)=>(
  <h4 key={index}>{item}</h4>
))

OR

users.map((item,index)=>{
  return <h4 key={index}>{item}</h4>
})


---

🔥 Why This Is Called Derived State?

Because:

We are NOT doing this:

const [Total,setTotal]=useState(0)

Instead, we derive values from existing state:

const Total = users.length

✔ Cleaner
✔ No duplication
✔ No sync problem
✔ Best practice


---

🧠 Full Flow Summary

1. User types → user state updates.


2. Click button → users array updates.


3. React re-renders.


4. Derived values recalculate automatically.


5. UI updates.




---

🎯 Why This Pattern Is Important?

Prevents unnecessary state

Avoids bugs

Keeps logic clean

Recommended in React
