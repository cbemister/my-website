const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-toggle');
const fullMenu = document.querySelector('.full-menu');

menuToggle.onclick = function () {

    if (!menuToggle.classList.contains('menu-active')) {
        this.classList.add('menu-active');
        body.classList.add('no-scroll');

    } else {
        this.classList.remove('menu-active');
        body.classList.remove('no-scroll');
    }
    fullMenu.classList.toggle('full-menu--open');
}

