const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const mobileViewport = window.matchMedia('(max-width: 800px)');

function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menu.inert = mobileViewport.matches && !open;
    if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', event => {
    if (!event.target.closest('nav')) setMenu(false);
});
mobileViewport.addEventListener('change', () => setMenu(false));
setMenu(false);
