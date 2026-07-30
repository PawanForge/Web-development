# 📘 404 Page & Redirection – React Router

---

# 1️⃣ 404 Page

## 🔹 What is a 404 Page?

A **404 Page** is shown when a user visits a **URL that does not exist**.

---

## 🔹 Why do we use it?

* Wrong URL entered
* Page removed
* Broken link

---

## 🔹 Purpose

* Show **"Page Not Found"**
* Improve user experience
* Help users navigate back

---

## 🔹 Example

```text
Available Pages
/home
/about
/login

User visits
/contact

↓
404 Page
```

---

## 🔹 404 Route

```jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

> `path="*"` matches all invalid URLs.

---

# 2️⃣ Redirection

## 🔹 What is Redirection?

**Redirection** automatically sends the user from **one route to another**.

---

## 🔹 Why do we use it?

* User not logged in
* Old page moved
* After Login / Logout

---

## 🔹 Purpose

* Control navigation
* Protect pages
* Send users to the correct page

---

## 🔹 Redirect Using `Navigate`

```jsx
import { Navigate } from "react-router-dom";

<Route
  path="/old-page"
  element={<Navigate to="/" />}
/>
```

👉 `/old-page` automatically redirects to `/`.

---

## 🔹 Redirect After Login

```jsx
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

---

## 🔹 Redirect Invalid URL to Home

```jsx
<Route
  path="*"
  element={<Navigate to="/" />}
/>
```

---

# 🔹 Difference

| 404 Page             | Redirection                       |
| -------------------- | --------------------------------- |
| Shows error page     | Moves user automatically          |
| User stays on page   | User goes to another page         |
| Used for invalid URL | Used for login, logout, old pages |

---

## 🔹 How It Works?

```text
User enters URL
       ↓
Routes check path
       ↓
Valid URL
       ↓
Show Component

OR

Invalid URL
       ↓
404 Page / Redirect
```

---

## 🧠 Remember

> **404 Page → Invalid URL**
> **Navigate → Redirect User**

### ⭐ One-Line Revision

* `path="*"` → Matches all invalid routes.
* `Navigate` → Redirects to another route.
* **404 Page** → Shows "Page Not Found".
* **Redirection** → Automatically changes the route.

This version removes repeated explanations and keeps only the concepts needed for quick revision.
