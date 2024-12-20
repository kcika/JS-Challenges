let url = document.querySelector("input");
let socialIcons = document.querySelectorAll(".icons a");
let copyBtn = document.querySelector("#copyBtn");
let copyStatus = document.querySelector(".copyStatus");
socialIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        // to remove the "selected" class from all icons
        socialIcons.forEach((icon) => icon.classList.remove("selected"));
        // to add "selected" class to the clicked icon
        icon.classList.add("selected");
    })
})

//to check browser compatiblity
if (navigator.clipboard) {
    // to copy the url
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(url).then(() => {
            copyStatus.innerHTML = "Link copied";
            url.style.backgroundColor = "lightblue"
            setTimeout(() => (copyStatus.innerHTML = "", url.style.backgroundColor = "transparent"), 2000);
        }).catch(() => {
            copyStatus.innerHTML = "Failed to Copy";
            setTimeout(() => (copyStatus.innerHTML = ""), 2000);
        })
    })
} else {
    copyStatus.innerHTML = "Clipboard not supported";
}