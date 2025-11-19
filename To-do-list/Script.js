const inputBox = document.getElementById("inputBox");

const container = document.getElementById("list-container");

function AddTask() {

  const taskText = inputBox.value.trim();

  if (taskText === '') {

    alert("Please enter the list");

    return;

  }

  let li = document.createElement("li");

  li.innerText = taskText;

  let delBtn = document.createElement("span");

  delBtn.innerHTML = "❎";

  delBtn.style.marginLeft = "10px";

  delBtn.style.cursor = "pointer";

  delBtn.onclick = function () {

    li.remove();

 };


  let editBtn = document.createElement("span");

  editBtn.innerHTML = "✏️";

  editBtn.style.marginLeft = "50px";

  editBtn.style.cursor = "pointer";

  editBtn.onclick = function () {
    let newText = prompt("Edit your task:", taskText);

    if (newText) {

      li.firstChild.textContent = newText;

    }

  };

  li.appendChild(editBtn);

  li.appendChild(delBtn);

  li.addEventListener("click", function (e) {

    if (e.target.tagName === "SPAN") return;

    li.classList.toggle("checked");

  });

  container.appendChild(li);

  inputBox.value = "";

}

