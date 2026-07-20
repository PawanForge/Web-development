let turnO = true; 

const boxes = document.querySelectorAll(".box");

const reset = document.getElementById("resetBtn");

const winPatterns = [

  [0, 1, 2],

  [3, 4, 5],

  [6, 7, 8],

  [0, 3, 6],

  [1, 4, 7],

  [2, 5, 8],

  [0, 4, 8],

  [2, 4, 6],

];

const checkWinner = () => {

  for (let pattern of winPatterns) {

    let [a, b, c] = pattern;

    if (

      boxes[a].innerText !== "" &&

      boxes[a].innerText === boxes[b].innerText &&

      boxes[b].innerText === boxes[c].innerText

    ) {

      boxes[a].style.backgroundColor = "#90ee90";

      boxes[b].style.backgroundColor = "#90ee90";

      boxes[c].style.backgroundColor = "#90ee90";

      alert(`Winner is ${boxes[a].innerText}!`);
  disableBoxes();

      return;

    }

  }


  let allFilled = true;

  boxes.forEach((box) => {

    if (box.innerText === "") {

      allFilled = false;

    }

  });

  if (allFilled) {

    alert("It's a Draw!");

    disableBoxes();

  }

};

const disableBoxes = () => {

  boxes.forEach((box) => {

    box.style.pointerEvents = "none";

  });
  };

boxes.forEach((box) => {

  box.addEventListener("click", () => {

    if (box.innerText !== "") return;

    if (turnO) {

      box.innerText = "O";

      turnO = false;

    } else {

      box.innerText = "X";

      turnO = true;

    }

    checkWinner();

  });

});

reset.addEventListener("click", () => {

  boxes.forEach((box) => {

    box.innerText = "";

    box.style.pointerEvents = "auto";

    box.style.backgroundColor = ""; 
            });

  turnO = true;

});
        
