window.onload = Init;

function Init(){
    setTimeout(()=>{ //на загрузку сторінки затримка 1 секунда
        //document.querySelector(".spinner").dataset.load = "on";
        document.querySelector(".spinner").setAttribute("data-load" = "on");
    }, 1000);
    setTimeout(()=>{
       /*  document.querySelector(".spinner").removeAttribute("load", "on"); */
       document.querySelector(".spinner").removeAttribute("data-load", "on");
       document.querySelector(".spinner").parentElement.className = "";
    }, 6000);

    /* setInterval(function(){
        let info = document.querySelector(".info");
        info.hidden = !info.hidden;
    }, 1000); */
};
//data-attributes - користувацькі атрибути
//dataset - вони всі тут
let elems = document.body.children;

for(let item of elems)
{
    console.log(item);
    if(item.localName!="script")
    item.classList.add("border");
}

Array.from(elems).forEach((x)=>console.log(x));

//
let container = document.querySelector("img").closest("container");
console.log(container);
//чи містить елемент
console.log(container.contains(document.querySelector("img")));