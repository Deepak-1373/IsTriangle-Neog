var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn");
var outputDiv = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  var sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  var sidesValue = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  var hypotenuse = Math.sqrt(sidesValue).toFixed(2);
  outputDiv.innerText =
    "The Hypotenuse of " +
    sides[0].value +
    " and " +
    sides[1].value +
    " is " +
    hypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
