const openNav = document.getElementById('open-nav')
const hideNav = document.getElementById('hideNav');
const nav = document.getElementById('openNav');

openNav.addEventListener('click', function () {
    nav.classList.add('show');
} );
hideNav.addEventListener('click', function () {
    nav.classList.remove('show');
})