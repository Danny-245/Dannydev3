const openNav = document.getElementById('open-nav')
const hideNav = document.getElementById('hideNav');
const nav = document.getElementById('openNav');

openNav.addEventListener('click', function () {
    nav.classList.add('show');
});
hideNav.addEventListener('click', function () {
    nav.classList.remove('show');
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


