const quizData = [

  { question: "What is 2 + 2?", a: "3", b: "4", c: "5", d: "6", correct: "b" },

  { question: "What is the capital of France?", a: "London", b: "Berlin", c: "Paris", d: "Madrid", correct: "c" },

  { question: "Which language runs in a web browser?", a: "Java", b: "C", c: "Python", d: "JavaScript", correct: "d" }

];

const quizEl = document.getElementById("quiz");

const questionEl = document.getElementById("question");

const answers = document.querySelectorAll(".answer");

const submitBtn = document.getElementById("submit");

const option1 = document.getElementById("option_1");

const option2 = document.getElementById("option_2");

const option3 = document.getElementById("option_3");

const option4 = document.getElementById("option_4");

const resultBox = document.getElementById("result");

const resultText = document.getElementById("result-text");

const playAgainBtn = document.getElementById("playAgain");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {

  deselectAnswers();

  const data = quizData[currentQuiz];

  questionEl.innerText = data.question;

  option1.innerText = data.a;

  option2.innerText = data.b;

  option3.innerText = data.c;

  option4.innerText = data.d;

}

function deselectAnswers() {

  answers.forEach(ans => ans.checked = false);
  
}

function getSelected() {

  let selected;

  answers.forEach(ans => {

    if (ans.checked) selected = ans.id;

  });

  return selected;

}

submitBtn.addEventListener("click", () => {

  const answer = getSelected();

  if (!answer) return;

  if (answer === quizData[currentQuiz].correct) score++;

  currentQuiz++;

  if (currentQuiz < quizData.length) {

    loadQuiz();

  } else {

    quizEl.style.display = "none";

    resultBox.style.display = "block";

    resultText.innerText = `You scored ${score} / ${quizData.length}`;

  }

});

playAgainBtn.addEventListener("click", () => {

  currentQuiz = 0;

  score = 0;

  resultBox.style.display = "none";

  quizEl.style.display = "block";

  loadQuiz();

});
