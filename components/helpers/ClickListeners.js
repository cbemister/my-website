const hamburgerMenu = () => {

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

const navItem = () => {

    let navLink = document.querySelector('a.nav-link');
    let body = document.querySelector('body');
    let menuToggle = document.querySelector('.menu-toggle');

    navLink.onclick = (function (event) {
        menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.remove('menu-active');
        body.classList.remove('no-scroll');
    
    })();
    
}

export {
    hamburgerMenu,
    navItem
}






