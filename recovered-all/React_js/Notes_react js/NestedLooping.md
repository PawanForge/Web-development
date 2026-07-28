# Nested Looping in React

---

# 1. What is Nested Looping?

**Nested looping** means using **one loop inside another loop**.

In React, nested looping is commonly used when data contains **nested or hierarchical structures**, such as arrays inside objects or arrays inside arrays.

### Common Examples

| Parent Data   | Child Data |
| ------------- | ---------- |
| 🏫 Colleges   | Students   |
| 🏢 Companies  | Employees  |
| 🛒 Orders     | Products   |
| 📝 Blogs      | Comments   |
| 📂 Categories | Items      |
| 🌍 Countries  | Cities     |

### Example

```text id="5j4x3m"
College
   │
   ├── Student 1
   ├── Student 2
   └── Student 3
```

Here:

```text id="2f6v9p"
Outer Loop
    ↓
Colleges

Inner Loop
    ↓
Students
```

👉 In React JSX, we commonly use `.map()` for nested looping.

---

# 2. Why Do We Use Nested Looping in React?

Nested looping is used because real-world data is often **hierarchical**.

A single loop may not be enough when one item contains another collection of items.

### Example

One college can have multiple students:

```text id="4v9s2n"
College Data
    │
    ├── FET Alwar
    │      ├── PJ
    │      └── PC
    │
    └── IIT Delhi
           └── SS
```

Therefore:

```text id="j5r8xq"
First Loop
    ↓
Loop through Colleges

Second Loop
    ↓
Loop through Students of Each College
```

### Benefits

```text id="x1c7km"
┌────────────────────────────────────┐
│      Why Use Nested Looping?       │
├────────────────────────────────────┤
│                                    │
│ ✔ Handles hierarchical data        │
│                                    │
│ ✔ Displays parent-child data       │
│                                    │
│ ✔ Avoids hard-coded UI             │
│                                    │
│ ✔ Makes UI dynamic                 │
│                                    │
│ ✔ Works with API data              │
│                                    │
└────────────────────────────────────┘
```

---

# 3. Purpose of Nested Looping

Nested looping is mainly used to:

```text id="j9q4kd"
┌─────────────────────────────────────┐
│        Purpose of Nested Looping    │
├─────────────────────────────────────┤
│                                     │
│ ✔ Display parent-child relationships│
│                                     │
│ ✔ Avoid hard-coded UI               │
│                                     │
│ ✔ Create reusable components        │
│                                     │
│ ✔ Render dynamic nested data        │
│                                     │
│ ✔ Handle complex JSON structures    │
│                                     │
│ ✔ Display related child records     │
│                                     │
└─────────────────────────────────────┘
```

### Example Relationship

```text id="1t9k5v"
Company
   │
   ├── Employee 1
   ├── Employee 2
   └── Employee 3
```

The company is the **parent**, and employees are the **children**.

---

# 4. How Nested Looping Works in React

Nested looping generally follows these steps:

### Step 1️⃣ — Store data in an array

```jsx id="d4j3qp"
const collegeData = [];
```

### Step 2️⃣ — Each object contains child data

```jsx id="f7m2kx"
{
  name: "FET Alwar",
  students: []
}
```

### Step 3️⃣ — Use `.map()` for the outer array

```jsx id="9n3h6x"
collegeData.map(...)
```

### Step 4️⃣ — Use another `.map()` for the child array

```jsx id="z8k4pw"
college.students.map(...)
```

### Step 5️⃣ — Return JSX from both loops

```jsx id="q3r7mv"
<div>
  ...
</div>
```

### Step 6️⃣ — Provide a unique `key` for each rendered list item

```jsx id="p6x2nt"
key={college.id}
key={student.id}
```

---

# 5. Nested Looping Flow

```text id="q8m3vk"
              Parent Array
                  │
                  ▼
          collegeData.map()
                  │
                  ▼
          Current College
                  │
                  ├── College Name
                  │
                  ├── College City
                  │
                  └── Students Array
                          │
                          ▼
                 students.map()
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
           Student 1   Student 2   Student 3
              │           │           │
              ▼           ▼           ▼
             JSX         JSX         JSX
```

### Simple Formula ⭐

```text id="h4y7pn"
Parent Array
    ↓
Outer map()
    ↓
Parent Item
    ↓
Child Array
    ↓
Inner map()
    ↓
Child Items
    ↓
JSX
```

---

# 6. Syntax of Nested Looping

The general syntax is:

```jsx id="6c2m7a"
array.map((item, index) => (
  <div key={index}>
    {
      item.childArray.map((child, i) => (
        <p key={i}>
          {child.property}
        </p>
      ))
    }
  </div>
))
```

### Structure

```text id="3k9w2f"
Outer map()
│
├── Parent JSX
│
└── Inner map()
     │
     ├── Child JSX
     ├── Child JSX
     └── Child JSX
```

---

# 7. Example — College and Students

We will create a nested data structure where:

* One college can have multiple students
* Each college has a name and city
* Each student has a name and age

---

## 📌 Step 1: Create the Data Structure

```jsx id="x3v9sm"
const collegeData = [
  {
    name: "FET Alwar",
    city: "Alwar",
    students: [
      {
        name: "PJ",
        age: 29
      },
      {
        name: "PC",
        age: 26
      }
    ]
  },
  {
    name: "IIT Delhi",
    city: "Delhi",
    students: [
      {
        name: "SS",
        age: 30
      }
    ]
  }
];
```

### Data Structure

```text id="4j8n2v"
collegeData
│
├── College 1
│     │
│     ├── name: "FET Alwar"
│     ├── city: "Alwar"
│     │
│     └── students
│           ├── PJ, 29
│           └── PC, 26
│
└── College 2
      │
      ├── name: "IIT Delhi"
      ├── city: "Delhi"
      │
      └── students
            └── SS, 30
```

---

# 8. JSX with Nested Looping

```jsx id="7p4m2x"
return (
  <div>
    <h1>Nested Looping with Components</h1>

    {
      collegeData.map((college, index) => (
        <div key={index}>
          <h2>
            College Name: {college.name}
          </h2>

          <h3>
            City: {college.city}
          </h3>

          <ul>
            {
              college.students.map((student, i) => (
                <li key={i}>
                  Name: {student.name},
                  Age: {student.age}
                </li>
              ))
            }
          </ul>
        </div>
      ))
    }

  </div>
);
```

---

# 9. Complete Working Example

```jsx id="q6y3vb"
function App() {
  const collegeData = [
    {
      name: "FET Alwar",
      city: "Alwar",
      students: [
        {
          name: "PJ",
          age: 29
        },
        {
          name: "PC",
          age: 26
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      students: [
        {
          name: "SS",
          age: 30
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Nested Looping with Components</h1>

      {
        collegeData.map((college, index) => (
          <div key={index}>
            <h2>
              College Name: {college.name}
            </h2>

            <h3>
              City: {college.city}
            </h3>

            <ul>
              {
                college.students.map((student, i) => (
                  <li key={i}>
                    Name: {student.name},
                    Age: {student.age}
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
```

---

# 10. Expected Output

```text id="5v8k3n"
Nested Looping with Components


College Name: FET Alwar
City: Alwar

  • Name: PJ, Age: 29
  • Name: PC, Age: 26


College Name: IIT Delhi
City: Delhi

  • Name: SS, Age: 30
```

### Visual Structure

```text id="q3m7xk"
┌─────────────────────────────────┐
│ College: FET Alwar              │
│ City: Alwar                     │
│                                 │
│  ├── PJ  → Age 29               │
│  └── PC  → Age 26               │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ College: IIT Delhi              │
│ City: Delhi                     │
│                                 │
│  └── SS  → Age 30               │
└─────────────────────────────────┘
```

---

# 11. Detailed Explanation of the Code

---

## 🔹 `collegeData`

`collegeData` is an array.

Each element in the array represents one college.

```jsx id="7j4p2m"
const collegeData = [
  {
    name: "FET Alwar",
    city: "Alwar",
    students: []
  }
];
```

Each college object contains:

```text id="n8x3kq"
College Object
│
├── name
├── city
└── students
```

The `students` property is itself an array.

Therefore, we have **nested data**.

---

## 🔹 Outer `.map()` — Colleges Loop

The outer loop is:

```jsx id="2g7m9c"
collegeData.map((college, index) => (
  ...
))
```

This loops through every college.

### First Iteration

```text id="6p3x8v"
college = FET Alwar
```

### Second Iteration

```text id="9k2m5q"
college = IIT Delhi
```

The outer loop displays:

* College name
* College city
* Student list

---

## 🔹 Inner `.map()` — Students Loop

The inner loop is:

```jsx id="4r8n2x"
college.students.map((student, i) => (
  ...
))
```

This runs for the students belonging to the **current college**.

For FET Alwar:

```text id="y5m7kp"
students
    │
    ├── PJ
    └── PC
```

For IIT Delhi:

```text id="t3x9mv"
students
    │
    └── SS
```

This is the **nested loop**.

---

# 12. Outer Loop vs Inner Loop

| Loop              | Data               | Purpose                |
| ----------------- | ------------------ | ---------------------- |
| **Outer `map()`** | `collegeData`      | Loops through colleges |
| **Inner `map()`** | `college.students` | Loops through students |
| **Outer Item**    | `college`          | Current college        |
| **Inner Item**    | `student`          | Current student        |

### Visual Representation

```text id="8k4n2p"
collegeData.map()
│
├── FET Alwar
│     │
│     └── students.map()
│           ├── PJ
│           └── PC
│
└── IIT Delhi
      │
      └── students.map()
            └── SS
```

---

# 13. JSX Rendering

Different JSX elements have different responsibilities.

| JSX Element | Purpose                    |
| ----------- | -------------------------- |
| `<h1>`      | Main page heading          |
| `<div>`     | Container for each college |
| `<h2>`      | College name               |
| `<h3>`      | College city               |
| `<ul>`      | Student list container     |
| `<li>`      | Individual student         |

### Structure

```text id="c7m3x9"
<h1>
   │
   ├── College 1
   │      ├── <h2> College Name
   │      ├── <h3> City
   │      └── <ul>
   │            ├── <li> Student 1
   │            └── <li> Student 2
   │
   └── College 2
          ├── <h2> College Name
          ├── <h3> City
          └── <ul>
                └── <li> Student 1
```

---

# 14. Understanding Nested `map()` Step-by-Step

Let's understand the complete process.

### Step 1️⃣ — React reads `collegeData`

```text id="w8p4q2"
2 Colleges
```

### Step 2️⃣ — Outer `map()` starts

```jsx id="x6m3nv"
collegeData.map(...)
```

### Step 3️⃣ — First college is selected

```text id="q9k2m7"
FET Alwar
```

### Step 4️⃣ — College information is displayed

```text id="h4x8p1"
College Name: FET Alwar
City: Alwar
```

### Step 5️⃣ — Inner `map()` starts

```jsx id="r7m3k9"
college.students.map(...)
```

### Step 6️⃣ — Students are displayed

```text id="z5p2x8"
PJ → Age 29
PC → Age 26
```

### Step 7️⃣ — Outer loop moves to next college

```text id="m8q4k1"
IIT Delhi
```

### Step 8️⃣ — Inner loop displays its students

```text id="n3x7v5"
SS → Age 30
```

---

# 15. Complete Nested Loop Flow

```text id="r2m8x6"
              collegeData
                   │
                   ▼
           Outer map() Loop
                   │
                   ▼
             Current College
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
      College Name       College City
          │
          ▼
      students Array
          │
          ▼
           Inner map()
          │
     ┌────┼────┐
     ▼    ▼    ▼
   PJ    PC    SS
     │    │    │
     ▼    ▼    ▼
    JSX  JSX  JSX
```

---

# 16. Important Rules in Nested Looping

```text id="6m9x2p"
┌────────────────────────────────────┐
│      Nested Looping Rules          │
├────────────────────────────────────┤
│                                    │
│ ✅ Use map() for array rendering   │
│                                    │
│ ✅ Use an outer map() for parent   │
│                                    │
│ ✅ Use an inner map() for child    │
│                                    │
│ ✅ Add a key to each list item     │
│                                    │
│ ✅ Prefer stable unique IDs        │
│                                    │
│ ✅ Keep JSX readable               │
│                                    │
│ ✅ Maintain parent-child structure │
│                                    │
└────────────────────────────────────┘
```

---

# 17. Important Rule About `key` ⭐

In nested lists, each `.map()` should provide a key for the elements it directly renders.

### Example

```jsx id="q5n8m2"
collegeData.map((college) => (
  <div key={college.id}>

    {
      college.students.map((student) => (
        <li key={student.id}>
          {student.name}
        </li>
      ))
    }

  </div>
))
```

### Best Practice

Use unique IDs when available:

```jsx id="7m4x9k"
key={college.id}
```

and:

```jsx id="2p8n5v"
key={student.id}
```

### Avoid When Possible

```jsx id="4x7m1q"
key={index}
```

Using the index can be acceptable for static lists that never change order, but stable IDs are preferred for dynamic data.

---

# 18. Real-World Use Cases

Nested looping is commonly used in real-world applications.

### 🏫 College → Students

```text id="m2x8k4"
College
   ↓
Students
```

### 🏢 Company → Employees

```text id="p7n3q9"
Company
   ↓
Departments
   ↓
Employees
```

### 🛒 Orders → Products

```text id="v5m8x2"
Order
   ↓
Products
```

### 📝 Blog → Comments

```text id="k4q9m1"
Blog Post
   ↓
Comments
```

### 📂 Category → Items

```text id="x8p3n6"
Category
   ↓
Products
```

### 🌍 Country → Cities

```text id="r2m7k5"
Country
   ↓
Cities
```

---

# 19. Nested Looping with Real-World API Data

In real applications, nested data often comes from an API.

Example:

```jsx id="n6x3q8"
const data = [
  {
    id: 1,
    name: "Electronics",
    products: [
      {
        id: 101,
        name: "Laptop"
      },
      {
        id: 102,
        name: "Mobile"
      }
    ]
  }
];
```

The structure is:

```text id="w4m9p2"
Category
    │
    ├── Category Name
    │
    └── Products
          │
          ├── Laptop
          └── Mobile
```

Rendering:

```jsx id="j8x5m3"
{
  data.map((category) => (
    <div key={category.id}>
      <h2>{category.name}</h2>

      {
        category.products.map((product) => (
          <p key={product.id}>
            {product.name}
          </p>
        ))
      }
    </div>
  ))
}
```

This is a very common pattern when rendering nested JSON returned from APIs.

---

# 20. Common Mistakes ❌

## Mistake 1: Forgetting the Inner `map()`

If the data contains an array inside an object, you need another loop to render the child items.

❌

```jsx id="j5m8x2"
{
  collegeData.map((college) => (
    <div>
      {college.students}
    </div>
  ))
}
```

✅

```jsx id="p7x3n9"
{
  collegeData.map((college) => (
    <div key={college.id}>
      {
        college.students.map((student) => (
          <p key={student.id}>
            {student.name}
          </p>
        ))
      }
    </div>
  ))
}
```

---

## Mistake 2: Forgetting `key`

❌

```jsx id="n4m8q2"
collegeData.map((college) => (
  <div>
    {college.name}
  </div>
))
```

✅

```jsx id="x6p3k9"
collegeData.map((college) => (
  <div key={college.id}>
    {college.name}
  </div>
))
```

---

## Mistake 3: Using the Wrong Data

Make sure the inner loop uses the child array of the **current parent**.

Correct:

```jsx id="r8m2x5"
college.students.map(...)
```

Not:

```jsx id="q4n7p1"
collegeData.students.map(...)
```

---

# 21. Best Practices ✅

```text id="m3x8q6"
┌────────────────────────────────────┐
│    Nested Looping Best Practices   │
├────────────────────────────────────┤
│                                    │
│ ✔ Use map() for array rendering    │
│                                    │
│ ✔ Use stable IDs as keys           │
│                                    │
│ ✔ Keep parent-child data organized │
│                                    │
│ ✔ Keep nested JSX readable         │
│                                    │
│ ✔ Use meaningful variable names    │
│                                    │
│ ✔ Extract complex nested UI into   │
│   reusable components when needed  │
│                                    │
└────────────────────────────────────┘
```

---

# 22. Interview Questions ⭐

## Q1. What is nested looping in React?

> Nested looping in React means using one `.map()` inside another `.map()` to render hierarchical or nested data dynamically in JSX.

---

## Q2. Why do we use nested looping?

> We use nested looping when one parent item contains multiple child items, such as a college containing multiple students or an order containing multiple products.

---

## Q3. How do you perform nested looping in React?

> We use an outer `.map()` to iterate over the parent array and an inner `.map()` to iterate over the child array.

Example:

```jsx id="y7m3p9"
{
  colleges.map((college) => (
    <div key={college.id}>
      {
        college.students.map((student) => (
          <p key={student.id}>
            {student.name}
          </p>
        ))
      }
    </div>
  ))
}
```

---

## Q4. What is the outer loop responsible for?

> The outer loop renders the parent data, such as colleges, companies, categories, or orders.

---

## Q5. What is the inner loop responsible for?

> The inner loop renders the child data associated with the current parent item, such as students, employees, products, or items.

---

## Q6. Why is `key` important in nested looping?

> `key` gives React a stable identity for each rendered list item and helps React efficiently update the UI when list items change.

---

# 23. One-Line Definition — Exam Ready ⭐

> **Nested looping in React is the process of using one `.map()` loop inside another `.map()` loop to dynamically render hierarchical or nested data in JSX.**

---

# 24. Final Summary ⭐

```text id="x7m2p8"
┌──────────────────────────────────────┐
│         NESTED LOOPING               │
├──────────────────────────────────────┤
│                                      │
│ ✔ Used for nested or hierarchical   │
│   data                               │
│                                      │
│ ✔ Outer map() handles parent data   │
│                                      │
│ ✔ Inner map() handles child data    │
│                                      │
│ ✔ Used for parent-child relationships│
│                                      │
│ ✔ Common with API data              │
│                                      │
│ ✔ Always use keys for list items    │
│                                      │
│ ✔ Prefer stable IDs for keys        │
│                                      │
└──────────────────────────────────────┘
```

---

# 25. Most Important Concept ⭐

```text id="p4x9m2"
Parent Array
    ↓
Outer map()
    ↓
Parent Item
    ↓
Child Array
    ↓
Inner map()
    ↓
Child Item
    ↓
JSX
    ↓
React UI
```

### Example to Remember

```jsx id="k8m3x7"
{
  collegeData.map((college) => (
    <div key={college.id}>
      
      <h2>{college.name}</h2>

      {
        college.students.map((student) => (
          <p key={student.id}>
            {student.name}
          </p>
        ))
      }

    </div>
  ))
}
```

> **In short:**
> **Nested Looping in React = Outer `map()` for Parent Data + Inner `map()` for Child Data + Unique `key` for Each List Item**
