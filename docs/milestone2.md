# API Planinng

- Destination information:
  - `GET /client/destination`
  - This returns the information (name, image, extract) for a given destination location with the variable `name`
- Save Filter:
  - `POST /saveFilter`
  - Saves the current status of the filter using the dropdowns for `region`, `season`, `weather`, and `vacationType`

![API Flowchart](https://i.imgur.com/lYQwD6Y.jpg)

# Link to Heroku App

[Enroute Heroku App](https://cs326-enroute-30.herokuapp.com/)

# Breakup of Work

- eyalJackman:
  - destinationView.js, destination.html, destination.css
  - crud.js
  - index.js tweaks/Heroku App Integration
