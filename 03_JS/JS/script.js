/* let colors = ["red", "green", "royalblue", "orange", "purple"];
let i = 0;

function changeBG() {
    if (i == colors.length)
        i = 0; */
/* це доступ до id */
//document.getElementById("rectangle").style.backgroundColor = colors[i++];
//let elements = document.getElementsByClassName("rect");
//let elements = document.getElementsByTagName("div");

//console.log(elements);
//elements[0].style.backgroundColor = colors[i++];
// document.querySelector("#rectangle").getElementsByTagName
/*  document.querySelector("body>.rect").style.backgroundColor = colors[i++]; //вертає тільки перший
}
//масивчики вертає
console.log(document.querySelectorAll(".rect")); */

let films = ["Миссия навыполнима", "Война миров", "Львы для ягнят", "Рыцарь дня", "Остин Пауэр", "Последний самурай", "Ванильное небо", "Дни грома", "Человек дождя", "Джери Магуайер"];
let images = ["../img/MI.jpg", "../img/War.jpg", "../img/lions.jpg", "../img/rycar.jpeg", "../img/ostin.jpg", "../img/samuray.jpg", "../img/vanila.jpg", "../img/thunder.jpg", "../img/rain.jpg", "../img/Jerry.jpg"];
let info = ["«Миссия невыполнима» (англ. Mission: Impossible) — серия фильмов-боевиков, состоящая из шести частей, выпущенных с 1996 по 2018 год и основанная на одноимённом телесериале. В центре сюжета — история агента Итана Ханта, которого на протяжении всей серии играет Том Круз."]


function actionForBody(value)
{
    console.log("here");
    document.querySelector("#tomKruse").style.backgroundImage =`url(${images[value]})`;
    document.querySelector("#tomKruse").style.color = "white";
    let myDoc = document.querySelector("#Description");
    myDoc.innerHTML = info[value];
    console.log("here");
    // document.getElementById("Description").style.
}

let person = {
    fullname: function(){
        let txt = "";
        for(let item of arguments)
        {
            txt += item + " ";
        }
        return  txt + this.name + " " + this.surName;
    }
}

let ivan = {
    name: "Ivan",
    surName: "Jovanordist",
    SetAge(age){
        if(typeof (age) == "number")
        this.age = age;
    },
}; //це обєкт

let stepan = {
    name: "Stepan",
    surName: "Stepanovskiy",
    SetAge(age){
        if(typeof (age) == "number")
        this.age = age;
    },
    passw: "1111",
    get password(){
        return this.passw;
    },
    set password(password){
        this.passw = password;
    }
};

stepan.password = "aaa";
console.log(stepan.password);

let arr = Object.values(stepan);
console.log(arr);


console.log(person.fullname.call(ivan, 34, 45, "hello"));
console.log(person.fullname.apply(stepan,  [34, 45, "hello"] ));

console.log(Math.min.apply(null, [3,1,4]));


let other = stepan;
other.name = "Katia";
console.log(stepan);

(function(){
    console.log(new Date());
})();

function User(name, age)
{
    this.name = name;
    this.age = age;

    this.Show = function()
    {
        console.log(name + " " + age);
    }

    
}

let user1 = new User("Olia", 20);
user1.Show();

/* person.age = 20;
person.gender = "male";
//delete person.age;
person.SetAge("13");
console.log(person);
document.querySelector(".rect").innerHTML = person.name + " " + person["surName"];

for(let item in person)
{
    console.log(item + ":" + person[item]);
} */

//зробити рядок з об"Єкта
let str = JSON.stringify(stepan);
console.log(str);

//------------------------
document.querySelector("input[type='button']").addEventListener("click", checkData);
document.querySelector("input[type='button']").addEventListener("click", changeBg);
 
function checkData() {
    let name = document.querySelector("input").value;
    let password = document.querySelector("form>input:nth-child(3)").value;
    console.log(name + " " + password);
 
}
 
function changeBg() {
    document.body.style.backgroundColor = "orange";
}