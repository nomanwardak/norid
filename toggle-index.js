const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;
const navLinks = document.querySelectorAll(".nav-link")
const border = document.querySelector(".main");
const norid = document.querySelector(".norid");
const hireMe = document.querySelector(".hire-me");
const mainButtonOne = document.querySelector(".main-button-1");
const mainButtonTwo = document.querySelector(".main-button-2");
const portfolioDropdown = document.querySelector(".portfolio-dropdown");
const portfolioDropdownLink = document.querySelector(".portfolio-dropdown-link");
const portfolioLinks = document.querySelector(".portfolio-links");


if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    navLinks.forEach(el => {
        el.classList.add("dark");
    });
    border.classList.add("dark");
    hireMe.classList.add("dark");
    mainButtonOne.classList.add("dark");
    mainButtonTwo.classList.add("dark");
    // portfolioDropdown.classList.add("dark");
    // portfolioDropdownLink.classList.add("dark");
    // portfolioLinks.classList.add("dark");

    norid.src = "Assets/NORID-dark.svg";
} else {
    norid.src = "Assets/NORID-light.svg";
}

toggle.addEventListener('click', function () {

    html.classList.toggle("dark");
    navLinks.forEach(el => {
        el.classList.toggle("dark");
    });
    border.classList.toggle("dark");
    hireMe.classList.toggle("dark");
    mainButtonOne.classList.toggle("dark");
    mainButtonTwo.classList.toggle("dark");
    // portfolioDropdown.classList.toggle("dark");
    // portfolioDropdownLink.classList.toggle("dark");
    // portfolioLinks.classList.toggle("dark");

    const isDark = html.classList.contains("dark");
    norid.src = isDark ? "Assets/NORID-dark.svg" : "Assets/NORID-light.svg";

    localStorage.setItem("theme", isDark ? "dark" : "light");

})

localStorage.setItem("theme", isDark ? "dark" : "light");