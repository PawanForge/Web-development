# `useReducer` Hook in React

`useReducer` is a React Hook used to manage **complex state logic** in a component.

It is an alternative to `useState`.

---

# Why `useReducer` is Used

`useState` is good for simple state like:

```js
const [count, setCount] = useState(0);
```

But when:

* state becomes complex
* many values are connected
* multiple actions update the state
* logic becomes difficult

then `useReducer` is better.

---

# Real Life Example

Think about a bank account.

Actions can be:

* Deposit money
* Withdraw money
* Reset balance

Instead of many `setState` calls, we use **one reducer function** to control all logic.

---

# Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# Terms Explanation

## 1. `state`

Current data/state.

Example:

```js
state = 0
```

---

## 2. `dispatch`

A function used to send an action.

Example:

```js
dispatch({ type: "increment" });
```

It tells reducer:

> "Do this action."

---

## 3. `reducer`

A normal function that decides how state changes.

Syntax:

```js
function reducer(state, action) {
   // logic
}
```

It receives:

| Parameter | Meaning       |
| --------- | ------------- |
| `state`   | current state |
| `action`  | what to do    |

---

## 4. `initialState`

Starting value of state.

Example:

```js
const initialState = 0;
```

---

# Flow of `useReducer`

```text
dispatch(action)
        ↓
reducer runs
        ↓
returns new state
        ↓
UI updates
```

---

# Simple Counter Example

```jsx
import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {

  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }

  if (action.type === "reset") {
    return 0;
  }

  return state;
}

export default function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
```

---

# Step-by-Step Working

## Step 1 → Initial State

```js
const initialState = 0;
```

Counter starts from `0`.

---

## Step 2 → Reducer Function

```js
function reducer(state, action)
```

This function controls state changes.

---

## Step 3 → useReducer Hook

```js
const [count, dispatch] = useReducer(reducer, initialState);
```

| Part           | Meaning        |
| -------------- | -------------- |
| `count`        | current state  |
| `dispatch`     | sends action   |
| `reducer`      | controls logic |
| `initialState` | starting value |

---

## Step 4 → Dispatch Action

```js
dispatch({ type: "increment" })
```

This sends:

```js
action = { type: "increment" }
```

to reducer.

---

## Step 5 → Reducer Executes

```js
if (action.type === "increment") {
   return state + 1;
}
```

State updates.

---

# Visual Flow Example

```text
Button Click
     ↓
dispatch({type:"increment"})
     ↓
Reducer Function
     ↓
return state + 1
     ↓
React updates UI
```

---

# Example with Object State

```jsx
import { useReducer } from "react";

const initialState = {
  count: 0
};

function reducer(state, action) {

  switch (action.type) {

    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

    </div>
  );
}
```

---

# Why `switch` is Commonly Used

Because reducer may handle many actions.

```js
switch(action.type)
```

makes code cleaner.

---

# Difference Between `useState` and `useReducer`

| useState      | useReducer          |
| ------------- | ------------------- |
| Simple state  | Complex state       |
| Easy syntax   | More structured     |
| Small logic   | Large logic         |
| Direct update | Action-based update |

---

# When to Use `useReducer`

Use it when:

✅ Multiple state updates
✅ Complex forms
✅ Shopping cart
✅ Authentication
✅ Todo app
✅ State depends on previous state
✅ Large applications

---

# Example: Todo Logic Idea

Actions:

```js
dispatch({ type: "ADD_TASK" })

dispatch({ type: "DELETE_TASK" })

dispatch({ type: "EDIT_TASK" })
```

Reducer controls all task logic.

---

# Important Rules

## 1. Never Change State Directly ❌

Wrong:

```js
state.count++;
```

Correct:

```js
return { count: state.count + 1 };
```

---

## 2. Reducer Must Return New State

Always return updated state.

---

# Main Advantage

`useReducer` keeps all state logic in one place.

So code becomes:

* cleaner
* organized
* easier to debug
* easier to manage

---

# Simple Revision Notes

## Formula

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## Reducer Structure

```js
function reducer(state, action) {

   switch(action.type) {

      case "ACTION":
         return newState;

      default:
         return state;
   }
}
```

---

# Short Interview Definition

> `useReducer` is a React Hook used for managing complex state logic using a reducer function and dispatched actions.

---

# Simple Analogy

```text
dispatch = order
reducer = manager
state = current data
```

You send an order (`dispatch`),
manager (`reducer`) decides what to do,
then updates data (`state`).
