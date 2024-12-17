import { quizData } from "./data/questions";
const total_questions = quizData.quiz.length;
const quiz = quizData.quiz;

const nextButton = document.getElementsByClassName("next")[0];
const option = Array.from(document.getElementsByClassName("option"));
const question = document.getElementsByClassName("question")[0];
let currentQuestion = 0;

function next_quiz() {
  currentQuestion++;

  if (currentQuestion === total_questions) {
    alert("¡Has completado el quiz!");
    currentQuestion = 0; // Reinicia el quiz si deseas
  }

  option.forEach((item) => {
    item.classList.remove("correct", "incorrect");
    item.disabled = false; // Reactiva los botones
  });

  show_question(currentQuestion);
  nextButton.classList.add("hide");
}

function show_question(index) {
  question.innerHTML = quiz[index].question;
  for (let i = 0; i < option.length; i++) {
    option[i].innerHTML = quiz[index].options[i];
  }
}

window.onload = () => {
  show_question(0);
}

nextButton.addEventListener("click", () => {
  next_quiz(currentQuestion);
});

function is_correct_answer(answer) {
  return quiz[currentQuestion].correctAnswer === answer;
}

option.forEach((item) => {
  item.addEventListener("click", () => {
    option.forEach((btn) => btn.disabled = true); // Bloquear botones

    if (is_correct_answer(item.textContent)) {
      item.classList.add("correct");
    } else {
      item.classList.add("incorrect");
    }

    nextButton.classList.remove("hide"); // Muestra el botón "Next"
  });
});
window.onload = () => {
  show_question(0);
};