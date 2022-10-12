const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password")
const dancingBtn = document.querySelector(".dancing-button");

const usernameRegex = /^.{8,}$/;
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordRegex = /^.{8,}$/;
let usernameValid = false;
let emailValid = false;
let passwordValid = false;

dancingBtn.addEventListener("mouseover", () => {
    if(!emailValid || !passwordValid || !usernameValid){
        ["right", "left"].forEach(v => dancingBtn.classList.toggle(v));
    }
});

emailInput.addEventListener("keyup", e => {
    if(emailRegex.test(e.target.value)){
        emailInput.classList.remove('error-border');
        emailInput.classList.add('success-border');
        emailValid = true;
    } else {
        emailInput.classList.remove('success-border');
        emailInput.classList.add('error-border');
        emailValid = false;
    }
});

passwordInput.addEventListener("keyup", e => {
    if(passwordRegex.test(e.target.value)){
        passwordInput.classList.remove('error-border');
        passwordInput.classList.add('success-border');
        passwordValid = true;
    } else {
        passwordInput.classList.remove('success-border');
        passwordInput.classList.add('error-border');
        passwordValid = false;
    }
});

usernameInput.addEventListener("keyup", e => {
    if(usernameRegex.test(e.target.value)){
        usernameInput.classList.remove('error-border');
        usernameInput.classList.add('success-border');
        usernameValid = true;
    } else {
        usernameInput.classList.remove('success-border');
        usernameInput.classList.add('error-border');
        usernameValid = false;
    }
});