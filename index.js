
const openNav = document.getElementById('open-nav')
const hideNav = document.getElementById('hideNav');
const nav = document.getElementById('openNav');

function openMobileNav() {
    nav.classList.add('show');
    document.body.classList.add('menu-open');
    openNav.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
    nav.classList.remove('show');
    document.body.classList.remove('menu-open');
    openNav.setAttribute('aria-expanded', 'false');
}

openNav.addEventListener('click', openMobileNav);
hideNav.addEventListener('click', closeMobileNav);

nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('show')) closeMobileNav();
});

var typed = new Typed(".element", {
    strings: ["Develop websites.", "Design Graphics.", "Innovate | Educate."],
    smartBackspace: true,
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});

function addEmail() {
    var emailId = document.getElementById('emailId');
    var email = document.getElementById('floatingEmail');

    let emailTxt = emailId.value;
    email.value = emailTxt;

}


   
