import { getDescription } from "./destinationView.js";

export class FavoriteRender{
    constructor(array){
        this.destinations = array;
    }
    async getObject(name){
        const data = JSON.stringify({name});
        const response = await fetch('/getfavoritedestination', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
        });
        return response;
    }
    render(element) {
        console.log(this.destinations);
        for (let i = 0; i < this.destinations.length; i++) {
            console.log(this.destinations[i]);
            const currDest = this.getObject(this.destinations[i]);

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