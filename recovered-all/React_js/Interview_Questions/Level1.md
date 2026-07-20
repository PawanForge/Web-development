
🚀 React Interview Preparation – Level 1 (Basics)

1️⃣ What is React? Why is it used?

Answer:
React is a JavaScript library used to build user interfaces (UI), especially for Single Page Applications (SPA).
It allows developers to create reusable components and update the UI efficiently using the Virtual DOM.

Why React is used:

Build fast and interactive web applications

Reusable components

Better performance using Virtual DOM

Easy UI management



---

2️⃣ What is JSX?

Answer:
JSX stands for JavaScript XML.
It is a syntax used in React that allows developers to write HTML-like code inside JavaScript.

JSX makes code easier to read and write.

Example:

const element = <h1>Hello World</h1>;

JSX is converted into React.createElement() by Babel.


---

3️⃣ What is the difference between HTML and JSX?

HTML	JSX

Used in normal web pages	Used in React
Uses class attribute	Uses className
Uses for attribute	Uses htmlFor
JavaScript cannot be written directly	JavaScript expressions can be used
Multiple root elements allowed	Only one parent element required


Example JSX:

const element = <h1 className="title">Hello</h1>;


---

4️⃣ What is a Component in React? Types?

Answer:
A Component is a reusable piece of UI in React.
It helps divide the UI into independent and reusable parts.

Types of Components

1️⃣ Functional Component

function Welcome() {
  return <h1>Hello</h1>;
}

2️⃣ Class Component

class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

Today mostly Functional Components are used.


---

5️⃣ What are Props in React?

Answer:
Props (Properties) are used to pass data from a parent component to a child component.

Props help make components dynamic and reusable.

Example:

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

Usage:

<Welcome name="Pawan" />

⚠️ Props are read-only (cannot be modified).


---
