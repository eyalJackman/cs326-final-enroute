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
    // const json = await crud.createObj(filterObj);
    // output.innerHTML = JSON.stringify(json);
    // await allCounters();
  });

  async function basicServer(request, response) {
    const parsedURL = url.parse(request.url, true);
    const options = parsedURL.query;
    const pathname = parsedURL.pathname;
    const method = request.method;
  
    // if (method == 'POST' && pathname.startsWith('/create')) {
    //   createObj(response, options);
    // } else {
    //   response.writeHead(404, headerFields);
    //   response.write(JSON.stringify({ error: 'Not Found' }));
    //   response.end();
    // }
  }
  
  // Start the server on port 3000.
  http.createServer(basicServer).listen(3000, () => {
    console.log('Server started on port 3000');
  });

