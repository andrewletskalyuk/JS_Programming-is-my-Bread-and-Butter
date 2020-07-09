//це важливо і в нових запитах використовується
window.onload = initAsync;
let response;
let data;
async function initAsync(){
    response = await fetch('jsonFiles/products.json');
    data = await response.json();
    console.log(data);
    console.log(response);
    postOurElements();
}


function postOurElements() {
    let headerForContainver = document.querySelector("#headerForContainer");
    console.log(headerForContainver);
}