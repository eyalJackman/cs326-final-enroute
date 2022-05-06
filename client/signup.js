async function saveUser(user,password) {
    const data = JSON.stringify({ user,password });
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
    if (username.value === "" || password.value === "") {
        alert(`Please Add a Username and Password`);
        return;
    }
    else{
        await saveUser(username.value,password.value);
        username.value = "";
        password.value = "";
        alert(`Your Account has been Created!`);
        return;
    }
    
});