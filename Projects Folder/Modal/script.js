// variables
let openBtn = document.getElementById("open-btn");
let modelContainer = document.getElementById("model-container");
let closeBtn = document.getElementById("close-btn");

// event listeners
openBtn.addEventListener("click", () => {
  modelContainer.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modelContainer.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target === modelContainer) {
    modelContainer.style.display = "none";
  }
});
