You can create a **fake REST API** on your machine in minutes using **JSON Server**. Perfect for React practice.

---

## 1) Install JSON Server (global)

```bash
npm install -g json-server
```

Check version:

```bash
json-server --version
```

---

## 2) Create a project folder & database file

```bash
mkdir my-api
cd my-api
```

Create a file named **db.json**

```json
{
  "users": [
    { "id": 1, "name": "Pawan", "email": "pawan@gmail.com" }
  ]
}
```

---

## 3) Start the API server

```bash
json-server --watch db.json --port 3000
```

You’ll see endpoints generated automatically.

---

## 4) Your API endpoints (auto-created)

Open in browser (**GET works directly**):

* [http://localhost:3000/users](http://localhost:3000/users)
* [http://localhost:3000/users/1](http://localhost:3000/users/1)

These behave like a real REST API.

---

## 5) Test all API methods

### GET

```bash
curl http://localhost:3000/users
```

### POST

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul","email":"rahul@gmail.com"}'
```

### PUT

```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Pawan Kumar","email":"new@gmail.com"}'
```

### PATCH

```bash
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email":"patch@gmail.com"}'
```

### DELETE

```bash
curl -X DELETE http://localhost:3000/users/1
```

---

## 6) Use this API in React (fetch)

```js
fetch("http://localhost:3000/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## What JSON Server gives you

* Full REST API
* Auto IDs
* Works like real backend
* Perfect for CRUD practice

---

### One-line

> JSON Server turns a simple `db.json` file into a real REST API on `localhost`.
