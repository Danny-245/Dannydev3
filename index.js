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


   
