const answerSection = document.getElementById("answer");
let Buttons = document.querySelector(".buttons");
var operators = /\W/g;
// function to capture user input
var numbers = "";

Buttons.addEventListener("click", (e) => {
  let number = e.target.textContent;
  var lastCharactor = numbers.charAt(numbers.length - 1);
  if (lastCharactor.match(operators) && number != "=") {
    console.log(`number is present ${lastCharactor}`);
    answerSection.value = numbers.replace(lastCharactor, "e");
  }
  if (number === "=") {
    answerSection.value = numbers;
    console.log(lastCharactor);
    return;
  }

  if (number >= 0 || number === "." || number.match(operators)) {
    if (number === "0" && answerSection.value === "0") {
      answerSection.value = "0";
      return;
    }

    numbers += e.target.textContent;
    answerSection.value = numbers;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  answerSection.value = "";
});
