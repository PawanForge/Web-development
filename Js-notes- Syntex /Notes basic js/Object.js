// ========================================
// 📌 JavaScript Objects – Complete Notes
// ========================================

// 1. Create Object
let user = {
  name: "Pawan",
  age: 22,
  city: "Delhi"
};

// 2. Access Property
console.log(user.name);
console.log(user["age"]);

// 3. Add New Property
user.email = "pawan@gmail.com";

// 4. Update Property
user.city = "Mumbai";

// 5. Delete Property
delete user.age;

// 6. Method inside Object
let student = {
  name: "Rahul",
  marks: 90,
  greet: function () {
    console.log("Hello", this.name);
  }
};
student.greet();

// 7. for...in Loop
for (let key in user) {
  console.log(key, user[key]);
}

// 8. Object.keys()
console.log(Object.keys(user));

// 9. Object.values()
console.log(Object.values(user));

// 10. Object.entries()
console.log(Object.entries(user));

// 11. Destructuring Object
let { name, city } = user;
console.log(name, city);

// 12. Spread Operator
let user2 = { ...user, country: "India" };
console.log(user2);
