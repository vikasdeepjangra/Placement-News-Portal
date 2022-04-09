function ShowSignUpForm(){
    var loginForm = document.getElementById("login-form");
    var signUpForm = document.getElementById("signup-form");
    var signupLoginArea = document.getElementById("signup-login-area");
    loginForm.classList.add("hidden");
    signUpForm.classList.add("visible")
    signupLoginArea.classList.add("signup-login-increase-area");
};

function ShowLoginForm(){
    var loginForm = document.getElementById("login-form");
    var signUpForm = document.getElementById("signup-form");
    var signupLoginArea = document.getElementById("signup-login-area");
    loginForm.classList.remove("hidden");
    signUpForm.classList.remove("visible");
    signupLoginArea.classList.remove("signup-login-increase-area");
};

