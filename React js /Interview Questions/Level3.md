
1. Virtual DOM

Q: What is the Virtual DOM?
A:
Virtual DOM is a lightweight copy of the real DOM. React uses it to compare changes and update only the modified parts in the real DOM, making the app faster.


---

2. Reconciliation

Q: What is reconciliation in React?
A:
Reconciliation is the process where React compares the old Virtual DOM with the new one and updates only the changed elements in the real DOM.


---

3. Controlled vs Uncontrolled Components

Q: What are controlled and uncontrolled components?

A:

Controlled Component:
Input value is controlled by React state (useState). React manages the data.

Uncontrolled Component:
Input value is handled by the DOM. React accesses it using useRef when needed.



---

4. When to Use Controlled vs Uncontrolled

Q: When should you use them?

A:

Controlled: Use when you need validation, real-time updates, or full control of input.

Uncontrolled: Use when you want simpler forms or only need values on submit.



---

5. useEffect

Q: What is useEffect?

A:
useEffect is used to handle side effects like API calls, timers, and subscriptions. It runs after rendering.


---

6. Dependency Array in useEffect

Q: How does the dependency array work?

A:

No dependency → runs after every render

Empty array [] → runs once after first render

With values [a, b] → runs when those values change



---

7. useMemo vs useCallback

Q: What is the difference?

A:

useMemo → memoizes a value

useCallback → memoizes a function
Both are used to improve performance.



---

8. useRef

Q: What is useRef?

A:
useRef is used to access DOM elements directly or store mutable values without causing re-renders.


---

9. Re-render Causes

Q: What causes a component to re-render?

A:

State changes

Props changes

Parent re-render

Context value changes



---

10. React.memo

Q: What is React.memo?

A:
It prevents unnecessary re-renders of a component if props have not changed.


---

11. Prop Drilling

Q: What is prop drilling?

A:
Passing data through multiple nested components using props.


---

12. Context API

Q: What is Context API?

A:
It allows sharing data globally without passing props manually at every level.


---

13. HOC (Higher-Order Component)

Q: What is HOC?

A:
A function that takes a component and returns a new enhanced component.


---

14. Render Props

Q: What are render props?

A:
A pattern where a component shares logic using a function as a prop.


---

15. Code Splitting

Q: What is code splitting?

A:
It breaks the app into smaller chunks and loads them only when needed using React.lazy and Suspense.


---

16. Keys in Lists

Q: Why are keys important?

A:
Keys help React identify which items changed, added, or removed in a list for efficient updates.


+
