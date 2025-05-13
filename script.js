let calculation = JSON.parse(localStorage.getItem("calc")) || "";
document.querySelector(".current-calc").innerHTML = calculation;

function updateCalculation(button) {
  if (button === "clear") {
    calculation = "0";
  } else if (button === "equal") {
    calculation = eval(calculation);
  } else {
    calculation += String(button);
  }

  document.querySelector(".current-calc").innerHTML = calculation;
  localStorage.setItem("calc", JSON.stringify(calculation));
}
