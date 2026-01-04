
const inputBox = document.getElementById("inputBox");
const container = document.getElementById("list-container");

function AddTask() {

  const taskText = inputBox.value.trim();

  if (taskText === '') {
    alert("Please enter the list");
    return;
  }

  let li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";

  let textSpan = document.createElement("span");
  textSpan.innerText = taskText;

  let btnBox = document.createElement("div");
  btnBox.style.marginLeft = "auto";
  btnBox.style.display = "flex";
  btnBox.style.gap = "8px";

  let editBtn = document.createElement("span");
  editBtn.innerHTML = "✏️";
  editBtn.style.cursor = "pointer";

  editBtn.onclick = function () {
    let newText = prompt("Edit your task:", textSpan.innerText);
    if (newText) {
      textSpan.innerText = newText;
    }
  };

  let delBtn = document.createElement("span");
  delBtn.innerHTML = "❎";
  delBtn.style.cursor = "pointer";

  delBtn.onclick = function () {
    li.remove();
  };

  btnBox.appendChild(editBtn);
  btnBox.appendChild(delBtn);

  li.appendChild(textSpan);
  li.appendChild(btnBox);

  li.addEventListener("click", function (e) {
    if (e.target === editBtn || e.target === delBtn) return;
    li.classList.toggle("checked");
  });

  container.appendChild(li);
  inputBox.value = "";
}
