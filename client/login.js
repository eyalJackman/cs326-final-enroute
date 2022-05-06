async function checkUser(user,password) {
    let response = await fetch(`/highestWordScores`, {
        method: 'GET',
      });
    const data = await response.json();
    return data;
}

let loginButton = document.getElementById('login_button');

loginButton.addEventListener('click', async () => {
    console.log("here");
    let username = document.getElementById("login_username");
    let password = document.getElementById("login_password");
    if (username.value === "" || password.value === "") {
        alert(`Please Add a Username and Password`);
        return;
    }
    else{
        let validLogin = true;
        //await checkUser(username.value,password.value);
        if(validLogin){
            username.value = "";
            password.value = "";
            alert(`Your Account has been Created!`);
            return;
        }else{
            alert(`Incorrect Account Entered`);
            return;
        }
    } 
});