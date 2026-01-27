
1️⃣ What is a Class?

Template for creating objects

Defines properties and methods


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let p1 = new Person("John", 25);
p1.greet(); // Hi, I am John

Tip:

constructor() → called automatically when new object is created

Methods inside class → automatically on prototype



---

2️⃣ Creating Objects

let obj1 = new Person("Alice", 30);

Each object has its own properties

Methods are shared via prototype (memory efficient)



---

3️⃣ Inheritance

One class can inherit from another using extends


class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age); // call parent constructor
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

let e1 = new Employee("Bob", 28, 50000);
e1.greet(); // Hi, I am Bob
e1.work();  // Bob is working

Tricky points:

Always use super() before accessing this in child constructor



---

4️⃣ Static Methods

Belong to class, not objects


class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 10)); // 15
// Cannot call via object: new Calculator().add() ❌


---

5️⃣ Getters and Setters

Used to control property access


class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value.toUpperCase();
  }
}

let p = new Person("john");
console.log(p.name); // JOHN
p.name = "alice";
console.log(p.name); // ALICE

Tip:

Getter → read

Setter → modify / validate



---

6️⃣ Private Fields (Tricky)

Use # for private property


class Person {
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  getSSN() {
    return this.#ssn;
  }
}

let p = new Person("John", 1234);
console.log(p.#ssn); // ❌ Error
console.log(p.getSSN()); // 1234

Interview trap:

Private fields cannot be accessed outside class



---

7️⃣ Prototype vs Instance Methods

class Person {
  sayHi() { console.log("Hi"); }
}

let p1 = new Person();
console.log(p1.hasOwnProperty('sayHi')); // false
console.log(Person.prototype.hasOwnProperty('sayHi')); // true

Tip:

Methods inside class → on prototype, not object

Properties → on instance



---

8️⃣ Common Tricky Interview Questions

Q1: Can we access class methods without new?

class Person {
  greet() { console.log("Hi"); }
}
Person.greet(); // ❌ Error

Answer: Only via object or make method static.


---

Q2: What’s the difference between object literal and class?

let obj = { name: "John", greet() {} }; // object literal

Object literal → single object, no template

Class → blueprint to create many objects



---

Q3: this inside class method

class Person {
  greet() { console.log(this); }
}
let p = new Person();
let fn = p.greet;
fn(); // ?

Answer:

this depends on call-site

Here, fn() → this = undefined (strict mode)



---

Q4: Adding methods dynamically

Person.prototype.sayBye = function() { console.log("Bye"); }
p.sayBye(); // Bye

✅ Allowed, works for all objects



---

Q5: Can constructor return something else?

class Person {
  constructor(name) { this.name = name; return {a:1}; }
}
let p = new Person("John");
console.log(p); // {a:1}

✅ If return object, it replaces instance

❌ If return primitive → ignored



---

🧠 Interview Focus Points

1. constructor usage


2. extends and super


3. static methods


4. getter / setter


5. Private fields #


6. Prototype vs instance methods


7. this behavior inside methods


8. Returning object from constructor


9. Difference between object literal & class


10. Event delegation + class method example (rare but sometimes tricky)




---

✅ Quick Memory Cheat Sheet:

Topic	Key Points

Class	Template for objects
Object	Instance of class
Constructor	Initialize properties
Static	Only class can call
Getter/Setter	Control access
Private #	True private fields
Prototype	Methods shared by all instances
Inheritance	extends + super

