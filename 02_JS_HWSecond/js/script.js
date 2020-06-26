/* function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 

}

let digits = [];

for (let index = 0; index < 10; index++) {
    digits.push(getRandomInt(-100, 100));
    console.log(digits[index]);
}

console.log("да пребудет с нами математика")
let sumEl = 0;
    for (let index = 0; index < digits.length; index++) {
        if (digits[index]>0) {
            sumEl+=digits[index];
            console.log(sumEl);
        }
    }
console.log(sumEl);
let min = 100
let max = -100
let inMin = 0
let inMax = 0 */

let numberS = [1,5,6,4,33,4,-98,-34,45,-12,65,34,-13]

/* for (let index = 0; index < numberS.length; index++) {
    if (numberS[index] < min) {
        min = numberS[index]
        inMin = index
    }
    if (numberS[index] > max) {
        max = numberS[index]
        inMax = index
        
    }
}
console.log(min, "мин");
console.log(inMin, "індекс мінімального")
console.log(max, "макс");
console.log(inMax, "індекс максимального")

if (inMin>inMax) {
    inMax=inMin
}

let pr = ()=>{
    let res = 1;
    while (inMin!=inMax) {
        res *= digits[inMin]
        inMin++
    }
    return res
}
console.log(pr(), "добуток чисел що розташовані між мінімальним і максимальним")

let pN = ()=>{
    let res = 1;
    for (let index = 0; index < numberS.length; index++) {
        if (numberS[index] % 2 == 0) {
            res *= numberS[index]
            console.log(res);
        }
    }
    return res
}
console.log(pN(), "добуток чисел за парними номерами")

//від першого від"ємоного знайти суму 
let resSum = ()=>{
    let res = 0;
    numberS.forEach(element => {
        if (element>0) {
            res+=element
        }
    });    
    return res
}

console.log(resSum(), "сума додатніх елементів масиву"); */

//Завдання 4 знайти суму елементыв масиву

let SumElements = ()=>{
    let s = 0
    numberS.forEach(element => {
        s+=element
    });
    return s
}
console.log(SumElements(), "це сума елементів масиву")

//Завдання 5 знайти добуток елементів, що є непарними числами

let proEl = ()=>{
    let q = 1;
    numberS.forEach(element => {
        if (element%2!=0) {
            q*=element
            console.log(element)
        }
    });
    return q
}
console.log(proEl(), "добуток елементів масиву, що є непарними")

let numberMore = [1,5,6,4,33,4,-98,-34,45,-12,65,34,-13,1,5,6,4,33,4,-98,-34,45,-12,65,34,-13,1,5,6,4,33,4,-98,-34,45,-12,65,34,-13]
let elimar = ()=>{
    let min = 1000
    let R = []
    numberMore.forEach(element => {
        if (element<=min) {
            min = element
        }
    });
    numberMore.forEach(element => {
        if (min==element) {
            R.push(element)
        }
    })
    return R
}
console.log(elimar(), " ", elimar().length, " кількість мінімальних елементів")