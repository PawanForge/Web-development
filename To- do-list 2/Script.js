const inputBox = document.getElementById("P");

const listContainer = document.getElementById("list-container");

function AddTask() {
  

  if (inputBox.value.trim()=== '') {
const taskText=inputBox.value.trim();
    alert("Please enter a task!");
    return;

  } else {

    let li = document.createElement("li");
let taskSpan=document.createElement("span");
    taskSpan.innerText = inputBox.value;
    let btn=document.createElement("span");
    btn.innerHTML="❌";
    btn.style.marginLeft="10px";
    btn.style.cursor="pointer";
    btn.addEventListener("click", function(){
      li.remove();
      });
  let editbtn=document.createElement("span");
    editbtn.innerHTML="✏️";
    editbtn.style.marginLeft="10px";
    editbtn.style.cursor="pointer";
    editbtn.onclick=function(){
      let newText=prompt("Edit your task",taskSpan.textContent);
      if(newText){
        taskSpan.textContent=newText;
        }
      };
    
    
    
    li.appendChild(taskSpan);
    li.appendChild(btn);
    li.appendChild(editbtn);
    
listContainer.appendChild(li);
    

  inputBox.value = "";

}
      }
