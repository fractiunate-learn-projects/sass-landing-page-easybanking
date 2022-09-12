const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
    body.classList.remove('no-scroll')
    if (header.classList.contains('open')) { // close hamburger menu
        header.classList.remove('open');
        fadeElements.forEach(element =>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { // open menu
        body.classList.add('no-scroll')
        header.classList.add('open');
        fadeElements.forEach(element => {
            element.classList.add('open')
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        });
    }
});