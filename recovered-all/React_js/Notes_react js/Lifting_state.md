# 📘 Lifting State Up in React JS

## 1️⃣ What is Lifting State Up?

**Lifting State Up** means moving state from a child component to their **nearest common parent** so that multiple components can share and use the same data.

### Simple Idea

```text
        Parent
     State + setState
        /       \
       ↓         ↓
   Child A     Child B
   Updates     Displays
```

---

# 2️⃣ Why Do We Need Lifting State Up?

Suppose two child components need the **same data**.

If each child has its own state:

```text
Child A → State A
Child B → State B
```

This can cause:

❌ Data mismatch
❌ Duplicate state
❌ Synchronization problems

### Solution

Move the state to the parent:

```text
          Parent
       State + setState
          /      \
         ↓        ↓
     Child A    Child B
     Updates    Receives
```

Now there is **one source of truth**.

---

# 3️⃣ How Lifting State Up Works

```text
Parent Component
       │
       │ State
       ↓
   name = ""
       │
       ├──────────────┐
       ↓              ↓
  InputBox         Display
       │              │
       │ setName()    │ name
       ↓              ↓
    Update         Show Data
       │              │
       └────── Parent ┘
```

### Main Flow

```text
1. State is created in Parent
        ↓
2. Parent passes state/setter to Child
        ↓
3. Child updates Parent state
        ↓
4. Parent re-renders
        ↓
5. Updated data goes to other Child
```

---

# 4️⃣ Complete Example

## 🔸 Parent Component — `App.jsx`

```jsx
import { useState } from "react";
import InputBox from "./InputBox";
import Display from "./Display";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Lifting State Up Example</h2>

      <InputBox setName={setName} />

      <Display name={name} />
    </div>
  );
}

export default App;
```

### What is happening?

```jsx
const [name, setName] = useState("");
```

State is now stored in the **Parent**.

* `name` → Stores the value
* `setName` → Updates the value

---

## 🔸 Child 1 — `InputBox.jsx`

```jsx
function InputBox({ setName }) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default InputBox;
```

### What happens?

User types:

```text
Pawan
```

Then:

```text
onChange
   ↓
setName("Pawan")
   ↓
Parent State Updates
```

---

## 🔸 Child 2 — `Display.jsx`

```jsx
function Display({ name }) {
  return (
    <h3>
      Your Name: {name}
    </h3>
  );
}

export default Display;
```

The `Display` component receives the updated `name` through props.

```text
Parent
name = "Pawan"
     ↓
Props
     ↓
Display
     ↓
Your Name: Pawan
```

---

# 5️⃣ What Happened Here?

| Step           | Explanation                            |
| -------------- | -------------------------------------- |
| State created  | `const [name, setName] = useState("")` |
| State location | Parent (`App`)                         |
| Input changes  | `InputBox` calls `setName()`           |
| Parent updates | `name` becomes new value               |
| Data passed    | `name` goes to `Display` as prop       |
| UI updates     | `Display` shows new name               |

---

# 6️⃣ Complete Data Flow

```text
             App (Parent)
          name + setName
             /       \
            ↓         ↓
       InputBox     Display
            │           │
            │           │
      User types      Shows name
            │
            ↓
       setName(value)
            │
            ↓
       Parent State
            │
            ↓
       Re-render
            │
            ↓
      Display Updates
```

### 🧠 Simple Example

User enters:

```text
Pawan
```

Flow:

```text
InputBox
   ↓
setName("Pawan")
   ↓
Parent State
   ↓
name = "Pawan"
   ↓
Display receives name
   ↓
Your Name: Pawan
```

---

# 7️⃣ Purpose of Lifting State Up

| Benefit                    | Reason                                      |
| -------------------------- | ------------------------------------------- |
| **Single Source of Truth** | State exists in one place                   |
| **Data Consistency**       | Components use the same data                |
| **Easy Sharing**           | Multiple children can access state          |
| **No Duplicate State**     | Avoids storing the same data multiple times |
| **Better Architecture**    | Clear Parent → Child data flow              |

---

# 8️⃣ When Should You Lift State?

Lift state up when:

✅ Two or more components need the same data.

✅ Multiple components need to stay synchronized.

✅ A child needs to update data that another child uses.

✅ You have duplicate state representing the same information.

---

# 🧠 Final Memory

> **Lifting State Up = Move shared state to the nearest common parent and pass data down through props.**

```text
State
  ↓
Common Parent
  ↓
Props
  ↓
Multiple Children
```

### ⭐ One-Line Example

```text
InputBox → updates Parent State → Display receives updated value
```

**Remember:**
**State goes UP to the common parent, data goes DOWN through props, and child components can request updates using callback functions.**
