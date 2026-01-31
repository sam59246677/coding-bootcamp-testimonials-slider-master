const data = [
  {
    img: "./images/image-tanya.jpg",
    text: "I’ve been interested in coding for a while but never taken the jump, until now...",
    name: "Tanya Sinclair",
    job: "UX Engineer",
  },
  {
    img: "./images/image-john.jpg",
    text: "If you want to lay the best foundation possible I’d recommend taking this course...",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
  },
];

const heroImg = document.querySelector(".hero-img");
const textEl = document.querySelector(".slider-text");
const nameEl = document.querySelector(".author-name");
const jobEl = document.querySelector(".author-job");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;

function render() {
  const { img, text, name, job } = data[currentIndex];
  heroImg.src = img;
  textEl.textContent = text;
  nameEl.textContent = name;
  jobEl.textContent = job;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % data.length;
  render();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  render();
});

render();
