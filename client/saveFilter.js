// import { SearchResults } from "./searchResults.js";

const searchButton = document.getElementById("search");

async function destinationsCRUD(region, season, weather, vacation_type) {
  const data = JSON.stringify({ region, season, weather, vacation_type });
  // return data;
  const response = await fetch("/getResults", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  // alert("working until here");
  if (!response.ok) {
    console.error(`Unable to get ${data} from the server`);
  }
  // if (response.ok) response.json().then((res) => alert(res[0]["name"]));

  const ret = await response.json();
  return ret;
}

searchButton.addEventListener("click", async (ev) => {
  ev.preventDefault();
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
    return;
  } else {
    localStorage.removeItem("filter");
    localStorage.setItem(
      "filter",
      JSON.stringify({ region, season, weather, vacationType })
    );

    localStorage.removeItem("destinations");

    const destinations = await destinationsCRUD(
      region,
      season,
      weather,
      vacationType
    ).then(function (res) {
      localStorage.setItem("destinations", JSON.stringify(res));
    });
  }
  window.location.href = "./results.html";
});

// searchButton.addEventListener("click", async (event) => {
//   //create class instance with region season weather vacation type paramaters
//   //rendersearch results using element id 'col-md-3 text-center' here?
//   const regionOption = document.getElementById("region");
//   const seasonOption = document.getElementById("season");
//   const weatherOption = document.getElementById("weather");
//   const vacationTypeOption = document.getElementById("vacation");
//   console.log("search button clicked");
//   const region = regionOption.value;
//   const season = seasonOption.value;
//   const weather = weatherOption.value;
//   const vacation_type = vacationTypeOption.value;
//   console.log(region);
//   console.log(season);
//   console.log(weather);
//   console.log(vacation_type);
//   console.log("this work");
//   const destination = await destinationsCRUD(
//     region,
//     season,
//     weather,
//     vacation_type
//   );
//   localStorage.setItem("destinations", JSON.stringify(destination));
//   console.log(destination);
//   const searchRes = new SearchResults(destination);
//   searchRes.render(document.getElementById("searchResults"));
//   event.preventDefault();
// });
