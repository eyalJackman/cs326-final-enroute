## Database Description
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
    favorites: String[]  // A list of destinations favorited by the user
}
```

## Work Breakdown
Manan: Created `database.js` and some CRUD operations and express routes 

Darsh: Created MongoDB database and collections on MongoDB, and `addToFavorites`

Eyal : Standardized destinations document and created `getResults` route/CRUD operations relating to it

Simona: Added `createUser`, `checkUser`, `saveFilter` function for log-in along with database functions `createUser`, `findUser`, and `saveFilter`.
