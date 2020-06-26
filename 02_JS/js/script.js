let a = 255;


console.log(a.toFixed(2));

console.log(Math.floor(a)); //округлення до найменшого цілого
console.log(Math.ceil(a)); //до найбільшого цілого
console.log(Math.trunc(a)); //до найменшого цілого
console.log(Math.round(a));  
console.log(typeof +(a.toString(2) + 3));

let str = "hello, today, is, \"friday\", \\ \nby, June"; //'friday'
console.log(str);
console.log(str.length);

let str2 = "hello " +  a + "number";
let str3 = str.concat(" ", str2);
console.log(str3);
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

let res = str3.split(",") ;

console.log(res);

let symbols = str.split("");
console.log(symbols);

console.log(str.indexOf("e")); //lastIndexOf
console.log(str.lastIndexOf("e", 2)); //15 з якої позиції починаємо пошук
console.log(str.substr(7,15));
console.log(str.search("e"));

console.log(str.slice(7,15)); //порубай і викіть

let array = [1,2,3,4,5, "str", [23.432, 777, {a:"daas"}]];

array.length = 40; 
console.log(array.length);
console.log(array);
let ss = array[6];
console.log(typeof ss);

for (let index = 0; index < array.length; index++)
 {
    console.log(array[index])    ;
}

for(let item of array)
{
    console.log(item);
}

//void
array.forEach(element =>{ 
    console.log(element)
});


//функція буде виконуватись для кожного елелменту масиву
let newArr = array.map(nameFunc); 
console.log(newArr);

function nameFunc(item) //може вертати або не вертати 
{
    return item* 10;
}

newArr.push(123);
newArr.pop(); //видаляє останній елемент
newArr.shift(); //видалити перший, зсунути всі інші
newArr.unshift(newArr);

 //з 6 по 9 видалено
console.log(newArr.splice(6, 45, [322,-33,564,123]));
console.log(newArr.splice(newArr.length-1, 10, [322,-33,564,123]));
console.log(newArr);

//стрінг не рахується масивом
let symbolsZ = str.split("");
let filtered = symbolsZ.filter(function(elem){
    return elem == "o" || elem == "a";
})
console.log(filtered);

newArr = newArr.sort(); //сортує як порівняння рядочків
console.log(newArr); 
/* newArr.sort((a,b)=>{
    if(a>b) return 1;
    else if(a ==b) return 0;
    else if(a<b) return -1;
}); */

newArr = newArr.sort((a,b)=>a-b); //якщо b-a то за спаданням відсортує
console.log(newArr); 
console.log(newArr.find((a)=> a> 1000));

function random(min, max)
{
    return min + Math.trunc(Math.random()*(max-min+1));
}

console.log("Random " + random(-10, 10));