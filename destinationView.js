import data from "./mockDatabase.js";

const information = document.getElementById("information");
const img = document.getElementById("destination_image");

/**
 *
 * @param {string} destination The destination that wants to be travelled to
 * @returns void
 * @description This will render the first 100 words and an image of whatever destination is said to it. This will be sent to desination.html
 */
const addDestination = async(destination) => {
    const correctFormat = destination["name"].split(" ").join("%20"); //Boston
    const imgPath = `./images/${destination["image"]}`;
    img.setAttribute("src", imgPath);
    const url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${correctFormat}`;
    const response = await fetch(url);

    let extract;
    await response.json().then((obj) => {
        const pages = obj["query"]["pages"];
        for (const entry in pages) {
            extract = pages[entry]["extract"];
        }
    });

    if (response.ok) {
        information.innerHTML = JSON.stringify(extract);
    }
};
const randDest = data[Math.floor(Math.random() * data.length)];
addDestination(randDest);