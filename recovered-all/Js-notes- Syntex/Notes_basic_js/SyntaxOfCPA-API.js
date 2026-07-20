/* ===============================
   CALLBACK FUNCTION
   =============================== */

// Callback = function passed as argument and executed later

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye Bye");
}

greet("Pawan", sayBye);

// Problem: Callback Hell (nested callbacks)

/*
task1(() => {
  task2(() => {
    task3(() => {
      console.log("Done");
    });
  });
});
*/



/* ===============================
   PROMISE
   =============================== */

// Promise stores future value (success or failure)

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task Successful");
  } else {
    reject("Task Failed");
  }
});



/* ===============================
   THEN / CATCH / FINALLY
   =============================== */

myPromise
  .then((data) => {
    console.log(data);        // success value
    return "Next Step";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error:", error);  // failure
  })
  .finally(() => {
    console.log("Process Finished"); // always run
  });



/* ===============================
   ASYNC / AWAIT
   =============================== */

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function fetchData() {
  try {
    let result = await getData(); // wait for promise
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();



/* ===============================
   ASYNC IIFE
   =============================== */

// IIFE = function that runs automatically

(async function () {
  let data = await getData();
  console.log("IIFE:", data);
})();



/* ===============================
   API FETCH - GET
   =============================== */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())  // convert to JS object
  .then((data) => console.log(data))
  .catch((err) => console.log("API Error:", err));



/* ===============================
   API FETCH - ASYNC / AWAIT
   =============================== */

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

getPosts();



/* ===============================
   API FETCH - POST
   =============================== */

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Hello",
    body: "API Data",
    userId: 1
  })
})
.then((res) => res.json())
.then((data) => console.log(data));



/* ===============================
   API FETCH - PUT
   =============================== */

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Updated Title"
  })
})
.then((res) => res.json())
.then((data) => console.log(data));



/* ===============================
   API FETCH - DELETE
   =============================== */

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(() => console.log("Deleted Successfully"));
