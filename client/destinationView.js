const information = document.getElementById("destination_information");
const img = document.getElementById("destination_image");
const name = document.getElementById("destination_name");
/**
 *
 * @param {string} destination The destination that wants to be travelled to
 * @returns void
 * @description This will render the first 100 words and an image of whatever destination is said to it. This will be sent to desination.html
 */
const addDestination = async(destination) => {
    // Image
    if (image === null) {
        return;
    }
    console.log(typeof destination);

    const imgPath = destination["img"];
    img.setAttribute("src", imgPath);

    // Description
    console.log(destination["name"]);
    const correctFormat = destination["name"].split(" ").join("%20"); //Boston
    const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${correctFormat}`;
    const response = await fetch(url);

    let extract;
    await response
        .json()
        .then((obj) => {
            const pages = obj["query"]["pages"];
            for (const entry in pages) {
                extract = pages[entry]["extract"];
            }
        })
        .catch((err) => console.log(err));
    if (response.ok) {
        information.innerHTML = JSON.stringify(extract);
    }
    name.appendChild(document.createTextNode(destination["name"]));
};
const dest = localStorage.getItem("load");
console.log(JSON.parse(dest));
addDestination(JSON.parse(dest));

const getDescription = async(name) => {
    const correctFormat = name.split(" ").join("%20");
    const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${correctFormat}`;
    const response = await fetch(url);

    let extract;
    await response
        .json()
        .then((obj) => {
            const pages = obj["query"]["pages"];
            for (const entry in pages) {
                extract = pages[entry]["extract"];
            }
        })
        .catch((err) => console.log(err));
    if (response.ok) {
        return JSON.stringify(extract);
    }
};

const addToFavoriteButton = document.getElementById("favorite");

async function addToFavorite(username, favorite) {
    const data = JSON.stringify({ username, favorite });
    const response = await fetch("/addtofavorites", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    if (!response.ok) {
        console.error(`Unable to save ${data} to server`);
    }
    return response.json();
}
if (addToFavoriteButton) {
    addToFavoriteButton.addEventListener("click", async() => {
        //   console.log(login);
        //   console.log(user_information);
        const parent = addToFavoriteButton.parentElement;
        const children = parent.children;

        // console.log(user_information["_id"]);
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes2  refer to this
        // to understand the children
        //parent div--> {h5, button, div}
        // look up ways to get the html...
        const username = localStorage.getItem("userid");
        console.log(children[0].textContent);
        const fav = children[0].textContent;
        const favs = await addToFavorite(username, fav);
        console.log(favs);
        console.log("this work");
    });
}

export default addDestination;
export { getDescription };