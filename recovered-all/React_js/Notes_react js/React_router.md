📘 React Router – Clean & Readable Notes
---
1️⃣ React Router

📌 What

React Router is a library for handling navigation in React applications.


---

❓ Why

React apps are Single Page Applications (SPA)

We need multiple pages without reloading

URL should change when navigating



---

⚙️ How

React Router matches the URL path with a React component and renders it.


---

🎯 Purpose

Page navigation without refresh

Faster performance

Better user experience



---

🧪 Example

/        → Home Page
/about   → About Page
/contact → Contact Page


---

2️⃣ BrowserRouter

📌 What

BrowserRouter is a wrapper component that enables routing.


---

❓ Why

Required to use React Router

Uses browser history (back/forward buttons)



---

⚙️ How

Wrap the entire app with <BrowserRouter>.


---

🎯 Purpose

Tracks URL changes

Enables navigation system



---

🧪 Example

<BrowserRouter>
  <App />
</BrowserRouter>


---

3️⃣ Routes

📌 What

Routes is a container that holds all route definitions.


---

❓ Why

Groups all routes in one place

Ensures only one route renders at a time



---

⚙️ How

Place <Route> components inside <Routes>.


---

🎯 Purpose

Route matching

Organized routing structure



---

🧪 Example

<Routes>
  <Route path="/" element={<Home />} />
</Routes>


---

4️⃣ Route

📌 What

Route connects a URL path to a component.


---

❓ Why

To decide which component shows for which URL



---

⚙️ How

Use:

path → URL

element → Component



---

🎯 Purpose

Render correct page based on URL



---

🧪 Example

<Route path="/about" element={<About />} />


---

5️⃣ Link

📌 What

Link is a React Router component used for navigation.


---

❓ Why

Avoids full page reload

Faster than <a> tag



---

⚙️ How

Use to instead of href.


---

🎯 Purpose

Smooth navigation

Keeps app state intact



---

🧪 Example

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>


---

6️⃣ Complete Example (Clean)

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}


---

🔁 Easy Revision Flow

BrowserRouter
     ↓
Routes
     ↓
Route
     ↓
Component
     ↓
Link (navigation)

