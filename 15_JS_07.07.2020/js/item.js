let item = JSON.parse(localStorage.getItem('ourItem'));
console.log(item);
let itemWithFoolDescription;
window.addEventListener("load", () => {
    fetch('jsonFiles/details.json').then(responce => {
        return responce.json();
    }).then(data => {
        let i = 0;
        console.log(data);
        itemWithFoolDescription = data.map(function (elem) {
            if (elem.id == item.id) {
                console.log(elem);
                showItem(elem);
                i++;
                return elem;
            } else {
                return null;
            }
        });
    });
});


function showItem(e) {
    document.querySelector(".col-8 .name").innerHTML = e.name;
    document.querySelector(".col-8 .imgIn").src = "att/" + e.icon + ".png";
    let elementA = document.querySelector("#imgInside");
    for (let i = 0; i < 4; i++) {
        let temp = document.createElement("img");
        temp.classList.add("imgAtt");
        temp.src = "att/" + e.icon + ".png";
        elementA.append(temp);
    }
    document.querySelector("#descriptionP").innerText = e.description;
    document.querySelector("#reciewsTotal").innerText = "Reviews (" + e.view + " Total)";
    document.querySelector("#namePrice").innerText = e.name;
    document.querySelector("#dollarPrice").innerText = e.price;
    document.querySelector('#viewRight').innerText = e.view;
    console.log(document.querySelectorAll('span[att]'));
    let starsIn = document.querySelectorAll(".rate");
    for (let index2 = 0; index2 < e.rating; index2++) {
        starsIn[index2].classList.remove("rate");
    }
    document.querySelector(".starsForRate").innerText = "(" + e.voted + ")";
    document.querySelector(".dolPrice").innerText = "$" + e.price;
    document.querySelector("#reviewsQ").innerHTML = e.view;
    document.querySelector("#salesIn").innerText = e.sales;
    document.querySelector("#deliveryIn").innerText = e.time_deliv + "day(s)";
}