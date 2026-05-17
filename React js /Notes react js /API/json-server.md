## What is **JSON Server**?

**JSON Server** is a small npm tool that turns a simple `db.json` file into a **full fake REST API** on your localhost.

You don’t write backend code.
It auto-creates endpoints like:

```
GET    /users
POST   /users
PUT    /users/1
PATCH  /users/1
DELETE /users/1
```

---

## Why developers use JSON Server

* Practice **CRUD** with real API behavior
* Test React/frontend without waiting for backend
* Prototype apps quickly
* Learn API methods safely on localhost

---

## Important: JSON Server is **NOT** used to make real **UPI**

**Unified Payments Interface (UPI)** is a **real banking payment network** run by
**National Payments Corporation of India**.

Apps like:

* **Google Pay**
* **PhonePe**
* **Paytm**

connect to **secure bank servers**, encryption, authentication, and NPCI’s network.

JSON Server cannot do any of this.

---

## Then why people say “use JSON Server for UPI app”?

They mean:

> “Use JSON Server to **simulate** the API while learning/building the UI.”

Example for learning:

Your fake `db.json`:

```json
{
  "payments": [
    { "id": 1, "to": "rahul@upi", "amount": 500, "status": "success" }
  ]
}
```

Your React app calls:

```
GET /payments
POST /payments
```

This **looks like** a payment API, but it’s only practice data on localhost.

---

## Difference

| Real UPI       | JSON Server  |
| -------------- | ------------ |
| Bank servers   | Your laptop  |
| Real money     | Fake data    |
| NPCI security  | No security  |
| Production API | Practice API |

---

### One-line answer

> JSON Server is used to **practice and simulate APIs** (like a fake UPI API) for learning frontend — **not** for real payments.
