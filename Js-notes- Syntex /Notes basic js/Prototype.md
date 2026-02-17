

🔹 What is Prototype? (Very Simple)

👉 A prototype is just an object where shared methods are stored.

When you create objects using a function and new, those objects share the same prototype.

Think of it like this:

> Prototype = a shared toolbox for all objects created from a function.




---

🔹 Simple Example

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};

const p1 = new Person("A");
const p2 = new Person("B");

Now:

p1 has name

p2 has name

But both share sayHi() from the prototype


So:

p1.sayHi(); // Hi A
p2.sayHi(); // Hi B

They don’t each have their own copy of sayHi.

They share one common function from the prototype.


---

🔹 Why Prototype is Important?

Without prototype:

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log("Hi " + this.name);
  };
}

Now every object gets its own copy of sayHi() ❌
That wastes memory.

With prototype ✔
All objects share one function.


---

🔹 How It Works Internally

When you do:

const p1 = new Person("A");

JavaScript does:

1. Create empty object { }


2. Link it to Person.prototype


3. Set this to that object


4. Return it



So internally:

p1 → Person.prototype → Object.prototype → null

This is called the prototype chain.


---

🔹 Very Important Rule

When you try to access something:

p1.sayHi()

JavaScript checks:

1. Is sayHi inside p1? ❌


2. Is it inside Person.prototype? ✔


3. If not there, go up the chain.




---

🔹 One-Line Definition

Prototype =
👉 A shared object that contains properties and methods for all instances created from a constructor function.
