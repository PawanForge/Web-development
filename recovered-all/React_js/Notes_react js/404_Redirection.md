

📘 404 Page & Redirection in React Router


---

1️⃣ What is a 404 Page?

📌 What

A 404 page is a page shown when a user tries to access a URL that does not exist in the application.


---

❓ Why

Users may type a wrong URL

Old or broken links may exist

Page might be removed or renamed


Without a 404 page, users see a blank screen or error, which is bad UX.


---

🎯 Purpose

Inform the user that the page does not exist

Guide the user back to valid pages

Improve user experience



---

🧠 Real-World Example

If the app has:

/home
/about
/login

User enters:

/contact

👉 404 Page appears


---

2️⃣ How 404 Page Works in React Router

📌 Concept

React Router provides a wildcard route (*) that matches any undefined path.


---

⚙️ How

Create a NotFound component

Use path="*" in Route

Place it at the end of Routes



---

🧪 Example – 404 Page

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />

  <Route path="*" element={<NotFound />} />
</Routes>

✔ Any invalid URL → NotFound component
✔ No reload
✔ Clean error handling


---

3️⃣ What is Redirection?

📌 What

Redirection means automatically sending the user from one route to another route.


---

❓ Why

User is not logged in

Old URL is no longer valid

After login or logout

Protect private pages



---

🎯 Purpose

Control navigation flow

Improve security

Guide users correctly



---

4️⃣ Redirection Using <Navigate />

📌 What

Navigate is a React Router component used for redirecting.


---

⚙️ How

Import Navigate

Use it inside a route



---

🧪 Example – Simple Redirect

import { Navigate } from "react-router-dom";

<Route path="/old-page" element={<Navigate to="/" />} />

✔ /old-page → automatically redirects to /


---

5️⃣ Redirect After Login (Common Use Case)

📌 Concept

If the user is not logged in, redirect to login page.


---

🧪 Example

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

<Route
  path="/dashboard"
  element={
    <ProtectedRoute isLoggedIn={false}>
      <Dashboard />
    </ProtectedRoute>
  }
/>

✔ Not logged in → redirect to /login
✔ Logged in → dashboard opens


---

6️⃣ Redirect from 404 Page (Optional)

Sometimes instead of showing a message, we redirect users to home.

<Route path="*" element={<Navigate to="/" />} />

✔ Invalid URL → Home page


---

7️⃣ 404 Page vs Redirection (Difference)

Feature	404 Page	Redirection

Purpose	Show error	Move user
User Control	User decides next step	Automatic
Use Case	Invalid URL	Auth, old links
Component	Custom component	<Navigate />



---

8️⃣ When to Use What?

Use 404 Page when:

✔ Page does not exist
✔ Wrong URL entered

Use Redirection when:

✔ User not authorized
✔ Page moved or deleted
✔ After login / logout


---

9️⃣ Flow Summary (Easy to Remember)

User enters URL
      ↓
Routes check path
      ↓
If matched → render component
If not matched → 404 page
OR → redirect using Navigate


---

🔁 One-Line Revision (Exam / Interview)

404 Page → Shown for invalid routes

path="*" → Matches all unknown URLs

Navigate → Used for redirection

Redirection → Automatic route change

