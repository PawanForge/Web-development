## Optional Segment in React with React Router

### 🔹 What is an *optional segment*?

An **optional segment** means a part of the URL **may or may not be present**, and **the same route/component still works**.

Example URLs that should open the **same** page:

```
/users
/users/101
```

Here, `101` is **optional**.

---

## ❗ Important (v6+ behavior)

In React Router v6+, you **don’t** write `:id?` like older versions.
Instead, you define **two routes** that point to the **same component**.

---

## ✅ Step 1 — Define Routes

```jsx
<Routes>
  <Route path="/users" element={<Users />} />
  <Route path="/users/:id" element={<Users />} />
</Routes>
```

Both render `<Users />`.

---

## ✅ Step 2 — Read param safely with `useParams`

```jsx
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  return (
    <div>
      {id ? (
        <h2>Showing details for user {id}</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
}
```

---

## 🔍 What happens

| URL          | `id` value  | Output           |
| ------------ | ----------- | ---------------- |
| `/users`     | `undefined` | All users        |
| `/users/101` | `101`       | User 101 details |

---

## 🧠 Why this is called Optional?

Because:

* Route works **with id**
* Route works **without id**
* Same component handles both cases

---

## ✨ Real Example Use

| Page     | URLs                               |
| -------- | ---------------------------------- |
| Products | `/products` and `/products/55`     |
| Blogs    | `/blogs` and `/blogs/react-router` |

---

## 📝 Pattern to remember

```
Two routes → same component → param may exist or not
```
//////////////////////////////
## Benefit (Profit) of Optional Segment in React with React Router

Optional segment = **same component works with and without URL param**

Example:

* `/users` → show all users
* `/users/101` → show one user

Both handled by **one** component.

---

## ✅ 1) Reusability (One Component, Two Jobs)

You don’t create:

* `UsersList.jsx`
* `UserDetails.jsx`

You use **one**:

```jsx
function Users() { ... }
```

Less files, less code.

---

## ✅ 2) Cleaner Routing

Instead of many routes:

```jsx
<Route path="/users" />
<Route path="/users/:id" />
```

Both point to the same UI logic → easy to manage.

---

## ✅ 3) Easy Data Handling

Inside component:

```jsx
const { id } = useParams();

if (id) {
  // fetch single user
} else {
  // fetch all users
}
```

Simple condition decides behavior.

---

## ✅ 4) Better URL Design

Logical URLs:

* List page → `/users`
* Details page → `/users/101`

This is how real apps are structured.

---

## ✅ 5) Scalability

Same pattern works for:

* `/products` and `/products/55`
* `/blogs` and `/blogs/react-router`

You follow **one pattern everywhere**.

---

## 📝 In One Line

> Optional segment lets **one component** handle **list view and detail view** using clean URLs and less code.




//////////////////////////////////////




You are trying to write `NavLink` like this 👇 (but syntax is wrong):

```jsx
className{{isActive}} => isActive ? 'customLink' : 'Link'
```

Let’s fix it and understand **what each part means**.

---

## ✅ Correct Syntax with `NavLink` in React using React Router

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/users"
  className={({ isActive }) =>
    isActive ? "customLink" : "Link"
  }
>
  Users
</NavLink>
```

---

## 🔍 Break the syntax

| Part                      | Meaning                                         |
| ------------------------- | ----------------------------------------------- |
| `className={ ... }`       | JSX expects **JS** inside `{}`                  |
| `({ isActive }) =>`       | Function that `NavLink` calls                   |
| `isActive`                | Boolean → true if this link matches current URL |
| `? "customLink" : "Link"` | Ternary operator (if-else)                      |

---

## 🧠 What happens internally?

If current URL is `/users`:

```js
isActive = true
```

So class becomes:

```html
class="customLink"
```

If URL is something else:

```js
isActive = false
```

So class becomes:

```html
class="Link"
```

---

## ✅ CSS Example

```css
.customLink {
  color: red;
  font-weight: bold;
}

.Link {
  color: black;
}
```

---

## ✅ Full Working Example

```jsx
<nav>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "customLink" : "Link"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/users"
    className={({ isActive }) =>
      isActive ? "customLink" : "Link"
    }
  >
    Users
  </NavLink>
</nav>
```

---

## 📝 In Simple Words

> `NavLink` gives you `isActive`.
> You use it to **change class** when link is active.
