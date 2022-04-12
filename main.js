

const quizData = [
  {
    question: "Od czego uzależniony jest Sulim?",
    a: "od walenia konia",
    b: "od palenia",
    c: "od alkoholu",
    d: "a i c",
    correct: "d"
  },
  {
    question: "Gdzie pracuje pelera szwagierka?",
    a: "w Maku",
    b: "w Boschu",
    c: "na sorze",
    d: "w autoneum",
    correct: "c"
  },
  {
    question: "Ile Kevin zarabia na tym lkw?",
    a: "2800 ojro brutto",
    b: "3000 ojro netto",
    c: "chuj cie obchodzi",
    d: "spytaj Dejwa on wie",
    correct: "d"
  },
  {
    question: "Kiedy ostatnio Mrówa miał urlop?",
    a: "2 lata temu",
    b: "3-5 lat temu",
    c: "jak nie pracował",
    d: "to on w ogóle miał urlop?",
    correct: "d"
  },
  {
    question: "Najlepszy przyjaciel Radosengo to...",
    a: "Alex",
    b: "Wrony stary",
    c: "pies",
    d: "Aleks",
    correct: "a"
  },
  {
    question: "Czy Hary kiedyś się zaszczepi?",
    a: "nie",
    b: "jak on juz pewnie po 3 dawkach",
    c: "jak przypyli to zaszczepi",
    d: "moze",
    correct: "a"
  },
  {
    question: "Jak długo jeszcze Nizioł będzie pracować w autoneum ?",
    a: "2-3 lata",
    b: "do osiągniecia wieku emerytalnego",
    c: "do końca świata i jeden dzień dłużej",
    d: "aż zostanie jedynym tam pracującym Polakiem",
    correct: "b"
  },
  {
    question: "Dlaczego Matis ma ksywe 'Jurant' ?",
    a: "Bo ma tak z Bierzmowania",
    b: "Grał w krzyżakach",
    c: "po alkoholu patrzy na wszystko z przymrużeniem oka",
    d: "jest potomkiem Zbycha z Bogdańca",
    correct: "c"
  },
  {
    question: "Ile dni w roku Dejwu jest na L4 ?",
    a: "Łoo panie",
    b: "366",
    c: "pół na pół",
    d: "na pewno wiecej niż mrówa na urlopie",
    correct: "d"
  },
]

const answerEls = document.querySelectorAll(".answer")
const submitBtn = document.querySelector(".submit");
const questionEl = document.querySelector("h1");
const popup = document.querySelector(".popup");
const closePopupBtn = document.querySelector(".close");
const h2 = document.querySelector("h2")

//answers dots (a,b,c,d)
const answersEl = document.querySelectorAll(".answer")




// labels
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;
let answer = undefined

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz();

submitBtn.addEventListener("click", () => {
 
answersEl.forEach(answerEl => {
if(answerEl.checked === false) {
   return
} else {
  answer = answerEl.id;
if(answer === quizData[currentQuiz].correct) {
  score++
}
  currentQuiz++
} if(currentQuiz < quizData.length) {
 loadQuiz()

} else {
  popup.classList.add("appear");
h2.textContent = `poprawne odpowiedzi ${score}/${quizData.length}`

}
})
  
})



closePopupBtn.addEventListener( "click",() => {
  location.reload()
})