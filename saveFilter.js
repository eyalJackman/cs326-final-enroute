import { readFile, writeFile } from 'fs/promises';

const regionOption = document.getElementById('region');
const seasonOption = document.getElementById('season');
const weatherOption = document.getElementById('weather');
const vacationTypeOption = document.getElementById('vacation');
const searchButton = document.getElementByID('search');

searchButton.addEventListener('click', async (e) => {
    const region = regionOption.value;
    const season = seasonOption.value;
    const weather = weatherOption.value;
    const vacationType = vacationTypeOption.value;
    let filterObj = {region: region, season: season, weather: weather, vacationType: vacationType};
    let data = await fetch(`http://localhost:3000/filters`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: name, word: word, score: score}),
      });
    // const json = await crud.createObj(filterObj);
    // output.innerHTML = JSON.stringify(json);
    // await allCounters();
  });