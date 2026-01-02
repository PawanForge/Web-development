// ========================================
// 📌 JavaScript DOM – Complete Notes
// ========================================

// 1. Select Element by ID
// getElementById → Select element using its HTML id
let title = document.getElementById("title"); 
// Example: <h1 id="title">Hello</h1>

// 2. Select Element by CSS Selector
// querySelector → Select first matching element
let para = document.querySelector(".text"); 
// Example: <p class="text">Paragraph</p>

// 3. Change Text
// innerText → Change visible text
title.innerText = "JavaScript DOM Updated"; 
// innerHTML → Can include HTML tags
para.innerHTML = "<b>This is DOM paragraph</b>";

// 4. Apply CSS Style
title.style.color = "blue";               // Text color
title.style.backgroundColor = "yellow";   // Background color
title.style.fontSize = "24px";            // Font size

// 5. Create New Element
// createElement → Make new element
let btn = document.createElement("button"); 
btn.innerText = "Click Me";                // Set button text
btn.style.padding = "10px";               // Style button
btn.style.marginTop = "10px";

// 6. Add Element to Page
// appendChild → Add element as last child
document.body.appendChild(btn);

// 7. Add Event Listener
// addEventListener → Run function on event
btn.addEventListener("click", function () {
  alert("Button Clicked");                 // Alert on click
});

// 8. Remove Element after some time
// remove() → Delete element from DOM
setTimeout(() => {
  btn.remove();                             // Button disappears
}, 5000);

// 9. Loop through multiple elements
let items = document.querySelectorAll(".item"); // Select all with class 'item'
items.forEach((el, index) => {
  el.style.color = "green";                 // Change text color
  el.innerText += ` - ${index + 1}`;       // Add index to text
});

// 10. Modify Attributes
let link = document.querySelector("a");     // Select first link
link.setAttribute("href", "https://www.google.com"); // Change href
link.setAttribute("target", "_blank");     // Open in new tab

// 11. Create List dynamically
let list = document.createElement("ul");   // Make ul element
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");   // Create li element
  li.innerText = `Item ${i}`;
  list.appendChild(li);                     // Add li to ul
}
document.body.appendChild(list);           // Add ul to body

// 12. Toggle Class
title.classList.add("highlight");          // Add class
title.classList.remove("highlight");       // Remove class
title.classList.toggle("highlight");       // Add if not exist, remove if exist
