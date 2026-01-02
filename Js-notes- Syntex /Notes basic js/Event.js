// ========================================
// 📌 JavaScript Events – Complete Notes
// ========================================

// 1. Click Event
let clickBtn = document.createElement("button");
clickBtn.innerText = "Click Me";
document.body.appendChild(clickBtn);

clickBtn.addEventListener("click", function () {
  alert("Button Clicked");           // Triggered on click
});

// 2. Mouseover & Mouseout
let hoverDiv = document.createElement("div");
hoverDiv.innerText = "Hover over me";
hoverDiv.style.width = "200px";
hoverDiv.style.height = "50px";
hoverDiv.style.backgroundColor = "lightblue";
hoverDiv.style.marginTop = "10px";
hoverDiv.style.textAlign = "center";
hoverDiv.style.lineHeight = "50px";
document.body.appendChild(hoverDiv);

hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.style.backgroundColor = "lightgreen"; // Mouse enters
});
hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.style.backgroundColor = "lightblue";  // Mouse leaves
});

// 3. Keydown & Keyup Event
let input = document.createElement("input");
input.placeholder = "Type something";
input.style.display = "block";
input.style.marginTop = "10px";
document.body.appendChild(input);

input.addEventListener("keydown", function (e) {
  console.log("Key Down:", e.key);   // When key is pressed
});

input.addEventListener("keyup", function (e) {
  console.log("Key Up:", e.key);     // When key is released
});

// 4. Focus & Blur Event
input.addEventListener("focus", function () {
  input.style.border = "2px solid green";  // Input selected
});
input.addEventListener("blur", function () {
  input.style.border = "";                 // Input deselected
});

// 5. Change Event
let select = document.createElement("select");
let option1 = document.createElement("option");
option1.value = "option1";
option1.innerText = "Option 1";
let option2 = document.createElement("option");
option2.value = "option2";
option2.innerText = "Option 2";
select.append(option1, option2);
document.body.appendChild(select);

select.addEventListener("change", function () {
  console.log("Selected Value:", select.value);  // When selection changes
});

// 6. Submit Event
let form = document.createElement("form");
let inputName = document.createElement("input");
inputName.placeholder = "Name";
inputName.required = true;
let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";
form.append(inputName, submitBtn);
form.style.marginTop = "10px";
document.body.appendChild(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();                         // Prevent page reload
  alert("Form Submitted: " + inputName.value);
});

// 7. Window Event – scroll & resize
window.addEventListener("scroll", function () {
  console.log("Scrolling...");
});

window.addEventListener("resize", function () {
  console.log("Window resized:", window.innerWidth, window.innerHeight);
});
