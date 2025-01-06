const toastContainer = document.querySelector(".toastContainer");

function showToast(type) {
    const toast = document.createElement("div");
    toast.classList = `toast ${type}`;

    const iconList = {
        success: '<i class="fa-solid fa-check"></i>',
        info: '<i class="fa-solid fa-circle-info"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
        error: '<i class="fa-solid fa-exclamation"></i>'
    }

    toast.innerHTML = `
    <span>${iconList[type]}</span>
    <span>${type} toast notification</span>
    <button class="clostBtn" onclick="closeToast(this)"><i class="fa-solid fa-xmark"></i></button>
    `;

    toastContainer.append(toast);

    setTimeout(() => {
        if (toastContainer.contains(toast)) {
            toast.remove();
        }
    }, 4000)
}

function closeToast(button) {
    const toast = button.parentElement;
    toast.remove();
}


