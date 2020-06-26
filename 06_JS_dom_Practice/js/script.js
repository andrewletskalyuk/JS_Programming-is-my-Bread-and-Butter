let elem = document.getElementById('number1');
console.log(elem);

elem.onkeydown = function () {
    return "";
}

let butt = document.querySelector("button");
let parentElementforPaint = document.getElementsByClassName("blockFor");

function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    //console.log(color);
    return color;
}
//console.log(butt);


butt.onmousedown = function () {
    //console.log(parentElementforPaint);
    let newEl = document.createElement("div");
    parentElementforPaint[0].append(newEl);
    newEl.classList.add("forPaint");
    newEl.style.backgroundColor = getColor();
    let colorT = getColor();
    //console.log(colorT);
    //console.log(newEl);
    newEl.addEventListener("click", ()=>deleteBlock(newEl));
}

function deleteBlock(elem){
    console.log(elem);
    elem.remove();
}

let ourBlocks = document.getElementsByClassName("blocksForThirdTask");
console.log(ourBlocks.length);
for (let index = 0; index < ourBlocks.length; index++) {
    ourBlocks[index].addEventListener("click", ()=>makeTextColor(ourBlocks[index]));
    console.log(ourBlocks[index]);
}

function makeTextColor(elemW)
{
    console.log(elemW);
    let workEl = document.getElementById('ourTextForWork');
    workEl.style.color = window.getComputedStyle(elemW).backgroundColor;
    console.log(workEl.style.color);
}

