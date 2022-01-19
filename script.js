document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn')
    const navlinks = document.querySelector('.nav-links')

    menuBtn.addEventListener('click', function() {
        navlinks.classList.toggle('mobile-menu');
    })
});