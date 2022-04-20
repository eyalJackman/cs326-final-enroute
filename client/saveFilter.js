const searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
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
    //let filterObj = {region: region, season: season, weather: weather, vacationType: vacationType};

    async function saveWordScore(region, season, weather, vacationType){
      fetch(`http://localhost:3000/saveFilter`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({region: region, season: season, weather: weather, vacationType: vacationType}),
      });
    }
    const postFilter = async (resource = "saveFilter") => {
      let response = await saveWordScore(region, season, weather, vacationType);
    }
    postFilter();
  });