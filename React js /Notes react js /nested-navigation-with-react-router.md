# 🧭 Nested Navigation Notes (v6) — **React Router**

## ✅ What is Nested Navigation?

**Idea:** Keep a **parent layout** (navbar/sidebar/header) fixed and change only the **inner content**.

**Example structure**

```
Dashboard (layout stays)
 ├─ Profile
 ├─ Settings
 └─ Welcome (default)
```

This is achieved with **Nested `<Route>` + `<Outlet />`**.

---

## 🧩 Core Components & Terms

| Term            | What it is             | Why we use it            |
| --------------- | ---------------------- | ------------------------ |
| `BrowserRouter` | Enables routing in app | Wraps whole app          |
| `Routes`        | Holds all routes       | Matches best route       |
| `Route`         | Path → UI mapping      | Defines pages            |
| `Link`          | Simple navigation      | Move without reload      |
| `NavLink`       | Link + active style    | Menus/navbars            |
| `to`            | Destination path       | Where to go              |
| `element`       | Component to render    | What to show             |
| `Outlet`        | Child render place     | Shows nested page        |
| `index`         | Default child route    | First page inside parent |
| `Navigate`      | Redirect component     | Auto-redirect/protect    |
| `useNavigate()` | Navigate by code       | After login/submit       |
| `useParams()`   | Read URL params        | Dynamic IDs              |
| `useLocation()` | Current URL info       | Path/state/query         |
| `useMatch()`    | Custom path match      | Advanced active logic    |
| `*` route       | 404 page               | Unknown paths            |
| Layout Route    | Route without path     | Shared UI                |
| Outlet Context  | Parent → child data    | Avoid prop drilling      |
| `replace`       | No back history        | Prevent back navigation  |
| `caseSensitive` | Case match path        | Strict URLs              |

---

## 🏗️ Complete Working Example (All Concepts)

### 📁 Files

```
App.js
Layout.js
Dashboard.js
Welcome.js
Profile.js
Settings.js
User.js
NotFound.js
```

---

### `App.js` — Routing Setup

```jsx
import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Settings from "./Settings";
import User from "./User";
import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route (no path) */}
        <Route element={<Layout />}>
          
          {/* Redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Parent Route */}
          <Route path="dashboard" element={<Dashboard />}>
            
            {/* index route */}
            <Route index element={<Welcome />} />

            {/* Nested routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />

            {/* Dynamic route */}
            <Route path="user/:id" element={<User />} />
          </Route>

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
```

---

### `Layout.js` — Shared UI (Layout Route)

```jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <Link to="/dashboard">Dashboard</Link>
      <hr />
      <Outlet />
    </div>
  );
}
```

---

### `Dashboard.js` — Nested Navigation + Outlet Context

```jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="">Home</NavLink> |{" "}
        <NavLink to="profile">Profile</NavLink> |{" "}
        <NavLink to="settings">Settings</NavLink> |{" "}
        <NavLink to="user/101">User 101</NavLink>
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet context={{ user: "Pawan" }} />
    </div>
  );
}
```

---

### `Welcome.js` — `index` Page + Outlet Context

```jsx
import { useOutletContext } from "react-router-dom";

export default function Welcome() {
  const { user } = useOutletContext();
  return <h3>Welcome {user} (Default Page)</h3>;
}
```

---

### `Profile.js`

```jsx
export default function Profile() {
  return <h3>Profile Page</h3>;
}
```

---

### `Settings.js` — `useNavigate`

```jsx
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Settings Page</h3>
      <button onClick={() => navigate("/dashboard/profile")}>
        Go to Profile
      </button>
    </div>
  );
}
```

---

### `User.js` — `useParams` + `useLocation`

```jsx
import { useParams, useLocation } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <h3>User ID: {id}</h3>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
}
```

---

### `NotFound.js` — `*` Route

```jsx
export default function NotFound() {
  return <h2>404 Page Not Found</h2>;
}
```

---

## 🔁 Relative vs Absolute `to`

| Inside Dashboard          | Result URL           |
| ------------------------- | -------------------- |
| `to="profile"`            | `/dashboard/profile` |
| `to="/dashboard/profile"` | Same (absolute)      |

Prefer **relative** inside nested routes.

---

## 🧠 Flow Summary

```
Click NavLink (profile)
 → URL: /dashboard/profile
 → Dashboard stays
 → <Outlet /> loads Profile
```

---

## 🎯 Why Nested Routing?

* Layout does not reload
* Cleaner structure
* Better UX
* Reusable layout (sidebar/header)
* Real apps: admin panel, portals, settings

---

## 📝 Quick Revision

* Use **Layout Route** for shared UI
* Use **Outlet** for nested pages
* Use **index** for default child
* Use **NavLink** for active menu
* Use hooks for programmatic control
* Use `*` for 404
* Use `Navigate` for redirects

---

These notes cover **all important terms + one integrated example** for Nested Navigation.
