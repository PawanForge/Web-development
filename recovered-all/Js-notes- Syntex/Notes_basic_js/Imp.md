
---

1️⃣ const

const prevents reassignment of a variable.

It does NOT make the object immutable.

You can still modify object properties.


Example idea:

❌ Cannot do: obj = {}

✅ Can do: obj.name = "New"


So const protects the variable binding, not the object content.


---

2️⃣ Objects (Reference Type)

Objects in JavaScript are stored by reference.

That means:

The variable stores a reference (memory address).

Nested objects are separate references inside the main object.


Example concept:

details is its own object in memory.

The main object just holds a reference to it.



---

3️⃣ Object.freeze()

Object.freeze() makes an object:

Not editable

Not extendable

Not deletable


After freezing:

You cannot change existing properties.

You cannot add new properties.

You cannot remove properties.



---

4️⃣ Shallow vs Deep Freeze

This is the most important topic here.

🔹 Shallow Freeze

Object.freeze() only freezes the first level of the object.

It does NOT freeze:

Nested objects

Objects inside objects


🔹 Deep Freeze

Deep freeze means:

Freeze the object

Freeze all nested objects inside it

Freeze objects inside those objects


JavaScript does NOT provide deep freeze automatically.


---

5️⃣ Nested Objects

When an object contains another object:

{
  details: {
    age: 10
  }
}

That inner object:

Is independent

Has its own reference

Is not automatically affected unless explicitly frozen



---

6️⃣ Mutability vs Immutability

Mutable → Can change

Immutable → Cannot change


Objects are mutable by default in JavaScript.

Object.freeze() makes an object immutable (but only shallowly).


---

Final List of Concepts Covered

const

Reference types

Object mutability

Object.freeze()

Shallow vs Deep freeze

Nested objects



