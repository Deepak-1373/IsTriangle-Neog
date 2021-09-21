var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#output");

var correctAnswers = ["90", "rightangled", "Equilateral"];

function calculateScore() {
  var score = 0;
  var index = 0;
  var formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputDiv.innerText = "Hey👋 your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
