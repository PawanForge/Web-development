## Dynamic Routing in React using React Router

**Dynamic routing** means:

> The route (URL) changes based on data (like id, username, product id), and the same component shows **different content**.

Instead of making many static routes like:

```
/user1
/user2
/user3
```

You make **one dynamic route**:

```
/user/:id
```

---

### 🧠 Idea

If user clicks:

```
/user/101
/user/102
/user/103
```

Same component loads, but data changes using the **id** from URL.

---

## Step 1 — Define Dynamic Route

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
```

🔹 `:id` → dynamic parameter (anything can come here)

---

## Step 2 — Create Links with Different IDs

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/user/101">User 101</Link><br/>
      <Link to="/user/102">User 102</Link><br/>
      <Link to="/user/103">User 103</Link>
    </div>
  );
}
```

---

## Step 3 — Read the Dynamic Value using `useParams`

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User ID: {id}</h2>
    </div>
  );
}

export default User;
```

---

## 🔍 What Happens Internally?

| URL         | `id` value from `useParams()` | Output       |
| ----------- | ----------------------------- | ------------ |
| `/user/101` | 101                           | User ID: 101 |
| `/user/102` | 102                           | User ID: 102 |
| `/user/103` | 103                           | User ID: 103 |

Same component. Different data. ✅

---

## ✅ Real Use Cases

| Example      | Route                 |
| ------------ | --------------------- |
| User profile | `/user/:id`           |
| Product page | `/product/:productId` |
| Blog details | `/blog/:slug`         |

---

## 🎯 Why Dynamic Routing?

Without dynamic routing ❌

```jsx
<Route path="/user1" />
<Route path="/user2" />
<Route path="/user3" />
```

With dynamic routing ✅

```jsx
<Route path="/user/:id" />
```

Less code, scalable, reusable component.

---

## 🧩 With Data Fetch Example

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  // Example fetch
  // fetch(`/api/users/${id}`)

  return <h2>Fetching data for user {id}</h2>;
}
```

---

## 📝 Summary

* `:id` → dynamic part of URL
* `useParams()` → read that value
* Same component → different content
* Used for users, products, blogs, etc.
