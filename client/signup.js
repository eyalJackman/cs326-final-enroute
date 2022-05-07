async function saveUser(user,password, fullname, email, phonenumber) {
    const data = JSON.stringify({ user, password, fullname, email, phonenumber });
    const response = await fetch('/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    if (!response.ok) {
      console.error(`Unable to save ${data} to server`);
    }
}

let registerButton = document.getElementById('signup_register');

registerButton.addEventListener('click', async () => {
    let username = document.getElementById("signup_username");
    let password = document.getElementById("signup_password");
    let fullname = document.getElementById("signup_fullname");
    let email = document.getElementById("signup_email");
    let phone = document.getElementById("signup_phonenumber")
    let phonenumber = parseInt(phone.value);
    if (username.value === "" || password.value === ""|| 
    fullname.value === ""|| email.value === ""|| phonenumber === null) {
        alert(`Please Add a Username and Password`);
        return;
    }
    else{
        await saveUser(username.value,password.value, fullname.value, email.value, phonenumber);
        username.value = "";
        password.value = "";
        fullname.value = "";
        email.value = "";
        phone.value = "";
        alert(`Your Account has been Created!`);
        return;
    } 
});