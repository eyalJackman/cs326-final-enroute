import { Database } from "./database.js";

export class SearchResults{
    //create class search results
//constructor accept 4 parameters, region, season, weather, vacationtype
//iterate through the list of destinations or call function from database.js and render the elements
// render: for loop with 10 iterations, create div (card) in classlist card, append child to colmd3textcenter
    //constructor(region, season, weather, vacationType){
    constructor(){
        this.region = "region";
        this.season = "season";
        this.weather = "weather";
        this.vacationType = "vacationType";
        this.destinations = [];
    }

    populate(list){
        // create a list of objects = destinations from json file where region = region....
        //this will populate this.destinations from the the json file where region= region, season= season...
    
    }
    addToFavorites(){
        //this will call a function in database that will upload the destination to the 
        //database which will connect the destination to the user so the user can view it 
        //in their favoritues page
    }

    render(element){
        for(let i = 0; i<3; i++){
            console.log(i);
            const box = document.createElement("div");
            box.classList.add("card");

            const place = document.createElement('h5');
            //add place of element at index 0 in destinations list
            place.textContent = 'place';
            place.classList.add('card-header');

            const body = document.createElement("div");
            body.classList.add("card-body");
            
            //add pic of element at index 0 in destinations list
            const pic = document.createElement("img");
            pic.src = "images/cs326_proj1_ftLaud.jpg";
            pic.classList.add("mx-auto rounded d-block");
            //add to favorites button
            // const button = document.createElement('button');
            // button.id = "favorite";
            // button.textContent = "Add to favorites";

            body.appendChild(pic);

            box.appendChild(place);
            box.appendChild(body);
            // box.appendChild(button);
            
            element.appendChild(box);
        }
    }
}