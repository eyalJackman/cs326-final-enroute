// import { changeHeader } from "./header.js";

/**
 * @type {boolean}
 * @description Checks whether a user is logged in
 */
let login = false;

/**
 * @type {object}
 * @property user_information._id - ID of the user
 */
const user_information = {};

async function userRequestFetch(username, password) {
  const data = JSON.stringify({ username, password });
  const response = await fetch("/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
  if (!response.ok) {
    console.error(`Unable to check ${data}`);
  } else {
    return response;
  }
}

let loginButton = document.getElementById("login_button");
if (loginButton) {
  loginButton.addEventListener("click", async () => {
    console.log("login button clicked");
    let username = document.getElementById("login_username");
    let password = document.getElementById("login_password");
    if (username.value === "" || password.value === "") {
      alert(`Please Add a Username and Password`);
      return;
    } else {
      let userRequest = await userRequestFetch(username.value, password.value);
      if (userRequest) {
        localStorage.setItem("userid", username.value);

        username.value = "";
        password.value = "";
        // alert(`Your Are Logged In!`);
        login = true;
        user_information["id"] = userRequest["_id"];
        user_information["username"] = userRequest["username"];
        user_information["password"] = userRequest["password"];
        window.location.href = "./index.html";
        // changeHeader();
        return;
      } else {
        alert(`Incorrect Account Entered`);
        return;
      }
    }
  });
}

export { login, user_information };
