document.body.style.backgroundColor = "pink";
document.body.style.margin = 0;

document.body.innerHTML += "<h1 class='center'>Hello</h1>";

//id
first.style.backgroundColor="red";
first.style.width= "100px";

document.getElementById("first").style.borderRadius = "50%";

let country = prompt(" Підтвердіть дію: \n Виберіть країну \n Україна \n Німеччина \n Франція \n Австрія \n Болгарія");
let classSecond = document.querySelector(".second"); //це ссилка на блок
let matrix = [["Ukraine", "Kyiv",], []]
switch(country)
{
    case "UA":
        document.getElementById("ua").style.display = "block";
        break;
    case "PL":
        document.getElementById("pl").style.display = "block";
        break;
    case "GM":
        document.getElementById("gm").style.display = "block";
        break;
    case "FR":
        document.getElementById("fr").style.display = "block";
        break;
}

