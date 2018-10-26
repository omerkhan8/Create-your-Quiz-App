
function clickme() {
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var tag = document.getElementById("checkEmpty");
    var emailCheck = userEmail.value;
    var check = emailCheck.indexOf('@');

    if (userName.value == 0 || userEmail.value == 0 || userPassword.value == 0) {

        tag.innerHTML = "Please fill the empty fields";
        tag.style.color = "red";
        tag.style.fontSize = "1.0em";
    }
    else if (check == -1) {
        tag.innerHTML = "Please Enter a valid email adress";
        tag.style.color = "red";
        tag.style.fontSize = "1.0em";
    }
    else {
        tag.innerHTML = "";
        localStorage.setItem("username", userName.value);
        localStorage.setItem("email", userEmail.value);
        localStorage.setItem("password", userPassword.value);
        window.location.href = "index.html";
    }
}

function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var userEmail = localStorage.getItem("email");
    var userPassword = localStorage.getItem("password");
    var tag1 = document.getElementById("invalid");

    if (email.value === userEmail && password.value === userPassword) {
        tag1.innerHTML = "";
        window.location.href = "page2.html";

    }
    else {
        
        tag1.innerHTML = "Incorrect email or password entered";
        tag1.style.color = "red";
        tag1.style.fontSize = "1.0em";
        email.value=null;
        password.value=null;
        email.focus();

    }
}
