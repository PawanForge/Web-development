# Lazy Loading in React

## 1. What is Lazy Loading?

Lazy Loading means:

> “Load a component only when it is needed.”

Instead of loading all components at the start of the application, React loads some components later when the user requests them.

---

# 2. Why Lazy Loading is Used?

Normally, React loads all files together.

If the application becomes large:

* Loading becomes slow
* Bundle size increases
* Website performance decreases
* User waits longer

Lazy Loading solves this problem.

---

# 3. Main Purpose of Lazy Loading

## Purpose

* Improve website speed
* Reduce initial loading time
* Load heavy components only when required
* Better user experience
* Optimize performance

---

# 4. Real Life Example

Imagine YouTube.

When the app opens:

* Home page loads first
* Video editor page does NOT load immediately
* It loads only when user opens editor

This is Lazy Loading.

---

# 5. Normal Loading vs Lazy Loading

| Normal Loading               | Lazy Loading                |
| ---------------------------- | --------------------------- |
| All components load together | Components load when needed |
| Slow startup                 | Fast startup                |
| Large bundle size            | Smaller bundle size         |
| More memory usage            | Less memory usage           |

---

# 6. React Lazy Loading Syntax

React provides:

* `lazy()`
* `Suspense`

---

# 7. `lazy()` Function

## Definition

`lazy()` is used to dynamically import components.

### Syntax

```js
const User = lazy(() => import('./User'));
```

### Meaning

| Part               | Work                        |
| ------------------ | --------------------------- |
| `lazy()`           | Makes component lazy        |
| `import('./User')` | Loads component dynamically |
| `User`             | Component variable          |

---

# 8. `Suspense`

## Definition

`Suspense` shows a fallback UI while component is loading.

### Example

```js
<Suspense fallback={<h1>Loading...</h1>}>
    <User />
</Suspense>
```

---

# 9. Why `Suspense` is Needed?

Lazy component takes time to load.

During that time:

* Blank screen should not appear
* Loading message/spinner should appear

So React uses `Suspense`.

---

# 10. Flow of Lazy Loading

```text
User clicks button
        ↓
React requests component
        ↓
Component starts loading
        ↓
Suspense shows loading message
        ↓
Component loaded
        ↓
Component displayed
```

---

# 11. Complete Example

## User.js

```js
export default function User() {
    return (
        <>
            <h2>User Component Loaded</h2>
        </>
    )
}
```

---

## App.js

```js
import { lazy, Suspense, useState } from "react";

const User = lazy(() => import('./User'));

export default function App() {

    const [load, setLoad] = useState(false);

    return (
        <>
            <h1>Lazy Loading</h1>

            {
                load ?
                <Suspense fallback={<h3>Loading...</h3>}>
                    <User />
                </Suspense>
                : null
            }

            <button onClick={() => setLoad(true)}>
                Load User Component
            </button>
        </>
    )
}
```

---

# 12. Step-by-Step Explanation

---

## Step 1

```js
import { lazy, Suspense, useState } from "react";
```

### Work

| Import     | Purpose                |
| ---------- | ---------------------- |
| `lazy`     | Creates lazy component |
| `Suspense` | Shows loading UI       |
| `useState` | Controls loading       |

---

## Step 2

```js
const User = lazy(() => import('./User'));
```

### Work

React does NOT load `User` immediately.

It loads only when needed.

---

## Step 3

```js
const [load, setLoad] = useState(false);
```

### Work

Initially:

```js
load = false
```

So component will not show.

---

## Step 4

```js
load ?
<Suspense fallback={<h3>Loading...</h3>}>
    <User />
</Suspense>
: null
```

### Work

If:

```js
load = true
```

Then:

* User component loads
* Loading message appears first
* Then component displays

---

## Step 5

```js
<button onClick={() => setLoad(true)}>
```

### Work

When button clicked:

```js
setLoad(true)
```

Now component starts loading.

---

# 13. Internal Working

```text
Button Click
    ↓
State Changes
    ↓
React checks condition
    ↓
lazy() starts importing component
    ↓
Suspense shows fallback
    ↓
Import completed
    ↓
Component rendered
```

---

# 14. Dynamic Import

## Normal Import

```js
import User from './User';
```

Loads immediately.

---

## Dynamic Import

```js
import('./User')
```

Loads only when needed.

---

# 15. Advantages of Lazy Loading

## Benefits

### 1. Faster Initial Load

Application opens quickly.

---

### 2. Better Performance

Only required code loads.

---

### 3. Smaller Bundle Size

Reduces main JavaScript file size.

---

### 4. Better User Experience

Less waiting time.

---

### 5. Useful for Large Applications

Best for:

* Admin Panels
* Dashboards
* E-commerce sites
* Large React apps

---

# 16. Where Lazy Loading is Commonly Used?

| Area        | Example           |
| ----------- | ----------------- |
| Routing     | Different pages   |
| Dashboard   | Charts load later |
| E-commerce  | Product details   |
| Video apps  | Video player      |
| Admin panel | Analytics section |

---

# 17. Important Notes

## Rule 1

Lazy loaded component must be:

```js
default export
```

Correct:

```js
export default User;
```

---

## Rule 2

Always wrap lazy component inside:

```js
<Suspense>
```

---

# 18. Common Mistakes

## Mistake 1

```js
import User from './User';
```

❌ This is normal import.

---

## Mistake 2

```js
<User />
```

without `Suspense`

❌ Causes error.

---

## Mistake 3

Wrong:

```js
const User = lazy(import('./User'));
```

❌ Incorrect syntax.

Correct:

```js
const User = lazy(() => import('./User'));
```

---

# 19. Short Interview Definition

> Lazy Loading is a React optimization technique where components are loaded only when required using `lazy()` and `Suspense`.

---

# 20. One-Line Revision Notes

| Topic          | One Line                        |
| -------------- | ------------------------------- |
| Lazy Loading   | Load component only when needed |
| lazy()         | Dynamically imports component   |
| Suspense       | Shows fallback UI               |
| fallback       | Loading content                 |
| Dynamic Import | Import at runtime               |
| Benefit        | Faster application              |

---

# 21. Memory Trick

```text
lazy() → Load Later
Suspense → Wait & Show Loading
```

---

# 22. Quick Revision Diagram

```text
Component Needed?
       ↓
     YES
       ↓
lazy() imports component
       ↓
Suspense shows loading
       ↓
Component Loaded
       ↓
Render on Screen
```
