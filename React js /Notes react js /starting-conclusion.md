
## 🧱 1) Your Fake API Server — JSON Server

You created a fake backend using **JSON Server**.

```json
{
  "user": [
    { "name": "Anil", "age": 29, "email": "anil@latest.com" }
  ]
}
```

When you run:

```bash
npx json-server db.json --port 3000
```

It automatically creates this API:

```
http://localhost:3000/user
```

That URL is now a **real API endpoint** returning JSON data.

---

## ⚛️ 2) Your React App (Frontend)

Built with **React**.
React will **call** the API and **show** the data on the screen.

---

## 🔁 3) Complete Data Flow (Visual)

```
db.json  →  JSON Server  →  API URL  →  React fetch()  →  useState  →  UI render
```

Step by step:

1. `db.json` has data
2. JSON Server exposes it as API
3. React calls the API using `fetch`
4. Data stored in state
5. State renders on screen

---

## 🧩 4) Code Breakdown (line by line)

### Import Hooks

```js
import { useState, useEffect } from "react";
```

* `useState` → data store karne ke liye
* `useEffect` → page load hote hi API call karne ke liye

---

### State (data container)

```js
const [userData, setUserData] = useState([]);
```

* `userData` → API se aane wala data
* `setUserData` → data ko store karega

---

### Function to Call API

```js
const getUserData = async () => {
  const url = "http://localhost:3000/user";
  let response = await fetch(url);
  response = await response.json();
  setUserData(response);
};
```

What happens here:

1. `fetch(url)` → API ko request
2. `response.json()` → JSON data me convert
3. `setUserData` → React state me save

---

### useEffect — Auto run on page load

```js
useEffect(() => {
  const fetchData = async () => {
    await getUserData();
  };
  fetchData();
}, []);
```

* `[]` means → **sirf ek baar** chalega (page load par)
* Ye `getUserData()` ko call karta hai

---

### Render Data on Screen

```js
{userData.map((user, index) => (
  <h2 key={index}>{user.name}</h2>
))}
```

* `map` loop lagata hai array par
* Har user ka `name` screen par show hota hai

---

## 🧠 Mental Model (API Thinking)

Think like this:

> React ko data nahi pata.
> API se mangwana padta hai.
> API se aaya data state me store hota hai.
> State UI me print hota hai.

---

## 🔄 Real-World Pattern (same everywhere)

Ye pattern aap **har API** me use karoge:

```
useEffect → fetch → setState → map → display
```

Chahe API ho:

* users
* products
* posts
* anything

Pattern **same** rahega.
