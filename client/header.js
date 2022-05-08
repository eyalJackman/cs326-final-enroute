let headerLogin = document.getElementById("login_button_header");
let headerSignup = document.getElementById("signup_button_header");
let headerLogout = document.getElementById("logout_button_header");

export function checkVisibility(){
    console.log("inside checkVisibility");
    if(localStorage.getItem('userid') !== 'null'){
        headerLogin.hidden = true;
        headerSignup.hidden = true;
        headerLogout.hidden = false;
    }else{
        headerLogin.hidden = false;
        headerSignup.hidden = false;
        headerLogout.hidden = true;
    }
}

window.onload = (event) => {
    console.log("page loaded");
    localStorage.setItem('login_button','visible');
    localStorage.setItem('logout_button',null);
    checkVisibility();
};