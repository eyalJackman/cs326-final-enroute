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
    const correctFormat = destination.split(" ").join("%20"); //Boston
    // const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${correctFormat}`;
    // const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&titles=${correctFormat}&prop=extracts`;
    // const url = `https: //en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${correctFormat}&limit=5`;
    const url =
        // `https: //en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${curid}`;
        `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${correctFormat}`;
    const response = await fetch(url);

    let extract;
    await response
        .json()
        .then((obj) => {
            const pages = obj["query"]["pages"];
            for (entry in pages) {
                extract = pages[entry]["extract"];
            }
        })
        .then(
            (document.getElementById("information").innerHTML =
                JSON.stringify(extract))
        );
    // let extract;
    // for (const entry of pages) {
    //     extract = pages[entry]["extract"];
    // }
    // let id;
    if (response.ok) {
        //     id = await response.json();
        //     const content = await fetch(pageId(id));
        //     if (content.ok) {
        //         document.getElementById("information").innerHTML =
        //             content["query"]["pages"][id]["extract"];
        //     }
        document.getElementById("information").innerHTML = JSON.stringify(extract);
    }
    // return "test";
};
setTimeout(() => addDestination("Boston"), 1000);