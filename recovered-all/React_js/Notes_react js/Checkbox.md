# Checkbox in React

---

# 1. What is a Checkbox in React?

A **checkbox** is a form input element that allows users to select **one or multiple options**.

In React, checkboxes are commonly handled using:

```text
┌─────────────────────────────────┐
│       Checkbox Handling         │
├─────────────────────────────────┤
│ ✔ onChange event                │
│ ✔ event.target.checked          │
│ ✔ React State (useState)        │
└─────────────────────────────────┘
```

### Example

```jsx
<input type="checkbox" />
```

---

# 2. Why Do We Use Checkboxes?

Checkboxes are used when users can select **multiple options** from a list.

### Common Use Cases

| Use Case          | Example                   |
| ----------------- | ------------------------- |
| 💻 Skills         | Java, React, Node         |
| 🎯 Hobbies        | Reading, Gaming, Music    |
| ⚙️ Features       | Notifications, Dark Mode  |
| 📝 Preferences    | Email Updates, SMS Alerts |
| 📋 Form Selection | Multiple categories       |

### Example

```text
☑ Java
☑ React
☐ Node
```

Here, the user has selected **Java** and **React**.

---

# 3. Checkbox Attributes

The following attributes are commonly used with checkboxes:

| Attribute         | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `type="checkbox"` | Creates a checkbox                           |
| `value`           | Stores the value represented by the checkbox |
| `checked`         | Controls whether the checkbox is selected    |
| `onChange`        | Detects changes to the checkbox              |
| `id`              | Gives the checkbox a unique identifier       |
| `htmlFor`         | Connects a `<label>` with an input           |

### Example

```jsx
<input
  type="checkbox"
  id="java"
  value="Java"
/>

<label htmlFor="java">
  Java
</label>
```

### Relationship

```text
┌───────────────┐
│   Checkbox    │
│  id="java"    │
└───────┬───────┘
        │
        │ htmlFor="java"
        ▼
┌───────────────┐
│     Label     │
│     Java      │
└───────────────┘
```

Clicking the label will also select the associated checkbox.

---

# 4. Simple Checkbox Example

```jsx
<input
  type="checkbox"
  id="java"
  value="Java"
/>

<label htmlFor="java">
  Java
</label>
```

### Output

```text
☐ Java
```

When the user clicks the checkbox:

```text
☑ Java
```

---

# 5. What is `event.target.checked`?

`event.target.checked` tells us whether the checkbox is currently selected.

It returns a **Boolean value**:

```text
true  → Checkbox is checked
false → Checkbox is unchecked
```

### Example

```jsx
const checked = event.target.checked;
```

### Visual Representation

```text
┌───────────────────────────────┐
│     event.target.checked      │
├───────────────────────────────┤
│                               │
│   ☑ Checked    → true         │
│                               │
│   ☐ Unchecked  → false        │
│                               │
└───────────────────────────────┘
```

👉 `event.target.checked` is especially useful when adding or removing checkbox values from React state.

---

# 6. Handling Checkbox Using React State

React state is used to manage checkbox selections because the selected values can change dynamically.

### Why Use State?

```text
┌───────────────────────────────────┐
│          React State              │
├───────────────────────────────────┤
│ ✔ Stores selected values          │
│ ✔ Updates dynamically             │
│ ✔ Controls checkbox selection     │
│ ✔ Makes form submission easier    │
└───────────────────────────────────┘
```

For multiple checkboxes, an **array** is commonly used to store selected values.

---

# 7. Skills Selection Example

Suppose we have three skills:

```text
☐ Java
☐ React
☐ Node
```

The user can select multiple skills.

For example:

```text
☑ Java
☑ React
☐ Node
```

The state will contain:

```jsx
["Java", "React"]
```

---

## Step 1: Import `useState`

```jsx
import { useState } from "react";
```

---

## Step 2: Create State

```jsx
const [skills, setSkills] = useState([]);
```

### Explanation

| Part        | Purpose                         |
| ----------- | ------------------------------- |
| `skills`    | Stores selected skills          |
| `setSkills` | Updates the selected skills     |
| `[]`        | Initial state is an empty array |

### Why an Array?

An array is used because **multiple checkbox values can be selected at the same time**.

```text
skills
  │
  ├── "Java"
  ├── "React"
  └── "Node"
```

---

# 8. Checkbox JSX Structure

A checkbox can be created using:

```jsx
<input
  type="checkbox"
  value="Java"
  onChange={handleSkills}
/>

<label>
  Java
</label>
```

### Complete Structure

```text
┌──────────────────────────────┐
│        Checkbox Input        │
├──────────────────────────────┤
│ type="checkbox"              │
│ value="Java"                 │
│ onChange={handleSkills}      │
└──────────────┬───────────────┘
               │
               ▼
       User Checks Box
               │
               ▼
        handleSkills()
```

---

# 9. Handling Checkbox Change

The `handleSkills` function is responsible for:

```text
┌───────────────────────────────┐
│       handleSkills()          │
├───────────────────────────────┤
│                               │
│  ☑ Checkbox checked           │
│       ↓                       │
│  Add value to array           │
│                               │
│  ☐ Checkbox unchecked         │
│       ↓                       │
│  Remove value from array      │
│                               │
└───────────────────────────────┘
```

### Core Logic

```jsx
const handleSkills = (event) => {
  const value = event.target.value;
  const checked = event.target.checked;

  if (checked) {
    setSkills([...skills, value]);
  } else {
    setSkills(skills.filter((item) => item !== value));
  }
};
```

---

# 10. How This Logic Works

## Case 1: Checkbox is Checked ✅

Suppose the current state is:

```jsx
skills = ["Java"];
```

The user checks **React**.

The code runs:

```jsx
setSkills([...skills, value]);
```

### Step-by-Step

```text
Old Array
["Java"]
    │
    ▼
Copy Old Values
[...skills]
    │
    ▼
Add New Value
"React"
    │
    ▼
New Array
["Java", "React"]
```

### Result

```text
☑ Java
☑ React
☐ Node
```

State:

```jsx
["Java", "React"]
```

---

## Case 2: Checkbox is Unchecked ❌

Suppose the current state is:

```jsx
skills = ["Java", "React"];
```

The user unchecks **Java**.

The code runs:

```jsx
setSkills(
  skills.filter((item) => item !== value)
);
```

### Step-by-Step

```text
Old Array
["Java", "React"]
       │
       ▼
Remove "Java"
       │
       ▼
New Array
["React"]
```

### Result

```text
☐ Java
☑ React
☐ Node
```

State:

```jsx
["React"]
```

---

# 11. Complete Working Example

```jsx
import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h1>Select Skills</h1>

      <input
        type="checkbox"
        value="Java"
        onChange={handleSkills}
      />
      Java
      <br />

      <input
        type="checkbox"
        value="React"
        onChange={handleSkills}
      />
      React
      <br />

      <input
        type="checkbox"
        value="Node"
        onChange={handleSkills}
      />
      Node
      <br />

      <h3>Selected Skills:</h3>

      {skills.join(", ")}
    </div>
  );
}

export default Skills;
```

---

# 12. Complete Working Flow

```text
             User Selects Checkbox
                      │
                      ▼
              onChange Event
                      │
                      ▼
          event.target.value
                      │
                      +
          event.target.checked
                      │
                      ▼
              handleSkills()
                      │
            ┌─────────┴─────────┐
            │                   │
            ▼                   ▼
        checked             unchecked
            │                   │
            ▼                   ▼
     Add value             Remove value
     to array              from array
            │                   │
            └─────────┬─────────┘
                      ▼
                setSkills()
                      │
                      ▼
               State Updates
                      │
                      ▼
              UI Re-renders
```

---

# 13. Purpose of Using Array State for Checkboxes

Using an array to store selected checkbox values provides several benefits:

```text
┌────────────────────────────────────┐
│        Array State Benefits        │
├────────────────────────────────────┤
│                                    │
│ ✔ Store multiple values            │
│                                    │
│ ✔ Add values dynamically           │
│                                    │
│ ✔ Remove values dynamically        │
│                                    │
│ ✔ Easy form submission             │
│                                    │
│ ✔ Easy backend data handling       │
│                                    │
│ ✔ Suitable for real-world forms   │
│                                    │
└────────────────────────────────────┘
```

### Example State

```jsx
const [skills, setSkills] = useState([]);
```

Possible state:

```jsx
["Java", "React", "Node"]
```

---

# 14. Controlled Checkbox Component

A checkbox is **controlled** when React state determines whether the checkbox is checked.

For example:

```jsx
<input
  type="checkbox"
  checked={skills.includes("Java")}
/>
```

Here:

```jsx
skills.includes("Java")
```

returns:

```text
true  → Java checkbox is checked
false → Java checkbox is unchecked
```

### Visual Flow

```text
┌───────────────────────┐
│     React State       │
│                       │
│ ["Java", "React"]     │
└───────────┬───────────┘
            │
            ▼
   skills.includes("Java")
            │
       ┌────┴────┐
       │         │
       ▼         ▼
     true      false
       │         │
       ▼         ▼
      ☑          ☐
```

### Controlled Checkbox Example

```jsx
<input
  type="checkbox"
  checked={skills.includes("Java")}
  onChange={handleSkills}
/>
```

React controls:

* Whether the checkbox is checked
* Which values are selected
* The data stored in state

---

# 15. Benefits of This Approach

| Benefit                | Explanation                                 |
| ---------------------- | ------------------------------------------- |
| ✅ Clean Logic          | Simple add/remove logic                     |
| 🚫 No Duplicate Values | Selected values can be managed in one array |
| 🔄 Easy to Manage      | State changes dynamically                   |
| 📤 Easy Submission     | Selected values are available in the array  |
| 🎯 Predictable         | React state is the source of truth          |
| ⭐ Interview Ready      | Common React checkbox pattern               |

---

# 16. Interview Questions ⭐

## Q1. How do you handle multiple checkboxes in React?

> Multiple checkboxes can be handled by storing the selected values in an array using `useState` and updating the array based on `event.target.checked`.

### Example

```jsx
const [skills, setSkills] = useState([]);
```

---

## Q2. Why do we use an array for checkbox state?

> We use an array because multiple checkbox values can be selected at the same time, so the array can store all selected values.

### Example

```jsx
["Java", "React", "Node"]
```

---

## Q3. What is the use of `event.target.checked`?

> `event.target.checked` returns a Boolean value indicating whether the checkbox is currently checked or unchecked.

```text
Checked   → true
Unchecked → false
```

---

## Q4. How do you remove an unchecked value?

Using the `filter()` method:

```jsx
setSkills(
  skills.filter((item) => item !== value)
);
```

This creates a new array without the unchecked value.

---

## Q5. How do you add a checked value?

Using the spread operator:

```jsx
setSkills([
  ...skills,
  value
]);
```

This copies the existing values and adds the new selected value.

---

# 17. One-Line Final Definition ⭐

> **In React, multiple checkboxes are commonly handled using React state and the `onChange` event, where selected values are stored in an array and `event.target.checked` determines whether a value should be added or removed.**

---

# 18. Final Summary

```text
┌──────────────────────────────────────┐
│          REACT CHECKBOX              │
├──────────────────────────────────────┤
│                                      │
│  ✔ Checkbox uses type="checkbox"    │
│                                      │
│  ✔ onChange detects changes         │
│                                      │
│  ✔ event.target.value gets value    │
│                                      │
│  ✔ event.target.checked gives       │
│    true or false                     │
│                                      │
│  ✔ Array stores multiple values     │
│                                      │
│  ✔ Checked → Add value              │
│                                      │
│  ✔ Unchecked → Remove value         │
│                                      │
│  ✔ React state manages selections   │
│                                      │
└──────────────────────────────────────┘
```

## ⭐ Remember This Logic

```text
☑ CHECKED
    ↓
Add value to array
    ↓
setSkills([...skills, value])


☐ UNCHECKED
    ↓
Remove value from array
    ↓
setSkills(skills.filter(item => item !== value))
```

## ⭐ Most Important Concept

```text
Checkbox
    ↓
onChange
    ↓
event.target.checked
    ↓
Checked? ──────► Add value
    │
    └───────────► Unchecked? ──► Remove value
```

> **In short:**
> **Multiple React Checkboxes = `useState` Array + `onChange` + `event.target.checked`**
