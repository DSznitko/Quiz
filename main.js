const quizData = [
  {
    question: "What is the most popular programming language?",
    a: "PHP",
    b: "Python",
    c: "c++",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertex Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Human Temporary Military Labor",
    correct: "a",
  },
  {
    question: "When was JavaScript created?",
    a: "In 2018",
    b: "2020",
    c: "1985",
    d: "None of those",
    correct: "d",
  },
  {
    question: "which one is CSS preprocesor?",
    a: "Node JS",
    b: "React JS",
    c: "Bootstrap",
    d: "SASS",
    correct: "d",
  },
  {
    question: "which one is CSS Framework?",
    a: "SCSS",
    b: "Bootstrap",
    c: "Node JS",
    d: "NPM",
    correct: "b",
  },
  {
    question: "which one is JavaScript Framework?",
    a: "React",
    b: "Vue",
    c: "Angular",
    d: "All of them",
    correct: "d",
  },
  {
    question: "What is Node JS?",
    a: "Javascript framework",
    b: "JavaScript animation library",
    c: "JavaScript runtime",
    d: "Code Editor",
    correct: "c",
  },
  {
    question: "Can we write backend and frontedn in Javascript?",
    a: "Yes",
    b: "No",
    c: "Only in certain situations",
    d: "We can write only FrontEnd in JavaScript",
    correct: "a",
  },
  {
    question: "What does a FrontEnd developer do?",
    a: "Sells real estate",
    b: "Sells a network",
    c: "Developing websites and UI",
    d: "Create the websites structure, write code, and verify the code works.",
    correct: "c",
  },
];

const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.querySelector(".submit");
const questionEl = document.querySelector("h1");
const popup = document.querySelector(".popup");
const closePopupBtn = document.querySelector(".close");
const h2 = document.querySelector("h2");

//answers dots (a,b,c,d)
const answersEl = document.querySelectorAll(".answer");

// labels
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;
let answer = undefined;

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitBtn.addEventListener("click", () => {
  answersEl.forEach((answerEl) => {
    if (answerEl.checked === false) {
      return;
    } else {
      answer = answerEl.id;
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
    }
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      popup.classList.add("appear");
      h2.textContent = `correct questions: ${score}/${quizData.length}`;
    }
  });
});

closePopupBtn.addEventListener("click", () => {
  location.reload();
});
