const answerSection = document.getElementById("answer");
let numbers = document.querySelectorAll(".btn");
function getButton() {
  console.log(numbers);
  numbers.forEach((event) => {
    if (event.innerHTML == "7") {
      answerSection.value = event.innerHTML;
    }
  });
}
