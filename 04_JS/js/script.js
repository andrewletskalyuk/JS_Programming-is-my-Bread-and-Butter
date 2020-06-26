let div = document.querySelector(".div-style");
console.log(div.classList); //колекція всіх класів, що є в елемента

div.classList.add("shadow"); //додаємо певний клас
div.classList.remove("display");
// element.classList - класи елемента

let btn = document.querySelector("button");
btn.onclick = function () {
    //якщо класу немає від створиться
    div.classList.toggle("display");
}

btn.addEventListener("click", addImg); //додаємо функцію і вона виконується

function addImg() {
    //div.querySelector("img").src = "img/1.png"; //зі шляхом можуть бути проблеми
    div.querySelector("img").setAttribute("src", "img/1.png"); //зі шляхом можуть бути проблеми
    let attr = div.querySelector("img").getAttribute("alt"); //get повертає атрибут
    //те що в середині тега - це атрибут
    div.querySelector("img").removeAttribute("alt"); //якщо в середині буде one two three це видаляємо класи 
    div.querySelector("img").classList.add("one");
    if (div.querySelector("img").classList.contains("one")) {
        div.querySelector("img").classList.add("two");
    }
    console.log(attr);
}

div.querySelector("img").addEventListener("mouseover", function () {
    //this.style.opacity =  0.5;
    //або потім 
    this.classList.add("opacity");
    this.style.transform = "scale(1.1)";
});

div.querySelector("img").addEventListener("mouseout", function () {
    this.style.opacity = 1;
    this.style.transform = "scale(1)";
});