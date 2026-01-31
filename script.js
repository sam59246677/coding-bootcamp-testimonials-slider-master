const data = [
    {
        id: 1,
        img: "./images/image-tanya.jpg",
        text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        name: "Tanya Sinclair",
        job: "UX Engineer",
    },
    {
        id: 2,
        img: "./images/image-john.jpg",
        text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
    },
];

document.querySelector(".container").innerHTML = `
    <div class="slider_content">
                <p class="slider-text">
                    ${data[0].text}
                </p>
                <p class="slider-author">
                    <span class="author-name">${data[0].name} </span
                    ><span class="author-job">${data[0].job} </span>
                </p>
            </div>
            <div class="slider_hero">
                <img
                    src="${data[0].img} "
                    alt="hero-img"
                    class="hero-img"
                />
                <div class="buttons">
                    <button class="button">
                        <span class="prev-btn"
                            ><img src="./images/icon-prev.svg" alt="prev-btn"
                        /></span>
                        <span class="next-btn"
                            ><img src="./images/icon-next.svg" alt="next-btn"
                        /></span>
                    </button>
                </div>
            </div>
    `;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const heroImg = document.querySelector(".hero-img");
const text = document.querySelector(".slider-text");
const authorName = document.querySelector(".author-name");
const job = document.querySelector(".author-job");

let count = 0;

nextBtn.addEventListener("click", function () {
    count++;
    if (count > data.length || count === data.length) {
        count = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = data.length - 1;
    }
    showPerson();
});
function showPerson() {
    heroImg.src = data[count].img;
    text.textContent = data[count].text;
    authorName.textContent = data[count].name;
    job.textContent = data[count].job;
}