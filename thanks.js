function redirect() {
    var count = 10;
    var countDownContent = document.getElementById("cd-num");

    var countDownInterval = setInterval(() => {
        if (count > 0) {
            countDownContent.innerText = count;
            count--;
        }
        else {
            window.location.href = "index.html";
        }
    }, 1000);
}

redirect();