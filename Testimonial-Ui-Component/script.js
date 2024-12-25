let testimonialSlides = document.querySelector(".testimonials");
let testimonialItem = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentIndex = 0;
let totalSlides = testimonialItem.length;

function showSlides(index) {
    const slideWidth = testimonialItem[0].offsetWidth;
    const offset = -(index * slideWidth);
    testimonialSlides.style.transform = `translateX(${offset}px)`
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; //loop to the last slide
    }
    showSlides(currentIndex);
})

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0 //loop back to the start
    }
    showSlides(currentIndex);
})