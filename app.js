
const form = document.getElementById('form');

function setout() {
    const inputField = document.getElementById('email');
    const txt = inputField.value;
    if (txt === '') {
        const invalidMsg = document.getElementById('invalidMsg');
        invalidMsg.classList.add('show');
        
    }
    if(txt.length > 3) {
        const modal = document.getElementById('modalsuc');
        modal.classList.add('app');
    }
    const modal = document.getElementById('modalsuc');

    
    function removeModal() {
        if(invalidMsg) {
            invalidMsg.classList.remove('show');
        }
        
    }
    setTimeout(removeModal, 1500);

    function resus() {
        if(modal) {
            const inputField = document.getElementById('email');
            modal.classList.remove('app');
            inputField.value = '';
            
        }
      
    }
    setTimeout(resus, 3010);

}

function redirectToURL() {
    window.location.href = 'https://wa.me/message/MDV2RS47L2DZG1'
}

// const rowDown = document.getElementById('rd');
// if(rowDown.style.width === '0%') {
//     const modal = document.getElementById('modalsuc');
//     modal.classList.remove('app');
//     console.log('reached');
// }



// rewriting the code
// form.addEventListener("submit", (e) => {
//     const inputField = document.getElementById('email');
//     const txt = inputField.value;
//     if (txt === '') {
//         const invalidMsg = document.getElementById('invalidMsg');
//         invalidMsg.classList.add('show');
// setout();
//     }
    
//     if (txt === '') {
//        e.preventDefault();
        
//     }

    
// })
const closeBtn = document.getElementById('cncBtn');
function closeFun() {
    const invalidMsg = document.getElementById('invalidMsg');
    invalidMsg.classList.remove('show');
}

let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backbtn');
let nextBtn = document.querySelector('#nextbtn');

scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += screen.width;
});
backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= screen.width;
})

const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting;
const greetings = document.getElementById('wlc-greetings');
if(currentHour >= 5 && currentHour < 12) {
    greeting = 'Hello, Good morning 👋';
}else if(currentHour >= 12 && currentHour < 18){
    greeting = 'Hello, Good afternoon 👋';
}else {
    greeting = 'Hello, Good evening 👋';
}
greetings.innerText = greeting;
console.log(greeting);

const redeemBtn = document.getElementById('redeem-code');

function generateCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = '';
    const codeLength = 10;

    for(let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];

    }

    let codeTxt = document.getElementById('code');


    codeTxt.innerText = code;
    
    disableOtherButton();
    

    copyText();
}
let codeTxt = document.getElementById('code');


function copyText() {
    navigator.clipboard.writeText(codeTxt.innerText);
    alert(' COPIED, Your CODE IS:  ' + codeTxt.innerText);
}
console.log(codeTxt.innerText);

function disableOtherButton() {
    const redeemBtn = document.getElementById('redeem-code');
    const genCode = document.getElementById('generate-code');

    redeemBtn.disabled = true;

    setTimeout(function() {
        redeemBtn.disabled = false;
        redeemBtn.style.opacity = '1';
        redeemBtn.style.cursor = 'pointer';
        console.log('able');
    }, 2000);
}
document.getElementById('generate-code').addEventListener('click', generateCode);

function redeemGift() {
    location.href = "gggg.com";
}


function showNyeve() {
    const nyEve = document.getElementById('eve');
    nyEve.classList.add('showEve');
}
setTimeout(showNyeve, 5000);

const nyEve = document.getElementById('eve');
const rmBtn = document.getElementById('rm-btn');
rmBtn.addEventListener('click', function() {
    nyEve.classList.remove('showEve');
})

console.log(nyEve.parentElement);

function saveUsername() {
    let userName = document.getElementById('user_name').value;
let user = document.getElementById('username');
    localStorage.setItem('username', userName);
user.innerText = userName;


}
