/* $("div") - selector
$(".one") - клас
$("#") - по id */

$('#inputCity').on('keydown', function(e){
    if (event.keyCode == 13) {
        console.log("Да пребудет с нами JavaScript");
        loadData();
    }
});




let test = $("#test");
console.log(test);

$('#test').addClass('one')
    .text('Hello')
    .css({
        color: 'brown',
        'font-weight': 'bold'
    })
    .click(function () {
        //$(this).hide();
        $(this).css({
            padding: '10px',
            height: 'initial'
        });
        /* $(this).removeClass('div'); */
        $(this).toggleClass('div');
        //атрибути
        $(this).attr('data-value', new Date()); //value може бути
        //let p = document.createElement('p');
        $(this).append(document.createElement('p'));

        let text = $(this).data('value');
        console.log(text);
        $('p').text(text);
        //$('p').text($(this).parent().data('value'));
        //$(this).data('value', new Date())
    });

$(document.body).on('click', function () {
    $('div').each(function () { //стрелочні методи не працюють
        $(this).toggleClass('bg');
    })
})



/*  let y = document.querySelector("#test")
    .classList.add('one two')
    .innerText = "Hello"; 
y.addEventListener("click", ()=>{

})   */

let obj;
$.ajax({
    url: 'https://reqres.in/api/users/2',
    type: 'GET', //якщо POST - то 
    success: function (responce) {
        obj = responce.data; //не траба парсить - прийшла API
        console.log(obj);
        //return не можна
    }
})


$.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
        name: "paul rudd",
        surname: 'worker'.toUpperCase()
    },
    success: function (response) {
        console.log(response);
    }
});


const URL = 'https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=';
document.querySelector('#searchBtn').onclick = loadData;

/* масив для координат */
let geo = [];

function loadData() {
    let city = document.querySelector('input[type="search"]').value;
    request(URL + city, showTerminals);
}

let cities = [];

async function request(url, callback) {
    let responce = await fetch(url);
    let data = await responce.json();
    callback(data);
    cities = data.devices.map((elem) => {
        return elem.cityUA;
    })
}


function showTerminals(alldata) {
    let data = alldata.devices;
    console.log(data);
    let main = document.getElementById('main');
    let parent = main.parentElement;
    main.remove();
    geo = [];
    main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.classList.add('row');

    for (let i = 0; i < data.length; i++) {
        /* для коор */
        geo.push({
            lat: +data[i].latitude,
            long: +data[i].longitude
        });

        let blockFullAddress = document.createElement('div');
        blockFullAddress.classList.add('col-sm-6');

        let blockCity = document.createElement('div');
        blockCity.classList.add('col-sm-2');

        let blockPlace = document.createElement('div');
        blockPlace.classList.add('col-sm-2');

        let btnShowOnMap = document.createElement('button');
        btnShowOnMap.className = 'col-sm-1 btn btn-success'

        blockFullAddress.innerText = data[i].fullAddressUa;
        blockCity.innerText = data[i].cityUA;
        blockPlace.innerText = data[i].placeUa;
        btnShowOnMap.innerText = "Show on map";

        btnShowOnMap.setAttribute('data-value', i);
        btnShowOnMap.addEventListener('click', showOnMap);

        main.append(blockFullAddress);
        main.append(blockCity);
        main.append(blockPlace);
        main.append(btnShowOnMap);
    }
    parent.append(main);
}

function showOnMap() {
    const id = this.dataset['value'];
    console.log(geo[id]);
    initMap(+geo[id].long, +geo[id].lat);
}

let map;

function initMap(newlat = 50.38319, newLng = 26.15593) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: newlat,
            lng: newLng
        },
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: {
            lat: newlat,
            lng: newLng
        },
        map: map
    });
}

//document.querySelector('.my-input').onkeydown = sendSearch;


function filterSearch() {
    let li = cities.map((elem)=>{
        let prediction = document.createElement('li');
        prediction.innerText = elem;
        /* prediction.style.display = 'none'; */
        return prediction;
    })
    let ul = document.getElementById('autocompleteSearch');
    li.forEach((elem)=>{
        ul.append(elem);
    });
    /* те, що я вводжу */
    let filter = this.value;

}