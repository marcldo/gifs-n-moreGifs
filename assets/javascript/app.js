let searchBtns = ["apple", "bunny", "cat", "dog"];


makeDefaultButtons(searchBtns);

function makeDefaultButtons(arr) {
    for (let a of arr) {
        newButton(a);
    };

};


function newButton(value) {
    console.log(value);
    //makes new button element, assigns value, appends to button div, adds event listner
    let button = document.createElement("button");
    button.innerText = value;
    button.setAttribute("value", value);
    button.setAttribute("type", "button");
    button.setAttribute("id", "gifBtn" + value);
    document.getElementById("buttonContainer").appendChild(button);
    document.getElementById("gifBtn" + value).addEventListener("click", function () {
        let value = this.getAttribute("value");
        let queryURL = buildQueryURL(value);
        console.log(queryURL);
    });

};

function buildQueryURL(value) {
    //takes value from clicked button and generates query url
    let apiKey = "PaANgCm1rb8uwRNoXANJXth7wuGiEIbd";
    let queryURL = `api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=10`;
    return queryURL;
}





