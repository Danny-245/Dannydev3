(() => {
    const header = document.querySelector('.dd-header');
    if (!header) return;
    const button = header.querySelector('#menu-toggle');
    const menu = header.querySelector('#menu');
    const mobile = window.matchMedia('(max-width: 800px)');
    function setMenu(open, restoreFocus = false) {
        button.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('is-open', open);
        menu.inert = mobile.matches && !open;
        if (restoreFocus) button.focus();
    }
    button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', event => {
        if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
        if (!header.contains(event.target)) setMenu(false);
    });
    mobile.addEventListener('change', () => setMenu(false));
    setMenu(false);
})();
