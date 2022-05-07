import { SearchResults } from "./searchResults.js";

const destinations = JSON.parse(localStorage.getItem("destinations"));
const resultsSection = document.getElementById("resultsContainer");
resultsSection.appendChild(document.createTextNode("Test"));
console.log(destinations);

const loadDestinations = (destinations) => {
  const results = new SearchResults(destinations);
  console.log(results);
  for (const destination in destinations) {
    console.log("here");
    results.render(resultsSection, destination);
  }
};

loadDestinations(destinations);
