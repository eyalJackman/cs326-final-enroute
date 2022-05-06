import express from "express";
import { Database } from './database.js';

class Server{
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use(express.json());
    this.app.use('/', express.static('client'));
  }

  async initRoutes(){
    const self = this;

    this.app.post('/createUser', async (req, res) => {
      try {
        const { user,password } = req.body;
        const account = await self.db.createUser(user, password);
        res.send(JSON.stringify(account));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/checkUser', async (req, res) => {
      try {
        const validUser = await self.db.readUser();
        //TODO find what validUser will return;
        if(validUser === "null"){
            res.send(JSON.stringify("False"));
        }else{
            res.send(JSON.stringify("True"));
        }
      } catch (err) {
        res.status(500).send(err);
      }
    });
  
  }

  async initDb() {
    this.db = new Database(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 8080;
    this.app.listen(port, () => {
      console.log(`ScoreServer listening on port ${port}!`);
    });
  }
}

console.log(process.env.MONGODB_URI);
const server = new Server(process.env.MONGODB_URI);
server.start();

// const TEMP_FILTER_FILE = "tempFilter.json";

// // Returns a function that will read a score file.
// function readFromFile(path) {
//     return async() => {
//         try {
//             const data = await readFile(path, "utf8");
//             const response = JSON.parse(data);
//             return response;
//         } catch (error) {
//             // Likely the file doesn't exist
//             return [];
//         }
//     };
// }
// const readFilters = readFromFile(TEMP_FILTER_FILE);

// function saveToFilterFile(path) {
//     return async(region, season, weather, vacationType) => {
//         const data = { region, season, weather, vacationType };
//         const filters = await readFilters(path);
//         filters.push(data);
//         writeFile(path, JSON.stringify(filters), "utf8");
//     };
// }
// const saveFilter = saveToFilterFile(TEMP_FILTER_FILE);

// // Create the Express app and set the port number.
// const app = express();
// const port = 3000;

// // Add Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //Add the morgan middleware to the app.
// app.use(logger("dev"));

// // Add the express.static middleware to the app.
// app.use(express.static("client"));

// app.get("/", (req, res) => {
//     res.sendFile("client/home.html", { root: "./" });
// });

// // app.get("/client/destination", (req, res) => {
// //     res.send("Test");
// //     // const params = req.params;
// //     // const { name } = params;
// //     // await destinationView.addDestination(name); (Changes destination.html and then uploads it to the DOM)
// //     // res.sendFile("../client/destination.html");
// // });

// app.post("/saveFilter", (req, res) => {
//     const filter = req.body;
//     saveFilter(filter.region, filter.season, filter.weather, filter.vacationType);
//     res.status(200).json({ status: "success" });
// });

// app.all("*", async(request, response) => {
//     response.status(404).send(`Not found: ${request.path}`);
// });

// // Start the server on port 3000.
// app.listen(process.env.PORT || port, () => {
//     console.log(`Server started on http://localhost:${port}`);
// });