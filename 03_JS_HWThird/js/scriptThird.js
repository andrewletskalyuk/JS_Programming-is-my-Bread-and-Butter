let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg",
    "img/4.jpg", "img/5.jpg", "img/6.jpg",
    "img/7.jpg", "img/8.gif"
];
console.log(images.length, "наш масив з картинками")
let position = 0;


function changeImage(index) {
    position = index;
    let mI = document.getElementById("mainImage");
    console.log(mI.src);
    console.log(images[index]);
    /*  mI.src = `url(${images[index]})`; */
    mI.src = images[index];
}

function nextImage() {
    let mI = document.getElementById("mainImage");
    if (position <= 7) {
        mI.src = images[position];
        position++;
    } else {
        position = 0;
    }
}

function previousImage() {
    let mI = document.getElementById("mainImage");
    if (position <= 7) {
        mI.src = images[position];
        position--;
        if (position < 0) {
            position = 7;
        }
    } else {
        position = 0;
    }
}