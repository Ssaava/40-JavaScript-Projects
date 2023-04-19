const review = [
  {
    img: "images/saul.jpg",
    name: "Mwegyesa Saul",
    job: "Android Developer",
    about:
      "It feels so good to be a great Mobile app developer and I would love to share all my success story with the rest of the community and for those that are willing to join the tech world please be careful",
  },
  {
    img: "images/emma.png",
    name: "Ssaava Emma",
    job: "Web Developer",
    about:
      "Just realized that there is no lorem Ipsum generator when you are dealing with javaScritp and You only need to import the words form other sources inorder to use them. thanks be to JavaScript",
  },
  {
    img: "images/Zahara.jpg",
    name: "Namiiro Zahara",
    job: "IOS Developer",
    about:
      "Hey! one day me widh to be an Android app developer since have gained a lot of experience developing IOS apps. It has been really a good experience of over 5 years. Happy to join Android app developers soon",
  },
  {
    img: "images/rahmah.jpg",
    name: "Coded Coder",
    job: "Software developer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius atque a quod nostrum repellendus officiis aliquid vitae corporis consequatur beatae!",
  },
];
// Get all DOM elements needed to be updated
const image = document.querySelector("img");
const Name = document.querySelector(".name");
const job = document.querySelector(".job");
const about = document.querySelector(".about");
// Select the toggle buttons used in the project
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");
// Add DOM event listener
let counter = 0;
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});
// function to write DRY code
function showPerson() {
  let item = review[counter];
  image.src = item.img;
  Name.textContent = item.name;
  job.textContent = item.job;
  about.textContent = item.about;
}
// previous button
prevButton.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = review.length - 1;
  }
  showPerson();
});
// next button
nextButton.addEventListener("click", () => {
  counter++;
  if (counter > review.length - 1) {
    counter = 0;
  }
  showPerson();
});
// the random button
randomButton.addEventListener("click", () => {
  counter = Math.floor(Math.random() * (review.length + 1));
  showPerson();
});
