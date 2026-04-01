function systemTheme() {
    const root = document.documentElement;
    const mode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const newTheme =  mode ? "dark" : "light";
    root.className = newTheme;
    root.className = "light"; //editing light-mode for now choosing color and all
}

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "light" ? "dark" : "light";
    root.className = newTheme;

    // document.querySelector(".theme-name").textContent = newTheme;
}

systemTheme();

document.querySelector(".theme-color").addEventListener('click', setTheme);