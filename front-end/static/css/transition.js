const menu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const link = document.querySelectorAll(".navbar-nav li");

// Animation for the hr tag
jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('.trans--grow').addClass('grow');
    }, 275);
});

//Animation for Menu
menu.addEventListener('click', () => {
    navBar.classList.toggle('open');
    link.forEach(link => {
        link.classList.toggle("fade");
    });
});




