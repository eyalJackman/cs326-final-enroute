// import { Database } from "./database.js";
import { getDescription } from "./destinationView.js";

export class SearchResults {
    //create class search results
    //constructor accept 4 parameters, region, season, weather, vacationtype
    //iterate through the list of destinations or call function from database.js and render the elements
    // render: for loop with 10 iterations, create div (card) in classlist card, append child to colmd3textcenter
    //constructor(region, season, weather, vacationType){
    constructor(destinations) {
        // this.region = "region";
        // this.season = "season";
        // this.weather = "weather";
        // this.vacationType = "vacationType";
        this.destinations = destinations;
    }

    populate(list) {
        // create a list of objects = destinations from json file where region = region....
        //this will populate this.destinations from the the json file where region= region, season= season...
    }
    addToFavorites() {
        //this will call a function in database that will upload the destination to the
        //database which will connect the destination to the user so the user can view it
        //in their favoritues page
    }

    render(element) {
        console.log(this.destinations);
        for (let i = 0; i < this.destinations.length; i++) {
            const currDest = this.destinations[i];
            const box = document.createElement("div");
            box.classList.add("card");

            const place = document.createElement("h5");
            //add place of element at index 0 in destinations list
            place.textContent = currDest["name"];
            place.classList.add("card-header");
            place.addEventListener("click", (ev) => {
                localStorage.removeItem("load");
                console.log(this.destinations[i]);
                localStorage.setItem("load", JSON.stringify(this.destinations[i]));
                window.location.href = "./destination.html";
            });
            const body = document.createElement("div");
            body.classList.add("card-body");

            //add pic of element at index 0 in destinations list
            const pic = document.createElement("img");
            pic.src = currDest["img"];
            pic.classList.add("image");
            //add to favorites button
            const button = document.createElement("button");
            button.id = "favorite";
            button.textContent = "Add to favorites";

            const desc = document.createElement("p");
            let desc_p;
            getDescription(currDest["name"]) //.then(console.log);
                .then(
                    (str) =>
                    (desc.innerHTML = str
                        .slice(1)
                        .split(".")
                        .slice(0, 6)
                        .join(".")
                        .concat("."))
                );
            // desc_p = desc_p.substring(0, 500);
            // desc.innerHTML = desc_p;
            //   const star_div = document.createElement("div");
            //   //   star_div.classList.add("card-star");

            //   const star_span = document.createElement("span");
            //   star_span.classList.add(["material-icons", "md-40", "card-star"]);
            //   star_span.innerHTML = "star";

            //   star_div.appendChild(star_span);

            body.appendChild(pic);
            body.appendChild(desc);
            // <div class="card-star">
            // <span
            //   class="material-icons md-40 card-star"
            //   onclick="DoSomething();"
            //   >star</span
            // >
            // </div>
            box.appendChild(place);
            box.appendChild(body);
            //   box.appendChild(star_div);
            // box.appendChild(button);
            element.appendChild(box);
        }
    }
}