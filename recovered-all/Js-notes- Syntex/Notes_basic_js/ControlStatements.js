// ========================================
// 📌 JavaScript Control Statements – Notes
// ========================================

// ---------- IF ----------
let age = 20;
if (age >= 18) {
  console.log("You can vote");
}

// ---------- IF ELSE ----------
let age2 = 15;
if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ---------- ELSE IF ----------
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// ---------- SWITCH ----------
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}

// ---------- FOR LOOP ----------
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// ---------- WHILE LOOP ----------
let i = 1;
while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// ---------- DO WHILE LOOP ----------
let j = 1;
do {
  console.log("Do While Loop:", j);
  j++;
} while (j <= 5);

// ---------- FOR OF LOOP (Array) ----------
let arr = [10, 20, 30];
for (let value of arr) {
  console.log("For Of:", value);
}

// ---------- FOR IN LOOP (Object) ----------
let user = { name: "Pawan", age: 22 };
for (let key in user) {
  console.log("For In:", key, user[key]);
}

// ---------- BREAK & CONTINUE ----------
for (let k = 1; k <= 5; k++) {
  if (k === 3) continue;
  console.log("Break & Continue:", k);
}
