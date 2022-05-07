import { SearchResults } from "./searchResults.js";

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

async function destinationsCRUD(region, season, weather, vacation_type){
    const data = JSON.stringify({region, season, weather, vacation_type});
    const response = await fetch('/getResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data
    });
    alert('working until here');
    if (!response.ok) {
        console.error(`Unable to get ${data} from the server`);
    }
    return response;
}

searchButton.addEventListener("click", async (event) => {
  //create class instance with region season weather vacation type paramaters
    //rendersearch results using element id 'col-md-3 text-center' here?
  const regionOption = document.getElementById('region');
  const seasonOption = document.getElementById('season');
  const weatherOption = document.getElementById('weather');
  const vacationTypeOption = document.getElementById('vacation');
  console.log("search button clicked");
  const region = regionOption.value;
  const season = seasonOption.value;
  const weather = weatherOption.value;
  const vacation_type = vacationTypeOption.value;
  console.log(region);
  console.log(season);
  console.log(weather);
  console.log(vacation_type);
  console.log("this work");
  const destination = await destinationsCRUD(region, season, weather, vacation_type);
  console.log(destination);
  const searchRes = new SearchResults(destination);
  searchRes.render(document.getElementById("searchResults"));
  event.preventDefault();
});
