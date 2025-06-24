const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;


if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}

toggle.addEventListener('click', function () {
    
    html.classList.toggle("dark");
    
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

})

// localStorage.setItem("theme", isDark ? "dark" : "light");