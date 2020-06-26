const url = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const photos = 'https://jsonplaceholder.typicode.com/photos';


window.onload = function () {
    initAsync(url, getCurrency);
}

async function initAsync(url, empty) {
    let responce = await fetch(url);
    let data = await responce.json();
    getCurrency(data);
}

function getCurrency(data) {
    console.log(data);
    let container = data.map((item) => {
        let p = document.createElement("p");
        p.innerText = `${item.buy} and ${item.ccy}`;
        return p;
    });
    let containerForData = document.querySelector("#exchange");

    container.forEach(element => {
        containerForData.append(element);
    });
}

document.querySelector("#photos").addEventListener("click", loadDataWirhFoto);

async function loadDataWirhFoto() {
    let responcePhoto = await fetch(photos);
    console.log(responcePhoto);
    let dataPhoto = await responcePhoto.json();
    console.log(dataPhoto, 77)
    printPhotoInContainer(dataPhoto, 77);
}

function printPhotoInContainer(photos, number) {
    console.log(photos);
    let containerPhoto = photos.map((item) => {

        let div = document.createElement("div");
        let imgQ = document.createElement("img");
        let pQ = document.createElement("p");

        div.append(imgQ);
        div.append(pQ);

        imgQ.src = item.url;
        pQ.innerText = item.title;
        return div;
    });

    let mainContainer = document.querySelector("#mainContainer");

    //mainContainer.classList.add("text-center justify-content-center".split(' '));
    let spinerCount = 0;
    containerPhoto.forEach(element => {
        console.log(element);
        mainContainer.append(element);
        if (spinerCount == 0) {
            
        }
        spinerCount++;
    });
}