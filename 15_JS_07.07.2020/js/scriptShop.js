//це важливо і в нових запитах використовується
window.onload = initAsync;
let response;
let data;
async function initAsync() {
    response = await fetch('jsonFiles/products.json');
    data = await response.json();
    console.log(data);
    console.log(response);
    postOurElements();
}


function postOurElements() {
    let headerForContainver = document.querySelector("#headerForContainer");
    for (let index = 0; index < data.data.length - 2; index++) {
        let containerForItem = headerForContainver.querySelector(".containerForItem");
        let img = document.querySelector("img");
        console.log(data.data[index].icon);
        document.querySelector("img").src = "img/" + data.data[index].icon + ".png";

        document.querySelector(".pContainer").innerText = data.data[index].name;
        document.querySelector(".pSContainer").innerText = data.data[index].author;
        document.querySelector("#views").innerText = data.data[index].view;
        document.querySelector("#price").innerText = data.data[index].price;

        let stars = data.data[index].rating;
        let starsIn = containerForItem.querySelector(".startsIn, .rate");
        console.log(starsIn);
        for (let index2 = 0; index2 < stars; index2++) {
            console.log(starsIn.children[index2])
            starsIn.children[index2].classList.remove("rate");
        }
        let newItem = containerForItem.cloneNode(true);
        headerForContainver.append(newItem);
    }
}

window.addEventListener("load", () => {
    fetch('jsonFiles/categories.json').then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        letsFigureOurWhatInside(data.data);
    })
});

function letsFigureOurWhatInside(dataIn) {
    let categories = document.getElementById("containerForCategories");
    let whaleForBread = dataIn.map(element => {
        let div = document.createElement('div');
        div.innerText = element.name;
        div.classList.add("styleForCategoriesFifthBlock");
        return div;
    });
    whaleForBread.forEach(element => {
        categories.append(element);
    });
}