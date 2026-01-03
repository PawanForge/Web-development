
📘 1. Click Event & Function Call

Definition

Click Event is used to perform action when user clicks on any element.

Why Use?

User interaction like submit, like, delete, login etc.

How it Works?

function App() {

  function clickMe(){
    alert("Button Clicked");
  }

  return (
    <button onClick={clickMe}>Click Me</button>
  );
}

Purpose

Trigger any operation by user action.


---

📘 2. Arrow Function

Definition

Short syntax of function.

Why Use?

Less code, no this problem.

Syntax

const show = () => {
  alert("Hello React");
};


---

📘 3. Passing Parameters

Definition

Send data inside function.

Why Use?

Same function with different values.

const fruit = (name) => {
  alert(name);
};

<button onClick={() => fruit("Apple")}>Apple</button>
<button onClick={() => fruit("Banana")}>Banana</button>


---

📘 4. State – useState

Definition

State is memory of component.

Why Use?

To update UI dynamically.

How?

const [name, setName] = useState("Apple");

<h1>{name}</h1>
<button onClick={() => setName("Banana")}>Change</button>


---

📘 5. Hooks

Definition

Hooks are special React functions.

Hook	Purpose

useState	store data
useEffect	lifecycle
useContext	global data



---

📘 6. Re-render

Definition

UI updates when state changes.

const [count, setCount] = useState(0);

<button onClick={() => setCount(count+1)}>+</button>
<h1>{count}</h1>


---

📘 7. Toggle / Show-Hide

Why?

Show / hide content.

const [show, setShow] = useState(true);

{show && <h1>Hello</h1>}
<button onClick={() => setShow(!show)}>Toggle</button>


---

📘 8. Multiple Condition Rendering

{
  count === 0 ? <h1>Zero</h1> :
  count === 1 ? <h1>One</h1> :
  <h1>Other</h1>
}
