//first task

/* let hours = prompt("Введіть години", "hh");
let minutes = prompt("Введіть хвилини", "mm");
let seconds = prompt("Введіть секунди", "ss");

document.querySelector("h1").textContent = rightHours(hours, minutes,seconds);

function rightHours(hour, minute, second)
{
    if (hour >= 0 && hour <= 24 && minute >= 0 && minute <= 60 
        && second >= 0 && second <= 60) {
        return true;
    } else {
        return false;
    }
} */

//second task

/* let sw = screen.width;
let sh = screen.height;
let x = prompt("координати Х", screen.width);
let y = prompt("координати Y", screen.height);


console.log(coordinates(x,y));
document.querySelector("h1").textContent = coordinates(x, y);

function coordinates(x,y)
{
    if (x < sw/2 && y < sh/2) {
        return "first";
    }
    else if (x > sw/2 && y < sh/2) {
        return "друга четверть";
    }
    else if (x < sw/2 && y > sh/2) {
        return "третя четверть";
    }
    else if (x > sw/2 && y > sh/2) {
        return "четвертЯ четверть";
    }
    else{
        return "Z";
    }
}; */

//third
/* let z = prompt("введіть #");
while (z!=0) {
    document.write("<div>#</div>");150
    z--;
} */

/* let digitQ = prompt("введіть число");
while (digitQ!=0) {
    document.write(digitQ, "<br>");
    digitQ--;
} */

/* let q = prompt("перше число");
let w = prompt("друге число");
let qwerty = 1;
reverseCreator(q,w);

function reverseCreator(x, y) {
    let ret = x > y ? true : false;
    console.log(ret);
    if (ret) {
        while (qwerty != x) {
            if (x % qwerty == 0 && y % qwerty == 0) {
                console.log(qwerty);
                document.write(qwerty, "<br>");
            }
            qwerty++;
        }
    }
    if(!ret)
    {
        while (qwerty != y) {
            if (x % qwerty == 0 && y % qwerty == 0) {
                console.log(qwerty);
                document.write(qwerty, "<br>");
            }
            qwerty++;
        }
    }
} */


/* let root = prompt("введіть число факторіал якого хочете взнати");
alert(factorial(root));
function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
} */

/* let digitZ = prompt("Введіть число для перевірки чи просте воно");
let counter = 0;
let d = 1;
do {
    if (digitZ % d == 0) {
        counter++;
        console.log(d, "_");
    }
    if (counter == 2 && d == digitZ) {
        alert("число просте")
    }
    if (counter > 2) {
        alert("число не просте")
        break
    }
    d++;
    
} while (d <= digitZ); */

let fru = ["яблуко", "черешня", "груша", "авокадо", "порічки", "смородина", "вишня", "абрикос"]
fru.sort();
console.log(fru.length)
let i = 0;
var ul = document.getElementById("list");
do {
    console.log(ul);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(fru[i]));
    ul.appendChild(li);
    i++;
} while (i < fru.length);

let fruuu = prompt("введіть назву фрукту");
console.log(fruuu);
i = 0;
do {
    if (fru[i] == fruuu) {
        alert("таки фрукт в списку є")
        
    }
    i++;
} while (i < fru.length);