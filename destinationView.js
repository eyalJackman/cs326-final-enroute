const information = document.getElementById("information");
import data from "./mockDatabase.js";
const url =
    "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=bull%20frogs&limit=5";

/**
 *
 * @param {string} destination The destination that wants to be travelled to
 * @returns void
 * @description This will render the first 100 words and an image of whatever destination is said to it. This will be sent to desination.html
 */
const addDestination = async(destination) => {
    const correctFormat = destination.split(" ").join("%20"); //Boston
    // const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${correctFormat}`;
    // const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${correctFormat}&prop=extracts`;
    // const url = `https: //en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${correctFormat}&limit=5`;
    const url =
        // `https: //en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${curid}`;
        `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${correctFormat}`;
    const response = await fetch(url);

    let extract;
    await response.json().then((obj) => {
        const pages = obj["query"]["pages"];
        for (const entry in pages) {
            extract = pages[entry]["extract"];
        }
    });

    if (response.ok) {
        document.getElementById("information").innerHTML = JSON.stringify(extract);
    }
};
const randName = data[Math.floor(Math.random() * data.length)]["name"];
addDestination(randName);