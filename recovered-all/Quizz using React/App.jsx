import React, { useState } from "react";
import "./Qcss.css";

function App() {
  const [quesation, setQuesation] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);


  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What is React",
      options: ["Library", "Framework", "Language", "Database"],
      answer: "Library",
    },
    {
      id: 2,
      question: "What is Python",
      options: ["Library", "Language", "Framework", "Interface"],
      answer: "Language",
    },
    {
      id:3,
      question:"which HTML tag is used to create a hyperlink",
      options:["<link>","<a>","<href>","<url>"],
      answer:"<a>",
    }
  ];

  const handleAnswer = (opt) => {
    if (userAnswers[quesation]) return;

    if (opt === questions[quesation].answer) {
      setScore((prev) => prev + 1);
    }

    
    setUserAnswers((prev) => ({
      ...prev,
      [quesation]: true,
    }));
  };

  const NextQuesation = () => {
    if (quesation < questions.length - 1) {
      setQuesation(quesation + 1);
    } else {
      setResult(true);
    }
  };

  const PrevQuesation = () => {
    if (quesation > 0) {
      setQuesation(quesation - 1);
    }
  };

  if (result)
    return (
      <h1 className="complete">
        Score: {score} <hr /> Quiz Completed 🎉
      </h1>
    );

  return (
    <div className="container">
      <h1>Quiz App</h1>

      <h2 className="question">
        {questions[quesation].question}
      </h2>

      {questions[quesation].options.map((opt, i) => (
        <button
          key={i}
          className="option"
          onClick={() => handleAnswer(opt)}
          disabled={userAnswers[quesation]}
        >
          {opt}
        </button>
      ))}

      <div className="nav">
        <button className="nav-btn prev" onClick={PrevQuesation}>
          Previous
        </button>
        <button className="nav-btn next" onClick={NextQuesation}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
