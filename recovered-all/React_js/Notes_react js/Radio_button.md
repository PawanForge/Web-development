# Radio Button in React

---

# 1. What is a Radio Button?

A **radio button** is a form input that allows the user to select **only ONE option from a group of options**.

👉 Once one option is selected, selecting another option automatically unselects the previous option.

### Example

```text id="q4j7mv"
◉ Male
◯ Female
◯ Other
```

If the user selects **Female**:

```text id="k6x3a2"
◯ Male
◉ Female
◯ Other
```

Only one option can be selected at a time.

---

# 2. Why Do We Use Radio Buttons?

Radio buttons are used when the user must select **only one option**.

### Common Use Cases

| Use Case             | Example                         |
| -------------------- | ------------------------------- |
| 👤 Gender Selection  | Male, Female, Other             |
| 💳 Payment Method    | Card, UPI, Cash                 |
| 📦 Subscription Plan | Basic, Pro, Premium             |
| ✅ Yes / No Choice    | Yes, No                         |
| 📝 Exam Questions    | Option A, B, C, D               |
| 📋 Feedback          | Satisfied, Neutral, Unsatisfied |

### Benefits

```text id="b9w8kd"
┌───────────────────────────────────┐
│        Why Use Radio Buttons?     │
├───────────────────────────────────┤
│                                   │
│ ✔ Allows only one selection       │
│                                   │
│ ✔ Prevents multiple selections    │
│                                   │
│ ✔ Makes choices clear             │
│                                   │
│ ✔ Easy to use in forms            │
│                                   │
└───────────────────────────────────┘
```

---

# 3. Difference Between Checkbox and Radio Button

| Feature              | Checkbox                  | Radio Button                      |
| -------------------- | ------------------------- | --------------------------------- |
| **Selection**        | Multiple options          | Only one option                   |
| **State**            | Usually an array          | Usually a single value            |
| **Selection Type**   | Independent               | Group-based                       |
| **Example**          | Skills, Hobbies           | Gender, Payment Method            |
| **`name` Attribute** | Not required for grouping | Same `name` required for grouping |
| **Example State**    | `["Java", "React"]`       | `"Male"`                          |

### Simple Difference

```text id="f8xq2r"
CHECKBOX
☑ Java
☑ React
☑ Node

Multiple values can be selected.
```

```text id="m1t7yb"
RADIO BUTTON
◉ Male
◯ Female
◯ Other

Only one value can be selected.
```

### Remember ⭐

```text id="f8j9ds"
Checkbox
    ↓
Multiple Selection
    ↓
Array State

Radio Button
    ↓
Single Selection
    ↓
Single Value State
```

---

# 4. Radio Button Syntax in HTML

The basic syntax is:

```jsx id="5yq9pw"
<input
  type="radio"
  name="gender"
  value="Male"
/>

<label>
  Male
</label>
```

### Multiple Radio Buttons

```jsx id="8mj7h4"
<input
  type="radio"
  name="gender"
  value="Male"
/>

<label>Male</label>

<input
  type="radio"
  name="gender"
  value="Female"
/>

<label>Female</label>

<input
  type="radio"
  name="gender"
  value="Other"
/>

<label>Other</label>
```

### Important ⭐

All radio buttons in the same group should have the **same `name`**:

```jsx id="1n7gxa"
name="gender"
```

The `value` represents the option selected by the user.

---

# 5. Important Radio Button Attributes

| Attribute      | Purpose                                       |
| -------------- | --------------------------------------------- |
| `type="radio"` | Creates a radio button                        |
| `name`         | Groups related radio buttons                  |
| `value`        | Represents the selected option                |
| `checked`      | Controls whether the radio button is selected |
| `onChange`     | Handles selection changes                     |
| `id`           | Gives the input a unique identifier           |
| `htmlFor`      | Connects a `<label>` to an input              |

### Example

```jsx id="f3t8pc"
<input
  type="radio"
  id="male"
  name="gender"
  value="Male"
  checked={gender === "Male"}
  onChange={handleGender}
/>

<label htmlFor="male">
  Male
</label>
```

### Relationship

```text id="d9j5kp"
┌─────────────────────┐
│   Radio Input       │
│   id="male"         │
└──────────┬──────────┘
           │
           │ htmlFor="male"
           ▼
┌─────────────────────┐
│       Label         │
│       Male          │
└─────────────────────┘
```

---

# 6. Why Use State for Radio Buttons in React?

React state is used to keep track of the currently selected radio button.

### State is useful because:

```text id="r3n5zy"
┌────────────────────────────────────┐
│         React State                │
├────────────────────────────────────┤
│                                    │
│ ✔ Tracks selected option           │
│                                    │
│ ✔ Makes form submission easier     │
│                                    │
│ ✔ Helps with validation            │
│                                    │
│ ✔ Keeps UI synchronized            │
│                                    │
│ ✔ Creates a controlled component   │
│                                    │
└────────────────────────────────────┘
```

---

# 7. Creating State for Radio Button

For a radio button group, we normally use a **single state value**, not an array.

```jsx id="z6d0gr"
const [gender, setGender] = useState("");
```

### Explanation

| Part        | Purpose                     |
| ----------- | --------------------------- |
| `gender`    | Stores the selected gender  |
| `setGender` | Updates the selected gender |
| `""`        | Initial value is empty      |

### Example State

Before selection:

```jsx id="2c5m6n"
gender = ""
```

After selecting Male:

```jsx id="3d1w6k"
gender = "Male"
```

After selecting Female:

```jsx id="2o8vwp"
gender = "Female"
```

### Why Not an Array?

Because only **one option** can be selected.

```text id="p9j3hq"
Radio Group
     │
     ▼
Only One Selection
     │
     ▼
Single State Value
     │
     ▼
"Male"
```

---

# 8. Handling Radio Button Change

When the user selects a radio button, the `onChange` event is triggered.

The selected value can be accessed using:

```jsx id="d2z6bg"
event.target.value
```

### Handler Function

```jsx id="z3s6nq"
const handleGender = (event) => {
  setGender(event.target.value);
};
```

### How It Works

```text id="5lqj7m"
User Selects "Male"
        ↓
onChange Event
        ↓
event.target.value
        ↓
"Male"
        ↓
setGender("Male")
        ↓
gender = "Male"
```

---

# 9. Radio Button JSX Example

```jsx id="9j3r5b"
<input
  type="radio"
  name="gender"
  value="Male"
  onChange={handleGender}
/>

<label>
  Male
</label>
```

When the user selects **Male**:

```jsx id="x6p2ck"
event.target.value
```

returns:

```text id="8v1xj3"
"Male"
```

Then:

```jsx id="4o7m1z"
setGender("Male");
```

updates the React state.

---

# 10. Controlled Radio Button ⭐

A radio button is **controlled** when React state determines whether the radio button is selected.

### Example

```jsx id="p2r6yn"
<input
  type="radio"
  name="gender"
  value="Male"
  checked={gender === "Male"}
  onChange={handleGender}
/>
```

### Why Controlled?

```text id="b4h7sx"
┌─────────────────────────────────┐
│     Controlled Radio Button     │
├─────────────────────────────────┤
│                                 │
│ ✔ React controls selection      │
│                                 │
│ ✔ State stores selected value   │
│                                 │
│ ✔ UI stays synchronized         │
│                                 │
│ ✔ Easier validation             │
│                                 │
│ ✔ Predictable behavior          │
│                                 │
└─────────────────────────────────┘
```

---

# 11. Complete Working Example

```jsx id="w2p9ka"
import { useState } from "react";

function GenderForm() {
  const [gender, setGender] = useState("");

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <h1>Select Gender</h1>

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={handleGender}
      />
      Male

      <br />

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={handleGender}
      />
      Female

      <br />

      <input
        type="radio"
        name="gender"
        value="Other"
        checked={gender === "Other"}
        onChange={handleGender}
      />
      Other

      <h3>
        Selected Gender: {gender}
      </h3>
    </div>
  );
}

export default GenderForm;
```

---

# 12. How This Works Step-by-Step

Suppose the user clicks **Male**.

### Step 1️⃣ — User clicks radio button

```text id="r9x4mt"
◉ Male
```

### Step 2️⃣ — `onChange` is triggered

```jsx id="5j6x2b"
onChange={handleGender}
```

### Step 3️⃣ — Selected value is captured

```jsx id="8x3k9p"
event.target.value
```

Returns:

```text id="5v7n2a"
"Male"
```

### Step 4️⃣ — State is updated

```jsx id="n3k7xf"
setGender("Male");
```

### Step 5️⃣ — React re-renders the component

The UI updates based on the new state.

### Step 6️⃣ — Correct radio remains selected

```jsx id="2w8g5c"
checked={gender === "Male"}
```

Since:

```jsx id="7y4m9d"
gender === "Male"
```

is:

```text id="j8v2cx"
true
```

The Male radio button remains selected.

---

# 13. Complete Radio Button Flow

```text id="f7m2kd"
┌───────────────────────┐
│ User Clicks Radio     │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│   onChange Triggered  │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ event.target.value    │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ setGender(value)      │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│    State Updates      │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│  React Re-renders     │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ checked={condition}   │
└───────────┬───────────┘
            ↓
┌───────────────────────┐
│ Correct Radio Selected│
└───────────────────────┘
```

---

# 14. Purpose of `checked={gender === "Male"}`

The `checked` property connects the radio button with React state.

```jsx id="0f4j2m"
checked={gender === "Male"}
```

### What Happens?

If:

```jsx id="5z9q1k"
gender = "Male"
```

Then:

```jsx id="x8c4vd"
gender === "Male"
```

returns:

```text id="9k3m2w"
true
```

Therefore:

```text id="5v7g8x"
☑ Male
```

If:

```jsx id="r4t1qp"
gender = "Female"
```

Then:

```text id="n7x3bc"
☐ Male
☑ Female
```

### Main Benefits

```text id="c8j2mx"
┌──────────────────────────────────┐
│          checked={...}           │
├──────────────────────────────────┤
│                                  │
│ ✔ Matches UI with React state    │
│                                  │
│ ✔ Keeps selection synchronized   │
│                                  │
│ ✔ Makes component controlled      │
│                                  │
│ ✔ Provides predictable behavior  │
│                                  │
└──────────────────────────────────┘
```

---

# 15. Real-Life Use Cases

Radio buttons are commonly used in:

```text id="k7w3p9"
┌──────────────────────────────┐
│       Real-Life Uses         │
├──────────────────────────────┤
│                              │
│ ✔ Registration Forms         │
│                              │
│ ✔ Payment Selection          │
│                              │
│ ✔ Exam MCQ Options          │
│                              │
│ ✔ Subscription Plans         │
│                              │
│ ✔ Feedback Forms             │
│                              │
│ ✔ Yes / No Questions         │
│                              │
│ ✔ Delivery Options           │
│                              │
└──────────────────────────────┘
```

---

# 16. Interview Questions ⭐

## Q1. Why do we use radio buttons instead of checkboxes?

> We use radio buttons when the user should select **only one option** from a group. Checkboxes are used when the user can select **multiple options**.

---

## Q2. Why is the `name` attribute important for radio buttons?

> The `name` attribute groups related radio buttons together. Radio buttons with the same `name` belong to the same group, allowing only one option to be selected at a time.

### Example

```jsx id="5r2k8v"
name="gender"
```

All options should use the same name:

```jsx id="8q3j6x"
name="gender"
```

---

## Q3. Can we use array state for a radio button?

> We generally use a **single state value** for a radio button group because only one option can be selected at a time.

### Recommended

```jsx id="3f7n2q"
const [gender, setGender] = useState("");
```

### Example Value

```jsx id="9m4k1z"
"Male"
```

---

## Q4. What is the purpose of `checked` in a controlled radio button?

> The `checked` property determines whether a radio button is selected based on the current React state.

Example:

```jsx id="w8p2x6"
checked={gender === "Male"}
```

---

## Q5. How do you get the selected radio button value?

Use:

```jsx id="n4j7q2"
event.target.value
```

Example:

```jsx id="c6m9x1"
const handleGender = (event) => {
  setGender(event.target.value);
};
```

---

# 17. One-Line Definition ⭐

> **A radio button in React allows the user to select a single option from multiple choices using a single state value and a controlled `checked` property.**

---

# 18. Checkbox vs Radio — Final Summary

```text id="g2k7mx"
┌──────────────────────────────────────┐
│       CHECKBOX vs RADIO BUTTON       │
├──────────────────────────────────────┤
│                                      │
│  CHECKBOX                            │
│  ✔ Multiple selections               │
│  ✔ Usually uses array state          │
│  ✔ Example: Skills                   │
│  ✔ Example: Hobbies                  │
│                                      │
│  RADIO BUTTON                        │
│  ✔ Single selection                  │
│  ✔ Uses single value state           │
│  ✔ Example: Gender                   │
│  ✔ Example: Payment Method           │
│                                      │
└──────────────────────────────────────┘
```

### Quick Comparison

```text id="n4v8cs"
☑ CHECKBOX
    ↓
Multiple Values
    ↓
Array State
    ↓
["Java", "React"]


◉ RADIO BUTTON
    ↓
Single Value
    ↓
String State
    ↓
"Male"
```

---

# 19. Final Concept to Remember ⭐

```text id="z7m3kp"
RADIO BUTTON
      │
      ▼
Only One Option
      │
      ▼
Single State Value
      │
      ▼
useState("")
      │
      ▼
onChange
      │
      ▼
event.target.value
      │
      ▼
setGender(value)
      │
      ▼
checked={gender === "value"}
```

> **In short:**
> **Radio Button in React = Single Value State + `onChange` + Controlled `checked` Property**
