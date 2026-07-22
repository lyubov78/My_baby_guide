const button = document.createElement("button");

button.innerHTML = "↑";
button.className = "scroll-top";
document.body.appendChild(button);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});