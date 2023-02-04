const root = document.querySelector(":root");
const switchMode = document.querySelector("#switch-mode");

switchMode.addEventListener("click", function() {
    switchMode.classList.toggle("bi-moon");
    if (switchMode.classList.toggle("bi-brightness-high")) {
        root.style.setProperty("--primary-fg-color", " hsla(0, 0%, 10%, 1)");
        root.style.setProperty("--secondary-fg-color", " hsla(0, 0%, 30%, 1)");
        root.style.setProperty("--primary-bg-color", " hsla(0, 0%, 90%, 1)");
        root.style.setProperty("--secondary-bg-color", " hsla(0, 0%, 70%, 1)");
    }
    else {
        root.style.setProperty("--primary-fg-color", " hsla(0, 0%, 90%, 1)");
        root.style.setProperty("--secondary-fg-color", " hsla(0, 0%, 70%, 1)");
        root.style.setProperty("--primary-bg-color", " hsla(0, 0%, 10%, 1)");
        root.style.setProperty("--secondary-bg-color", " hsla(0, 0%, 30%, 1)");
    }
});
