import { login, user_information } from "client/login.js";

const addToFavoriteButton = document.getElementById("favorite");


async function addToFavorite(_id, dummy2){

    const data = JSON.stringify({_id, });
    const response = await fetch('/addtofavorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });
    if (!response.ok) {
        console.error(`Unable to save ${data} to server`);
    }
    return;
}


addToFavoriteButton.addEventListener("click", async () => {
    console.log(login);
    console.log(user_information);
    const parent = addToFavoriteButton.parentElement;
    const children = parent.children;
    
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes2  refer to this 
    // to understand the children
    //parent div--> {h5, button, div}
    // look up ways to get the html...
    
    const dummy2 = "dummy2";
    await addToFavorite(user_information['_id'], dummy2);
});