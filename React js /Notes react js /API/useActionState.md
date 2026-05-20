## `useActionState` in **React**

`useActionState` is a React Hook for **handling form actions with state**—especially when your form submits to a **server action** (async function). It keeps **result, error, and pending** status in sync with the UI.

> Think: **Form submit → run async action → update UI from the result** (all in one pattern).

---

### 🧠 Why it’s used (the reason)

Without `useActionState`, you usually do:

* `useState` for data
* `useState` for loading
* `useState` for error
* manual `onSubmit`
* try/catch + set states

With `useActionState`, React **manages this flow** for you.

✅ Less boilerplate
✅ Built for forms + async actions
✅ Works great with Server Actions (React 19+)
✅ Automatic pending/error/result handling

---

### 🧩 What it returns

```js
const [state, formAction, isPending] = useActionState(actionFn, initialState);
```

| Item         | Meaning                                    |
| ------------ | ------------------------------------------ |
| `state`      | Latest result from the action (data/error) |
| `formAction` | Put this into `<form action={...}>`        |
| `isPending`  | `true` while the action is running         |

---

### ✅ Example: Login form with validation

```jsx
import { useActionState } from "react";

async function loginAction(prevState, formData) {
  const name = formData.get("name");

  if (name.length > 5) {
    return { error: "Only 5 characters allowed" };
  }

  // simulate server delay
  await new Promise((r) => setTimeout(r, 1000));

  return { success: "Login successful!" };
}

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginAction, {});

  return (
    <form action={formAction}>
      <input name="name" placeholder="Enter name" />

      <button disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
    </form>
  );
}
```

---

### 🔍 What’s happening

1. User submits the form.
2. `loginAction` runs (async).
3. Return value becomes `state`.
4. `isPending` auto-true while running.
5. UI updates automatically.

---

### 🆚 vs `useState`

| `useState` way                | `useActionState` way              |
| ----------------------------- | --------------------------------- |
| Manual submit handler         | Use `<form action>`               |
| Manage loading/error yourself | React gives `isPending` + `state` |
| More code                     | Cleaner, purpose-built            |

---

### 🧾 One line summary

`useActionState` is used to **connect form submission with async logic and UI state** in a clean, React-native way.
