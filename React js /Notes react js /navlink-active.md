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
