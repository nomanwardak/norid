document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerButton');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerCloseIcon = document.getElementById('h-close-icon');
    const darkOverlay = document.querySelector('.dark-overlay');
    const hPortfoliosDropdownIcon = document.querySelector('.h-portfolios-dropdown-arrow-icon')
    const hServicesDropdownIcon = document.querySelector('.h-services-dropdown-arrow-icon')


    burger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        darkOverlay.classList.toggle('active');

        burger.classList.toggle('active');
    });

    hPortfoliosDropdownIcon.addEventListener('click', () => {
        hPortfoliosDropdownIcon.classList.toggle('rotate');
    });

    hServicesDropdownIcon.addEventListener('click', () => {
        hServicesDropdownIcon.classList.toggle('rotate');
    });

    // Optional: close menu when clicking outside nav-links on mobile
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !burger.contains(e.target)) {
            hamburgerMenu.classList.remove('open');
            darkOverlay.classList.remove('active');

            burger.classList.remove('active');

        } else if (hamburgerCloseIcon.contains(e.target)) {
            hamburgerMenu.classList.remove('open');
            darkOverlay.classList.remove('active');
        }
    });

    // Toggle Portfolios dropdown
    const portfolioArrow = document.querySelector(".h-portfolio-links-container .ri-arrow-down-s-line");
    const portfolioDropdown = document.querySelector(".h-portfolios-dropdown");

    portfolioArrow.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent accidental link triggering
        portfolioDropdown.classList.toggle("active");
    });

    // Toggle Services dropdown
    const servicesArrow = document.querySelector(".h-services-links-container .ri-arrow-down-s-line");
    const servicesDropdown = document.querySelector(".h-services-dropdown");

    servicesArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        servicesDropdown.classList.toggle("active");
    });
});
