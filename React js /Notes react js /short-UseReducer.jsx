# useReducer Connection Format

```txt id="8ijhtw"
User Types
   ↓
onChange Event Runs
   ↓
dispatch(action)
   ↓
dispatch sends action to reducer
   ↓
reducer(state, action)
   ↓
reducer returns updated state
   ↓
React updates state
   ↓
Component re-render
   ↓
Updated UI shows
```

---

# Connection With Code

```jsx id="j61eaf"
<input
 onChange={(event)=>
   dispatch({
     type:"name",
     value:event.target.value
   })
 }
/>
```

↓

```js id="lhllq7"
dispatch(action)
```

↓

```js id="gnx1yt"
reducer(state, action)
```

↓

```js id="nccv6m"
return updatedState
```

↓

```js id="btt5w3"
state updates
```

↓

```jsx id="jtxzpn"
<h1>{state.name}</h1>
```

---

# Main Terms Connection

```txt id="9i7gv2"
Input → dispatch → reducer → state → UI
```

---

# Simple Meaning

| Term     | Work           |
| -------- | -------------- |
| Input    | User data      |
| dispatch | Send data      |
| action   | Message object |
| reducer  | Update state   |
| state    | Store data     |
| UI       | Show data      |

---

# One-Line Memory Trick

```txt id="m5wcb9"
dispatch sends → reducer updates → state stores → UI shows
```
