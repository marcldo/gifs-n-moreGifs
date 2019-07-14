let searchBtns = ["funny", "meme", "cat", "dog"];


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
        fetchResponse(queryURL);
    });

};

function buildQueryURL(value) {
    //takes value from clicked button and generates query url
    let apiKey = "PaANgCm1rb8uwRNoXANJXth7wuGiEIbd";
    let queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=10`;
    return queryURL;
};


function fetchResponse(queryURL) {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            displayResponse(data);
            console.log(data);
        });
};

function displayResponse(responseData) {
    let gifContainer = document.getElementById("gifContainer");

    gifContainer.innerHTML = '';

    for (let i in responseData.data) {
        let img = document.createElement("img");
        img.setAttribute("src", responseData.data[i].images.fixed_height_still.url);
        img.setAttribute("dataStill", responseData.data[i].images.fixed_height_still.url);
        img.setAttribute("dataAnimate", responseData.data[i].images.fixed_height.url);
        img.setAttribute("dataState", "still");
        img.setAttribute("class", "gif");
        img.setAttribute("id", `gif${i}`);
        gifContainer.appendChild(img);

        document.getElementById(`gif${i}`).addEventListener("click", animateGif);


    };
};

document.getElementById("userInputBtn").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value;
    newButton(userInput);
});

function animateGif() {
    let state = this.getAttribute("dataState");
    let dataAnimate = this.getAttribute("dataAnimate");
    let dataStill = this.getAttribute("dataStill");
    console.log(state);

    if (state === "still") {
        this.setAttribute("src", dataAnimate);
        this.setAttribute("dataState", "animate");
    }
    else {
        this.setAttribute("src", dataStill);
        this.setAttribute("dataState", "still");
    }

}