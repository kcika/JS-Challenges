let accordion = document.querySelectorAll(".accordionHeader");

accordion.forEach((acc) => {
    acc.addEventListener("click", () => {
        // get the content related to the clicked header
        const content = acc.nextElementSibling;

        // Get the icon inside the header
        const icon = acc.querySelector(".icon i");

        // check if the clicked header is already active
        const isOpen = acc.classList.contains("active");

        document.querySelectorAll(".headerContent").forEach((item) => {
            item.classList.remove("open"); // Remove open class from all
            item.previousElementSibling.classList.remove("active"); // Remove active class from headers
            item.previousElementSibling
                .querySelector(".icon i")
                .classList.remove("fa-times"); // Change to plus icon
            item.previousElementSibling
                .querySelector(".icon i")
                .classList.add("fa-plus"); // Add plus icon back
        });
        if (!isOpen) {
            acc.classList.add("active");
            content.classList.add("open");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-times");
        }

    })
});