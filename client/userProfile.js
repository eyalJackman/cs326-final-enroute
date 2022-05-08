import {SearchResults} from "searchResults.js";

const name_button = document.getElementById('ChangeName');

async function updateUserName(user, name) {
    const data = JSON.stringify({ user, name });
    console.log('apple');
    const response = await fetch("/updatename", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: data,
    });
    if (!response.ok) {
    console.error(`Unable to update name`);
    } else {
    return response.json();
    }
}
name_button.addEventListener("click", async()=>{
    const new_name = document.getElementById('change_name');
    console.log(new_name.value);
    let name_req = await updateUserName(user_information.user ,new_name.value);
    if(name_req){
        new_name.value = "";
        alert('Username updated');
        return;
    }
    else{
        alert('failed to update UserName');
    }
});


// //get destinations by name returns an array of objects to be rendered


// //get the array
// const user = localStorage.getItem("userid");



// const favorite = JSON.parse(currFav);

// const favoriteSection = document.getElementById("favoritesLoad");

// console.log(favorite);

// const loadDestinations = (favorite) => {
//   const results = new SearchResults(favorite);
//   console.log(results);
//   results.render(favoriteSection);
// };

// loadDestinations(favorite);