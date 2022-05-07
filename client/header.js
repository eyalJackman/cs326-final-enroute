function showLogoutButton(hide){
    let headerLogout = document.getElementById("logout_button_header");
    headerLogout.hidden = hide;
}

export function changeHeader(hideTrue){
    let headerLogin = document.getElementById("login_button_header");
    let headerSignup = document.getElementById("signup_button_header");
    headerLogin.hidden = hideTrue;
    headerSignup.hidden = hideTrue;
    showLogoutButton(!hideTrue);
}