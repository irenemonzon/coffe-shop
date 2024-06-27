document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-container');
    const headerPhoto = document.querySelector('.header-container img');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarLinks = document.querySelector('.navbar ul');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }, observerOptions);

    observer.observe(headerPhoto);

    // Toggle navbar on hamburger menu click
    hamburgerMenu.addEventListener('click', function () {
        navbarLinks.classList.toggle('show');
    });


    // Existing code for section animations
    // const sections = document.querySelectorAll('.section');

    // const sectionObserver = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('in-view');
    //         }
    //     });
    // });

    // sections.forEach((section) => {
    //     sectionObserver.observe(section);
    // });
});
