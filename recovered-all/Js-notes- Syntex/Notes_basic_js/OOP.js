/* ===============================
   OBJECT ORIENTED PROGRAMMING
   =============================== */

/* OOP = Programming style based on objects
   Object = data (properties) + functions (methods)
*/


/* ===============================
   OBJECT CREATION
   =============================== */

const student = {
  name: "Pawan",
  age: 22,
  greet: function () {
    console.log("Hello " + this.name);
  }
};

student.greet();



/* ===============================
   CONSTRUCTOR FUNCTION
   =============================== */

// Used to create multiple objects

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    console.log(this.name + " is " + this.age + " years old");
  };
}

const p1 = new Person("Rahul", 21);
const p2 = new Person("Amit", 23);

p1.show();
p2.show();



/* ===============================
   CLASS (ES6)
   =============================== */

class User {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  info() {
    console.log(this.name + " lives in " + this.city);
  }
}

const u1 = new User("Pawan", "Delhi");
u1.info();



/* ===============================
   INHERITANCE
   =============================== */

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " is barking");
  }
}

const d1 = new Dog("Bruno");
d1.sound();
d1.bark();



/* ===============================
   METHOD OVERRIDING
   =============================== */

class Cat extends Animal {
  sound() {
    console.log(this.name + " says Meow");
  }
}

const c1 = new Cat("Kitty");
c1.sound();



/* ===============================
   ENCAPSULATION
   =============================== */

class BankAccount {
  constructor(balance) {
    this._balance = balance;  // private like variable
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }
}

const acc = new BankAccount(500);
acc.deposit(200);
console.log(acc.getBalance());



/* ===============================
   ABSTRACTION
   =============================== */

// Hide complex logic

class Car {
  start() {
    this._engineStart();
    console.log("Car Started");
  }

  _engineStart() {
    console.log("Engine running internally");
  }
}

const car1 = new Car();
car1.start();



/* ===============================
   POLYMORPHISM
   =============================== */

class Shape {
  draw() {
    console.log("Drawing Shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

const s1 = new Shape();
const s2 = new Circle();

s1.draw();
s2.draw();



/* ===============================
   PROTOTYPE
   =============================== */

function Mobile(name) {
  this.name = name;
}

Mobile.prototype.show = function () {
  console.log("Mobile: " + this.name);
};

const m1 = new Mobile("Samsung");
m1.show();
