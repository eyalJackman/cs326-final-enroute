import data from "./mockDatabase.js";

const information = document.getElementById("destination_information");
const img = document.getElementById("destination_image");
const name = document.getElementById("destination_name");
/**
 *
 * @param {string} destination The destination that wants to be travelled to
 * @returns void
 * @description This will render the first 100 words and an image of whatever destination is said to it. This will be sent to desination.html
 */
const addDestination = async (destination) => {
  // Image
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
// const randDest = data[Math.floor(Math.random() * data.length)];
// addDestination(randDest);
const dest = localStorage.getItem("load");
console.log(JSON.parse(dest));
addDestination(JSON.parse(dest));
/*
        For now, it just works with destionation.html, showing random information from 3 places. 
        This will be expanded to return an HTML file depending on the location, using the database later on.
    */

export default addDestination;
