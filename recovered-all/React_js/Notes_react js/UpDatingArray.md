
🟢 First Understand: What is Copy?

When we copy an object or array, there are 2 ways:

1. Shallow Copy


2. Deep Copy




---

🟢 1️⃣ Shallow Copy (Simple Meaning)

👉 It copies only the top layer.
👉 Inside objects are NOT copied, only their address is copied.

Example:

const person = {
  name: "Pawan",
  address: {
    city: "Delhi"
  }
};

const copy = { ...person };

Now:

person is new object

BUT address inside is SAME


If you change:

copy.address.city = "Mumbai";

Then original also changes 😲

Because address was not fully copied.


---

🔎 Easy Line to Remember:

> Shallow copy copies outside, not inside.




---

🟢 2️⃣ Deep Copy (Simple Meaning)

👉 It copies everything completely.
👉 Inside objects are also newly created.

Example:

const deepCopy = JSON.parse(JSON.stringify(person));

Now:

Everything is new

Changing deepCopy will NOT change original



---

🔎 Easy Line to Remember:

> Deep copy copies outside and inside both.




---

🟢 Now Your React Example

Your state:

const [detailes, setDetailes] = useState([
  { name: "anil", age: "29" },
  { name: "sam", age: "25" },
  { name: "peter", age: "29" }
]);

This is:

Array
→ Object
→ Object
→ Object


---

🟢 When You Use Spread

setDetailes([...detailes]);

This makes:

✔ New array
❌ Same objects inside

So this is Shallow Copy.


---

🟢 Why React Uses Shallow Copy?

React checks only:

Old Array === New Array ?

If different → Re-render
If same → No re-render

React does NOT deeply check inside objects.

That’s why shallow copy is enough in most cases.


---

🟢 Why Direct Mutation is Bad?

Bad ❌

detailes[2].age = "30";

Because:

You changed original object directly

React may not detect properly

Can cause bugs



---

🟢 Correct Way

setDetailes(prev => {
  const newData = [...prev];

  newData[newData.length - 1] = {
    ...newData[newData.length - 1],
    age: "30"
  };

  return newData;
});

Now:

✔ New array
✔ New object (only changed one)
✔ Safe update


---

🟢 Very Simple Comparison

Imagine:

Original = Bag
Inside = Books

Shallow Copy:

You copy bag
But books inside are same

Deep Copy:

You copy bag
And also duplicate all books


---

🟢 When Do We Need Deep Copy?

Only when:

Object inside object inside object

You want full separation

Complex nested data


In normal React state → shallow copy is enough.


---

🟢 Final 5-Line Summary

✔ Spread operator = Shallow copy
✔ Shallow copy = top level only
✔ Deep copy = full copy
✔ React checks reference, not inside data
✔ Never mutate state directly

