# Team Name: 30-enroute
## Application Name: enRoute

**Semester**: Spring 2022

### Overview
- The enRoute application is a tool used to find your next travel destination. The web application will take in a number of parameters to determine the best fit for you. You can sign up and save your preferred destinations. This is innovative in the way that it is designed for college students. It is built to find fun locations that are not too expensive for school breaks.

### Team Members
- Eyal Jackman
- Simona Zilberberg
- Darsh Gondalia
- Manan Abbott


### User Interface
- **Homepage** (`index.html`) - The purpose of this view is to access the filter and to send a request to get the results.

![index.html](https://i.imgur.com/BF1imye.jpeg)

- **Results Page** (`results.html`) - Gives a list of the best places to travel to given the filter. This also allows for a new search.

![Results](https://i.imgur.com/JTtn9ns.png)

- **Login Page** (`login.html`) - This page is used to login in order to save your favorite locations and load them in.

![](https://i.imgur.com/GZEBzfn.png)

- **Sign-up Page** (`signup.html`) - This page is responsible for signing up the user.

![](https://i.imgur.com/zOlTe0W.png)


- **Contact Us Page** (`contact_us.html`) - A page to contact us

![](https://i.imgur.com/RDpC2bj.png)

### API
Login Information:
- `POST /createUser`
  - `body: {user, password, fullname, email, phone}`
  - Sends user information to MongoDB
- `POST /checkUser`
  - `body: {user, password}`
  - Checks to make sure that user information is inside MongoDB

Search Results:
- `POST /addtofavorites`
  - `body: {username, favorite}`
  - Adds favorite destination to user’s personal list of destinations
- `POST /getResults`
  - `body: {region, season, weather, vacation_type}`
  - Returns a list of possible destinations based on the filter’s values
- `PUT /updatename`
  - `body: {_id , name}`
  - Updates User’s name in the database
- `PUT /updatepassword`
  - `body: {_id , password}`
  - Updates User’s password in the database
- `PUT /updatemail`
  - `body: {_id , mail}`
  - Updates User’s email in the database

### Database
The `destinations` document represents the properties of each destination.

```
destinations document
{
    _id: <ObjectId1>,
    name: String, // name of destination
    region: String, // destination's region
    season: String, // current season
    weather: String, // preferred weather
    vacation_type: String, // Preferred type of vacation
    img: String, // URL of destination's image
}
```

The `users` document represents the properties of each user.
```
users document
{
    _id: <ObjectId1>, 
    username: String,  // User's username
    password: String,  // User's password
    fullname: String,  // User's full name
    email: String,     // User's email
    phonenumber: Double, // User's phone number
    favorites: String[]  // A list of destination names favorited by the user (this corresponds to the name of the destination document)
}
```



### URL Routes/Mappings
- `/` - Leads to the home page
- `/login` - Leads to the login page
- `/register` - Leads to the sign-up page
- `/contact` - Leads to the Contact Us page

### Authentication/Authorization
- In order to register/sign up for an account, the user must go to `/register` and put in user information. This will send a request to the MongoDB database using an HTTP POST request and this would make sure that there was no existing user with the same username. If not, this will create an account with the given user information.
- In order to sign in, the user must go to `signin` and put in their username and password. If this is correct (checking the MongoDB databse), they will be signed in. Otherwise, they will not be logged in.

### Division of Labor
Eyal:
- Ideas.md
- Initial index.html
- Destination Page (`destination.html`, `destinationView.js`, `destination.css`) using Mock Database initially (then MongoDB)
- A lot of code cleanup
- Uploaded and maintained heroku site --- debugging many H10 errors along the way
- Fixed routes (index.html/home.html/results.html)
- CRUD Operations with file system
- Setup.md
- milestone2.md
- Logo and favicon
- `getResults` functionality (API call and CRUD operation in `database.js`)
- Added global login/user_information
- Local storage of destination results from Mongo/dynamic display in `destination.html`
- `results.html` layout/functionality (rendering the results with descriptions/images/click to destination)
- More Heroku errors (class-based --> functional express)
- Fixed routes after login
- milestone3.md
- Style cleanup
- Set up Static Routes
- Helped with authentication

Simona Zilberberg:
- Website Mockup
- Collaborated to develop concept
- Index.html:
  - Header bar 
  - Login , sign up , and logout buttons and functionality (login.js and header.js)
  - Filter bar
  - tempFilter functionality to save the current filter in an object to put into a JSON file
  - Photo Carosel 
- userProfile.html
- Login.html
- Signup.html
- Index.js:
  - createUser
  - getResults
  - checkUser
- Overall code clean up

## Conclusion
- The team's experience was very positive. Each of us learned a lot about front-end and back-end development, and the connection between them. We learned how to work on a team, building our codebase off of other people and learning to use `git` in an intelligent manner. Before starting the project, it would have helped to know all of the different web programming concepts before. If we start a brand new project today, it would go a lot smoother because the connections of how everything works is significantly clearer now, but that is the point of the project. We ran into a few merge errors, a lot of H10 heroku errors, and some HTTP request failures. We encountered some difficulty being able to work as a unit because we had overlap in our work and ideas that led to some difference in opinions, but we were able to sort them out.
