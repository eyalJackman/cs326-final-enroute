// import { SearchResults } from "./searchResults.js";

async function saveFilter(region, season, weather, vacationType) {
  const data = JSON.stringify({ region, season, weather, vacationType });
  const response = await fetch('/saveFilter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  if (!response.ok) {
    console.error(`Unable to save ${data} to server`);
  }
}

const searchButton = document.getElementById('search');

searchButton.addEventListener('click', async () => {
  const regionOption = document.getElementById('region');
  const seasonOption = document.getElementById('season');
  const weatherOption = document.getElementById('weather');
  const vacationTypeOption = document.getElementById('vacation');
    console.log("search button clicked");
    let region = regionOption.value;
    console.log(region);
    let season = seasonOption.value;
    let weather = weatherOption.value;
    let vacationType = vacationTypeOption.value;
    let filter = await saveFilter(region, season, weather, vacationType);
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
