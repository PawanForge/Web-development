# 📘 `useId()` Hook – React

---

🔹 **What is `useId()`?**

`useId()` is a React Hook that creates a **unique ID** for elements, especially **form elements**.

```jsx
import { useId } from "react";
```

---

🔹 **Why do we use `useId()`?**

| Problem                      | Solution                          |
| ---------------------------- | --------------------------------- |
| Duplicate IDs                | Creates unique IDs                |
| Label not connected to input | Connects `<label>` with `<input>` |
| Accessibility problems       | Helps screen readers              |
| SSR hydration issues         | Same ID on server and client      |

---

🔹 **Simple Syntax**

```jsx
const id = useId();
```

---

🔹 **Example**

```jsx
import { useId } from "react";

function UserForm() {
  const userId = useId();

  return (
    <form>
      <label htmlFor={userId + "-name"}>
        Name
      </label>

      <input id={userId + "-name"} />

      <label htmlFor={userId + "-pass"}>
        Password
      </label>

      <input id={userId + "-pass"} />
    </form>
  );
}

export default UserForm;
```

---

🔹 **How It Works?**

Suppose:

```text
userId = :r2
```

Then:

| Field    | Final ID   |
| -------- | ---------- |
| Name     | `:r2-name` |
| Password | `:r2-pass` |

```text
useId()
   ↓
Unique ID
   ↓
htmlFor ↔ id
   ↓
Label connected to Input
```

---

🔴 **Never Use `useId()` for List Keys**

❌ Wrong:

```jsx
<li key={useId()}>
  Item
</li>
```

`useId()` is **not meant for list keys**.

---

🟢 **Correct Way for Keys**

Use a unique ID from your data:

```jsx
<li key={item.id}>
  {item.name}
</li>
```

---

🧠 **Remember**

> **`useId()` → Creates unique IDs → Mainly useful for connecting form labels and inputs.**

```text
useId() → Unique ID → Form Accessibility
```
