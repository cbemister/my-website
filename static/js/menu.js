const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const fullMenu = document.querySelector('.full-menu');

menuToggle.onclick = function () {
    fullMenu.classList.toggle('full-menu--open');
}

menuClose.onclick = function () {
    fullMenu.classList.toggle('full-menu--open');
}