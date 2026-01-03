
1. What are Props in React?

Props (Properties) are used to pass data from one component to another (parent → child).

Props are read-only

Child components cannot modify props

Props help make components reusable & dynamic



---

2. Why Props are Used?

✔ Share data between components
✔ Reuse same component with different data
✔ Maintain one-way data flow
✔ Improve code readability and structure


---

3. Basic Props Example

Parent Component (App.jsx)

function App() {
  return (
    <div>
      <User name="Anil Sidhu" />
    </div>
  );
}

export default App;

Child Component (User.jsx)

function User(props) {
  return <h1>User Name: {props.name}</h1>;
}

export default User;


---

4. Props with Destructuring (Best Practice)

function User({ name }) {
  return <h1>User Name: {name}</h1>;
}

✔ Cleaner
✔ Recommended in real projects


---

5. Passing Multiple Props

Parent

<User name="Anil" age={29} email="anil@gmail.com" />

Child

function User({ name, age, email }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
}


---

6. Default Props (IMPORTANT 🔥)

What are Default Props?

Default Props provide a fallback value when a prop is not passed from the parent component.

👉 Prevents undefined errors
👉 Makes components safer & reusable


---

7. Why Default Props are Used?

✔ Avoid undefined values
✔ Provide default behavior
✔ Improve component reliability


---

8. Default Props – Example

Child Component (User.jsx)

function User({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

User.defaultProps = {
  name: "Guest User",
  age: 18
};

export default User;

Parent Component

<User />

Output

Name: Guest User
Age: 18


---

9. Default Props with One Missing Value

<User name="Anil" />

Output

Name: Anil
Age: 18


---

10. Default Props Using Function Parameters (Modern Way)

function User({ name = "Guest User", age = 18 }) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
}

✔ Preferred in modern React
✔ Cleaner syntax


---

11. Passing Object as Props

Parent

const userObj = {
  name: "Anil",
  age: 29,
  email: "anil@gmail.com"
};

<User user={userObj} />

Child

function User({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}


---

12. Passing Array as Props

Parent

const colleges = ["IET", "DU", "IIT"];

<Student colleges={colleges} />

Child

function Student({ colleges }) {
  return (
    <ul>
      {colleges.map((college, index) => (
        <li key={index}>{college}</li>
      ))}
    </ul>
  );
}


---

13. Props with JSX (Children / Wrapper)

What is children Prop?

children allows passing JSX content to components.


---

Wrapper Component

function Wrapper({ children }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      {children}
    </div>
  );
}

export default Wrapper;

Usage

<Wrapper>
  <h1>Hello Everyone</h1>
  <h2>Wrapper Class</h2>
</Wrapper>


---

14. Props vs State (Quick Difference)

Props	State

Read-only	Mutable
Passed from parent	Managed inside component
Used for data	Used for behavior



---

15. Key Interview Points ⭐

✔ Props are immutable
✔ Default props prevent undefined errors
✔ Use destructuring
✔ children is a special prop
✔ Data flows Parent → Child


---

16. Final One-Line Definition (Exam Ready)

> Props are read-only objects used to pass data from parent components to child components in React. Default props provide fallback values when props are not passed.




