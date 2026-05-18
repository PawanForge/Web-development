Here are **clear notes** for:

> **What is POST method, why it is used, and where it is used**

---

## 🔷 What is POST (API Method)?

**POST** is an HTTP method used to **send data to the server to create a new resource**.

* Sends data in the **request body**
* Server **stores** the data (DB / file)
* Returns **created data** as response

---

## 🎯 Why POST is used?

| Reason               | Explanation                      |
| -------------------- | -------------------------------- |
| Create new data      | Add user, product, payment, etc. |
| Send form data       | From UI to backend               |
| Secure data transfer | Data sent in body (not URL)      |
| Works with JSON      | Perfect for APIs                 |

---

## 🧠 Where POST is used in apps?

| App feature      | POST usage                 |
| ---------------- | -------------------------- |
| Register user    | Send name, email, password |
| Login            | Send credentials           |
| Add product      | Send product details       |
| UPI/payment demo | Send amount, receiver      |
| Contact form     | Send message data          |

---

## 🔁 How POST works (flow)

```
React Form → POST request → API → Database → Response
```

Example body sent:

```json
{
  "name": "Pawan",
  "email": "pawan@gmail.com"
}
```

---

## 💻 Example in React

```js
fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email })
});
```

---

## 🆚 Difference from GET

| GET         | POST                |
| ----------- | ------------------- |
| Read data   | Create data         |
| No body     | Has body            |
| Data in URL | Data in body        |
| Safe        | Changes server data |

---

## ✅ Key terms

* Request body
* JSON data
* Create resource
* Form submission
* API integration

---

### One-line summary

> **POST method is used to send form data from frontend to API to create new data on the server.**
