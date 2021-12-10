const hamburger = document.getElementById('hamburger-link');
const mobileNav = document.getElementById('mobile-nav');
const container = document.getElementById('container');
const footer = document.getElementById('footer');
 

hamburger.addEventListener('click', (e) => {
    e.preventDefault()
    const hamburgerIcon = document.getElementById('hamburger');
    const hamburger_Icon_SRC = "/images/icon-hamburger.svg";
    const close_Icon_SRC = "/images/icon-close.svg";

    if(mobileNav.classList.contains('hidden')) {
        hamburgerIcon.src = close_Icon_SRC;
        mobileNav.classList.remove('hidden');
        container.classList.add('hidden');
        footer.classList.add('hidden');
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    } else {
        hamburgerIcon.src = hamburger_Icon_SRC;
        mobileNav.classList.add('hidden');
        container.classList.remove('hidden');
        footer.classList.remove('hidden');
        document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }
});