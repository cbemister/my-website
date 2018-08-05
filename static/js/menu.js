const menuToggle = document.querySelector('.menu-toggle');
const fullMenu = document.querySelector('.full-menu');

menuToggle.onclick = function () {

    menuToggle.classList.contains('menu-active') ? this.classList.remove('menu-active') : this.classList.add('menu-active')

    fullMenu.classList.toggle('full-menu--open');

    }
