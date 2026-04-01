function systemTheme() {
    const root = document.documentElement;
    const mode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const newTheme =  mode ? "dark" : "light";
    root.className = newTheme;
}

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "light" ? "dark" : "light";
    root.className = newTheme;
}

systemTheme();

document.querySelector(".theme-color").addEventListener('click', setTheme);