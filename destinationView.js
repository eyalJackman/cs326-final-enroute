const information = document.getElementById("information");

const url =
    "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=bull%20frogs&limit=5";

/**
 *
 * @param {string} destination The destination that wants to be travelled to
 * @returns void
 * @description This will render the first 100 words and an image of whatever destination is said to it. This will be sent to desination.html
 */
const addDestination = async(destination) => {
    const correctFormat = destination.split("").join("%20");
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${correctFormat}&limit=1`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        document.getElementById("information").innerHTML = JSON.stringify(data);
    }
};

addDestination("punta cana");