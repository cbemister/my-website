export default () => {

    let body = document.querySelector('body');
    let menuToggle = document.querySelector('.menu-toggle');
    let fullMenu = document.querySelector('.full-menu');

    menuToggle.addEventListener('click', ((event) => {

        if (!menuToggle.classList.contains('menu-active')) {
            menuToggle.classList.add('menu-active');
            body.classList.add('no-scroll');

        } else {
            menuToggle.classList.remove('menu-active');
            body.classList.remove('no-scroll');
        }   
        fullMenu.classList.toggle('full-menu--open');

    })());

}