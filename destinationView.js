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
    const correctFormat = destination.split(" ").join("%20");
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${correctFormat}`;
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    const pageId = (curid) =>
        `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${curid}`;
    let id;
    if (response.ok) {
        id = await response.json();
        const content = await fetch(pageId(id), {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        }).catch(console.log);
        if (content.ok) {
            document.getElementById("information").innerHTML =
                content["query"]["pages"][id]["extract"];
        }
        // document.getElementById("information").innerHTML = JSON.stringify(data);
    }
    // return "test";
};
// setTimeout(() => addDestination("Boston"), 1000);