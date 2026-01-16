

📘 Basic Pages with React Router – Proper Notes


---

1️⃣ BrowserRouter

📌 What

BrowserRouter is a core component of React Router that enables client-side routing using the browser’s History API.


---

❓ Why

React apps are Single Page Applications

We need URL-based navigation without page reload

Browser back/forward buttons must work



---

⚙️ How

Wrap the entire application inside <BrowserRouter>

It listens to URL changes and updates the UI



---

🎯 Purpose

Enables routing in React

Manages browser history

Makes navigation smooth



---

🧪 Example

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* routing logic */}
    </BrowserRouter>
  );
}


---

2️⃣ Routes

📌 What

Routes is a container component that holds all <Route> components.


---

❓ Why

To define multiple routes in one place

Ensures only one matching route renders



---

⚙️ How

Place <Route> components inside <Routes>



---

🎯 Purpose

Match the current URL

Render the correct component



---

🧪 Example

import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
</Routes>


---

3️⃣ Route

📌 What

Route maps a URL path to a React component.


---

❓ Why

To decide which component to display for a specific URL



---

⚙️ How

path → URL

element → Component to render



---

🎯 Purpose

Render components based on the matched URL



---

🧪 Example

<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

✔ When URL is /about → About component renders
✔ When URL is /contact → Contact component renders


---

4️⃣ Link

📌 What

Link is a component used to navigate between pages in React Router.


---

❓ Why

<a> tag reloads the page

Link changes URL without reload



---

⚙️ How

Use to attribute instead of href



---

🎯 Purpose

Fast navigation

Preserves application state



---

🧪 Example

import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>


---

5️⃣ Meaning of Your Written Line (Explained)

📝 “Each Route component defines a path and the corresponding component to render when that path is matched”

✔ Correct Explanation:
Each <Route> checks the browser URL.
If the URL matches its path, React renders the given component.


---

🧪 Example

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />

/ → Home component

/about → About component



---

6️⃣ Meaning of Your Link Note

📝 “A link for navigating from 1 page to other page”

✔ Correct Explanation:
Link allows users to move from one route to another without reloading the page.


---

🧪 Example

<Link to="/about">Go to About Page</Link>


---

7️⃣ Complete Working Example (Clean)

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
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

🔁 Easy One-Line Revision

BrowserRouter → Enables routing

Routes → Holds route definitions

Route → Connects URL to component

Link → Navigates without reload
