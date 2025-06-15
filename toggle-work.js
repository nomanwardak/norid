const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;
const navLinks = document.querySelectorAll(".nav-link")
const hireMe = document.querySelector(".hire-me");


if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    navLinks.forEach(el => {
        el.classList.add("dark");
    });
    hireMe.classList.add("dark");
}

toggle.addEventListener('click', function () {

    html.classList.toggle("dark");
    navLinks.forEach(el => {
        el.classList.toggle("dark");
    });
    hireMe.classList.toggle("dark");


    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

})

localStorage.setItem("theme", isDark ? "dark" : "light");