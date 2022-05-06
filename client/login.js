async function userRequestFetch(user,password) {
    const data = JSON.stringify({user,password });
    const response = await fetch('/checkUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    if (!response.ok) {
      console.error(`Unable to check ${data}`);
    }else{
        return response.json();
    }
}

let loginButton = document.getElementById('login_button');

loginButton.addEventListener('click', async () => {
    console.log("login button clicked");
    let username = document.getElementById("login_username");
    let password = document.getElementById("login_password");
    if (username.value === "" || password.value === "") {
        alert(`Please Add a Username and Password`);
        return;
    }
    else{
        let userRequest = await userRequestFetch(username.value,password.value);
        if(userRequest){
            username.value = "";
            password.value = "";
            alert(`Your Are Logged In!`);
            return;
        }else{
            alert(`Incorrect Account Entered`);
            return;
        }
    } 
});