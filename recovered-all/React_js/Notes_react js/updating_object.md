# 📘 Updating Object in State — React JS

## 1️⃣ What is Updating an Object in State?

Sometimes React state contains an **object**.

Example:

```jsx
const [data, setData] = useState({
  name: "Anil",
  address: {
    city: "Delhi",
    country: "India"
  }
});
```

If we want to change `name` or `city`, we should **not change the original object directly**.

Instead, we create a **new object** using the spread operator `...`.

---

# 2️⃣ Why Do We Use the Spread Operator?

React needs a **new object** when updating state.

### ❌ Don't Do This

```jsx
data.name = "Anil Sahu";
setData(data);
```

Here, we are changing the original object directly.

### ✅ Do This

```jsx
setData({
  ...data,
  name: "Anil Sahu"
});
```

Here:

```text
Old Data
   ↓
Copy Old Data (...data)
   ↓
Change name
   ↓
New Object
   ↓
React Updates UI
```

---

# 3️⃣ Initial State

```jsx
const [data, setData] = useState({
  name: "Anil",
  address: {
    city: "Delhi",
    country: "India"
  }
});
```

Our data looks like this:

```text
data
│
├── name → "Anil"
│
└── address
      ├── city → "Delhi"
      └── country → "India"
```

---

# 4️⃣ Updating a Simple Property

Suppose we want to change:

```text
Anil
  ↓
Anil Sahu
```

### Code

```jsx
const handleName = () => {
  setData({
    ...data,
    name: "Anil Sahu"
  });
};
```

### What is happening?

```text
...data
   ↓
Copy old data

name: "Anil Sahu"
   ↓
Change only name
```

The `address` data stays the same.

---

# 5️⃣ Updating a Nested Object

Our `city` is inside the `address` object:

```jsx
data.address.city
```

To change the city:

```text
Delhi
  ↓
Mumbai
```

### Code

```jsx
const handleCity = () => {
  setData({
    ...data,
    address: {
      ...data.address,
      city: "Mumbai"
    }
  });
};
```

### What is happening?

```text
...data
   ↓
Copy main object

...data.address
   ↓
Copy address object

city: "Mumbai"
   ↓
Change city
```

---

# 6️⃣ Complete Example

```jsx
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Anil",
    address: {
      city: "Delhi",
      country: "India"
    }
  });

  // Update Name
  const handleName = () => {
    setData({
      ...data,
      name: "Anil Sahu"
    });
  };

  // Update City
  const handleCity = () => {
    setData({
      ...data,
      address: {
        ...data.address,
        city: "Mumbai"
      }
    });
  };

  return (
    <div>
      <h2>Name: {data.name}</h2>

      <h2>City: {data.address.city}</h2>

      <h2>Country: {data.address.country}</h2>

      <button onClick={handleName}>
        Update Name
      </button>

      <button onClick={handleCity}>
        Update City
      </button>
    </div>
  );
}

export default App;
```

---

# 7️⃣ How the Code Works

### Initial Data

```text
Name: Anil
City: Delhi
Country: India
```

Click **Update Name**:

```text
Name: Anil
      ↓
Name: Anil Sahu
```

Click **Update City**:

```text
City: Delhi
      ↓
City: Mumbai
```

Final result:

```text
Name: Anil Sahu
City: Mumbai
Country: India
```

---

# 8️⃣ Simple Table

| Code                | Meaning          |
| ------------------- | ---------------- |
| `...data`           | Copy old object  |
| `name: "Anil Sahu"` | Change name      |
| `...data.address`   | Copy old address |
| `city: "Mumbai"`    | Change city      |
| `setData()`         | Update state     |

---

# 🧠 Easy Rule

### For a simple object:

```jsx
setData({
  ...data,
  name: "New Name"
});
```

### For a nested object:

```jsx
setData({
  ...data,
  address: {
    ...data.address,
    city: "New City"
  }
});
```

### ⭐ Remember

> **Don't directly change the state object. Copy it with `...`, change the required value, and update it using the state setter.**

```text
State Object
     ↓
Copy with ...
     ↓
Change Value
     ↓
setData()
     ↓
UI Updates
```
