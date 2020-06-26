document.bgColor = "green";

console.log(12+"Andrew");
/* змінні */
a=12;
a="hello";
console.log(a);
//ES5 - це взідци в ES6 є константи
var v=122n;
console.log(typeof(v));
console.log(typeof 34.66);

let n=123.45;
let b;
let c="hello";
let str ='other str';
let str2 = `new str ${n}`;
let d = null;

console.log(typeof b); //underfined
console.log(typeof d);
console.log(typeof c);
console.log(typeof str);
console.log(typeof str2, '=>', str2);
console.log(typeof str2 + '=>' + str2);
console.log(7/"2");
console.log(7/2);
console.log(c/str); //NaN - not a number;
console.log(NaN == NaN);
console.log(1/0); //Infinity - це також числовий тип
b=4000000000; 
b = 4e-9; 
console.log(b); //4 *10 ^ 9 

const exit = false;
//exit= true;
console.log(exit + 4);

var number = 100; 
{
    var number = -90;
    console.log(number);
}
console.log(number);

let number2 = 200;
{
    let number2 = 400;
    console.log(number2);
}
console.log(number2);
/* for(let i=0; i<5; i++)
{

}
console.log(i); */

let name = prompt("Enter num1", "test"); 
//let name = parseFloat(prompt("Enter name", "test")); 
let num = +prompt("Enter num2:"); //+додає
document.write("<h2>Hello, " + name + " </h2>");
console.log(num + 4);

//> < >= <= != == !== ===
if(name > num){
    document.writeln(name + " > " + num);
}
else if(name < num){
    document.writeln(name + " < " + num);
}
else{
    document.writeln(name + ' == ' + num);
}

if("34" === 34){ //=== перевірка включаючи тип даних
                 //==нестрога перевірка на тип
    console.log(true);
}
else{
    console.log(false);
}
num++;
console.log(num++);

result = 3 ** 3; //піднесення до степеня
console.log(result);

/* let answer = confirm("The world is my oyster");
if(answer==true){
    document.write("<h1>Кінець терміну перездачі істипів</h1>");
}
else{
    document.write("<h1>Aqua</h1>");
} */

/* let day = +prompt("Enter day (1..7)");
switch(day){
    case 1: console.log("First");
    break;
    default:
        console.log("Bomba");
} */

for(let i=10; i> 0; i--)
{
    console.log(i);
    if(i==5)
    break;
}