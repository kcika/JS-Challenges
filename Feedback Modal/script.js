let contFluid = document.querySelector(".container-fluid");
const feedbackBtn = document.querySelector(".feedbackBtn");
let container = document.querySelector(".container");
const cancelIcon = document.querySelector(".cancelIcon");
const cancleBtn = document.querySelector("#cancel");
const subtmitBtn = document.querySelector("#submit");
const ratingBoxes = document.querySelectorAll(".ratingBox");
let feedbackMssg = document.querySelector(".feedbackMssg");

let selectedRatings = null;

const closeModal = () => {
    container.classList.remove('active');
    feedbackBtn.classList.remove('deactive');
}

feedbackBtn.addEventListener('click', () => {
    feedbackBtn.classList.add('deactive');
    container.classList.add('active');
})

// Close modal when the close Icon is clicked
cancelIcon.addEventListener('click', closeModal);

// Close modal when the close button is clicked
cancleBtn.addEventListener('click', closeModal);

// close modal when an user click outside the modal
contFluid.addEventListener('click', (e) => {
    console.log(e.target)
    if (!feedbackBtn.contains(e.target) && !container.contains(e.target)) {
        closeModal();
    }
})


// Select ratings

ratingBoxes.forEach((ratingBox) => {
    ratingBox.addEventListener('click', () => {
        ratingBoxes.forEach((ratingBox) => {
            ratingBox.classList.remove('selected');
        })
        ratingBox.classList.add("selected");

        selectedRatings = ratingBox.getAttribute('id');
    })
})

// submit btn

subtmitBtn.addEventListener('click', () => {
    if (selectedRatings) {
        closeModal();
        feedbackBtn.style.display = "none";
        if (selectedRatings <= 6) {
            feedbackMssg.innerHTML = `Thanks for the feedback. We will work hard to improve. The rating you gave us is <b>${selectedRatings}</b>`
        } else {
            feedbackMssg.innerHTML = `Thanks for the feedback. We aprreciate your support. The rating you gave us is <b>${selectedRatings}</b>`
        }
    } else {
        alert("Please provide a rating before submitting");
    }
})
