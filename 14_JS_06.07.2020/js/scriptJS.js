const urlTemp = 'http://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=be33dfb3218200cd9fbca11edf02e145';

let url1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
let urlCity = '';
let url2 = '&appid=be33dfb3218200cd9fbca11edf02e145';
let responce = '';
let data = '';

/* await initAsyncGetData(); */

let input = document.getElementById("myInput");
document.getElementById("myBtnInput").addEventListener('click', ()=>{
        getData();
        initAsyncGetData();
});

input.addEventListener("keyup", function (event) {
    getData(event);
    if (event.keyCode === 13) {
        console.log(urlCity);
        initAsyncGetData();
        console.log("Enter");
    }
    // Trigger the button element with a click
});

function getData(event){
    let city = document.getElementById("myInput").value;
    urlCity = url1 + city + '&units=metric' + url2;
}

async function initAsyncGetData() {
    response = await fetch(urlCity);
    data = await response.json();
    console.log(data);
    //createPost(data, 15);
    showData(data);
}

function showData(responce) {
    console.log(responce.cod);
    if (responce.cod=="404") {
       document.getElementById("withoutResponce").classList.remove("error");    
    }
    else{
       document.querySelector("") 
    }
}