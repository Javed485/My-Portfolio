const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// open navbar on click bars
let navbar = document.querySelector('header nav');
let menuBtn = document.querySelector('#toggle-menu');
document.querySelector('#toggle-menu').onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}

// Close navbar when user scrolls
window.onscroll = () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
    }
});

// Typed.js for typing effect
var typed = new Typed('.text2', {
    strings: ['UI Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


