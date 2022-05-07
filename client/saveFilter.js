// import { SearchResults } from "./searchResults.js";
const ls = window.localStorage;

// async function saveFilter(region, season, weather, vacationType) {
//   const data = JSON.stringify({ region, season, weather, vacationType });
//   const response = await fetch("/saveFilter", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   });
//   if (!response.ok) {
//     console.error(`Unable to save ${data} to server`);
//   }
// }
// localStorage.setItem("key", "value");
// let obj = { region: "test", season: " test" };

const searchButton = document.getElementById("search");

searchButton.addEventListener("click", async () => {
  const regionOption = document.getElementById("region");
  const seasonOption = document.getElementById("season");
  const weatherOption = document.getElementById("weather");
  const vacationTypeOption = document.getElementById("vacation");
  let region = regionOption.value;
  let season = seasonOption.value;
  let weather = weatherOption.value;
  let vacationType = vacationTypeOption.value;
  if (
    region === "Region" ||
    season === "Season" ||
    weather === "Weather" ||
    vacationType === "Vacation Type"
  ) {
    alert(`Please Add Filters`);
    return;
  } else {
    localStorage.setItem(
      "filter",
      JSON.stringify({ region, season, weather, vacationType })
    );
  }
});

// searchButton.addEventListener("click", (event) => {
//   //create class instance with region season weather vacation type paramaters
//     //rendersearch results using element id 'col-md-3 text-center' here?
//   const regionOption = document.getElementById('region');
//   const seasonOption = document.getElementById('season');
//   const weatherOption = document.getElementById('weather');
//   const vacationTypeOption = document.getElementById('vacation');
//   console.log("search button clicked");
//   let region = regionOption.value;
//   console.log(region);
//   let season = seasonOption.value;
//   let weather = weatherOption.value;
//   let vacationType = vacationTypeOption.value;
//   console.log("this work");
//   const search = new SearchResults();
//   search.render(document.getElementById("searchResults"));
//   event.preventDefault();
// });

// const favButton = document.getElementById("favorite");
// favButton.addEventListener("click", addToFavorites());
