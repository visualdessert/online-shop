// Navbar
const navMain = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navMain.classList.add('navbar-scrolled')
    } else if (window.scrollY < 56) {
        navMain.classList.remove('navbar-scrolled')
    }
})

// Navbar Brand
const navBrand = document.querySelector('.navbar-brand');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navBrand.classList.add('navbar-brand-scrolled')
    } else if (window.scrollY < 56) {
        navBrand.classList.remove('navbar-brand-scrolled')
    }
})

// Navbar Links
const navLink = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
const scrollY = window.scrollY;

for (const link of navLink) {
    if (scrollY >= 56) {
        link.classList.add('nav-link-scrolled');
    } else {
        link.classList.remove('nav-link-scrolled');
    }
}
});

const logo = document.querySelector('.logo');
const scrollTrigger = 56; // Adjust this value as needed

window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;

    if (scrollPosition >= scrollTrigger) {
        logo.classList.add('inverted'); // Add a new class for inversion
    } else {
        logo.classList.remove('inverted');
    }
});