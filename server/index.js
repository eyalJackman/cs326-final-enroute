import express from "express";
import { Database } from "./database.js";
import * as url from "url";

// class Server {
//   constructor(dburl) {
//     this.dburl = dburl;
//     this.app = express();
//     this.app.use(express.json());
//     this.app.use(express.static("client"));
//   }

//   async initRoutes() {
//     const self = this;

//     this.app.post("/createUser", async (req, res) => {
//       try {
//         const { user, password } = req.body;
//         const account = await self.db.createUser(user, password);
//         res.send(JSON.stringify(account));
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     });

//     this.app.post("/checkUser", async (req, res) => {
//       try {
//         const { user, password } = req.body;
//         const validUser = await self.db.findUser(user, password);
//         res.send(validUser);
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     });

//     this.app.post("/saveFilter", async (req, res) => {
//       try {
//         const { region, season, weather, vacation_type } = req.body;
//         const filter = await self.db.saveFilter(
//           region,
//           season,
//           weather,
//           vacation_type
//         );
//         res.send(JSON.stringify(filter));
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     });
//     this.app.post("/getResults", async (req, res) => {
//       try {
//         const parsedURL = url.parse(req.url, true);
//         const { region, season, weather, vacation_type } = parsedURL.query;
//         const filter = await self.db.getResults(
//           region,
//           season,
//           weather,
//           vacation_type
//         );
//         // res.send(JSON.stringify(parsedURL.query));
//         res.send(JSON.stringify(filter));
//       } catch (err) {
//         res.status(500).send(err);
//       }
//     });
//   }

//   async initDb() {
//     this.db = new Database(this.dburl);
//     await this.db.connect();
//   }

//   async start() {
//     await this.initRoutes();
//     await this.initDb();
//     const port = process.env.PORT || 8080;
//     this.app.listen(port, () => {
//       console.log(`Server listening on port ${port}!`);
//     });
//   }
// }

// console.log(process.env.MONGODB_URI);
// const server = new Server(process.env.MONGODB_URI);
// server.start();

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
//     return async(region, season, weather, vacation_type) => {
//         const data = { region, season, weather, vacation_type };
//         const filters = await readFilters(path);
//         filters.push(data);
//         writeFile(path, JSON.stringify(filters), "utf8");
//     };
// }
// const saveFilter = saveToFilterFile(TEMP_FILTER_FILE);

// // Create the Express app and set the port number.
const app = express();
const port = 3000;

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Add the morgan middleware to the app.
// app.use(logger("dev"));

// Add the express.static middleware to the app.
app.use(express.static("client"));

app.get("/", (req, res) => {
    res.sendFile("client/home.html", { root: "./" });
});

// app.get("/client/destination", (req, res) => {
//     res.send("Test");
//     // const params = req.params;
//     // const { name } = params;
//     // await destinationView.addDestination(name); (Changes destination.html and then uploads it to the DOM)
//     // res.sendFile("../client/destination.html");
// });

// app.post("/saveFilter", (req, res) => {
//   const filter = req.body;
//   saveFilter(
//     filter.region,
//     filter.season,
//     filter.weather,
//     filter.vacation_type
//   );
//   res.status(200).json({ status: "success" });
// });

app.all("*", async(request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

// Start the server on port 3000.
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on http://localhost:${port}`);
});