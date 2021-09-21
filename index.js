var angleInput = document.querySelectorAll(".input-angle");
var isTriangleBtn = document.querySelector("#isTriangle-btn");
var outputDiv = document.querySelector("#output");

function calculateSumOfAngle(angle1, angle2, angle3) {
  var sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  for (let i = 0; i < angleInput.length - 2; i++) {
    var angle1 = Number(angleInput[i].value);
    var angle2 = Number(angleInput[i + 1].value);
    var angle3 = Number(angleInput[i + 2].value);
  }
  var sumOfAngles = calculateSumOfAngle(angle1, angle2, angle3);
  if (sumOfAngles === 180) {
    outputDiv.innerText = "The angles form a Triangle🥳";
  } else {
    outputDiv.innerText = "The angles don't form a triangle❌";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);
