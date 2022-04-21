# API Planinng

- Destination information:
  - `GET /client/destination`
  - This returns the information (name, image, extract) for a given destination location with the variable `name`
- Save Filter:
  - `POST /saveFilter`
  - Saves the current status of the filter using the dropdowns for `region`, `season`, `weather`, and `vacationType`
  - calls SearchResults which renders a list of destinations
- Search Results:
  - Search results class with list of top 10 destinations
  - different functions for the results

![API Flowchart](https://i.imgur.com/lYQwD6Y.jpg)
# Pictures of Interfaces
![](https://i.imgur.com/uB9YLra.jpg)

![](https://i.imgur.com/6dg6Tpe.jpg)
![](https://i.imgur.com/4D8f1M7.png)
![](https://i.imgur.com/Ro68Qtm.png)

# Link to Heroku App

[Enroute Heroku App](https://cs326-enroute-30.herokuapp.com/)

# Breakup of Work

- eyalJackman:

  - destinationView.js, destination.html, destination.css
  - crud.js
  - index.js tweaks
  - Heroku App Integration

- darshGondalia:
  - searchResults.js
  - saveFilter.js
  - index.js tweaks/adjusments
  - database.js Description
  - saveFilter.js

- mananAbbott:
  - contact_us.html
  - contact.css
  - login.html
  - login.css
  - Assisted in Heroku setup
