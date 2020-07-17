let categories = localStorage.getItem('categoriesKey');
let categoriesParse = JSON.parse(categories);
console.log(categoriesParse);

window.addEventListener("load", () => {
    postOurElements();
    let liCategories = document.getElementById("categories");
    categoriesParse.forEach(element => {
        /* console.log(element); */
        let itemOfCategory = document.createElement('a');
        /* console.log(itemOfCategory); */
        itemOfCategory.innerText = element.name;
        itemOfCategory.classList.add("nav-link");
        itemOfCategory.classList.add("ahref");
        itemOfCategory.href = "#";
        itemOfCategory.addEventListener("click", showCategory, false);
        liCategories.append(itemOfCategory);
    });
});

let items = localStorage.getItem('items');
/* console.log(items); */
let itemsParse = JSON.parse(items);


function showCategory(e) {
    console.log(e.target);
    /* тут дописати фільтра, коли працюємо з категоріями */
    let targetCat = e.target.innerText;
    let id;
    let countId = 0;
    for (let i = 0; i < categoriesParse.length; i++) {
        if (targetCat == categoriesParse[i].name) {
            /* console.log(targetCat);
            console.log(categoriesParse[i].id); */
            /*тепер перевіримо, чи є категорії таких товарів в нашому списку*/
            /* postElementsById(categoriesParse[i].id); */
            id = categoriesParse[i].id;
            for (let j = 0; j < itemsParse.data.length; j++) {
                if (itemsParse.data[j].categoryId == id) {
                    countId++;
                } else {}
            }
        } else {
            document.getElementById("headerForItems").style.display = "flex";
        }
    }
    /* console.log(countId); */
    /*а тепер знаючи ід і чи є з таким ід продукти в нашому списку відтворимо це все*/
    postElementsByIdAndCount(id, countId);

    countId = 0;
    id = 0;
}

function postElementsByIdAndCount(id, countId) {
    /* console.log(id);
    console.log(countId); */
    if (countId == 0) {
        document.getElementById("headerForItems").style.display = "none";
        document.getElementById("imgWithMen").src = "img/upset.png";
    } else {
        document.getElementById("imgWithMen").src = "#";
        let elems = document.querySelectorAll('.containerForItem');
        console.log(elems);
        for (let index = 0; index < elems.length; index++) {
            console.log(elems[index].attributes.categoryId);
            let idForIf = "categoryId=\"" + id.toString() + "\"";

            if (elems[index].attributes.categoryId == id) {
                console.log("щось сталось");
            }
        }
    }
}

function postOurElements() {
    console.log(itemsParse.data);
    let headerForItems = document.querySelector("#headerForItems");
    /* console.log(headerForItems); */
    for (let i = 0; i < itemsParse.data.length; i++) {
        /* console.log(itemsParse.data[i]); */
        let containerForItem = headerForItems.querySelector(".containerForItem");
        containerForItem.setAttribute("categoryId", itemsParse.data[i].categoryId);
        let img = document.querySelector("img");
        /* console.log(img); */
        document.querySelector(".imgContainer").src = "img/" + itemsParse.data[i].icon + ".png";
        document.querySelector(".pContainer").innerText = itemsParse.data[i].name;
        document.querySelector(".pSContainer").innerText = itemsParse.data[i].author;
        document.querySelector("#views").innerText = itemsParse.data[i].view;
        document.querySelector("#price").innerText = itemsParse.data[i].price;
        let stars = itemsParse.data[i].rating;
        let starsIn = containerForItem.querySelector(".startsIn, .rate");
        /* console.log(starsIn); */
        for (let index2 = 0; index2 < stars; index2++) {
            /* console.log(starsIn.children[index2]); */
            starsIn.children[index2].classList.remove("rate");
            /* console.log(stars); */
        }
        let newItem = containerForItem.cloneNode(true);
        headerForItems.append(newItem);
        
        for (let index2 = 0; index2 < stars; index2++) {
            starsIn.children[index2].classList.add("rate");
        }
        newItem.addEventListener("click", ()=> SeeDetails(itemsParse.data[i]));
    }
    document.querySelector(".containerForItem").remove();
}

function SeeDetails(e) {
    localStorage.setItem('ourItem', JSON.stringify(e));
    window.location.href = "item.html";
    console.log(e);
}

/* let products = document.querySelectorAll(".containerForItem");
console.log(products);
products.forEach(function (elem) {
    elem.addEventListener("click", ()=>{
        console.log("привіт клік");
    });
}); */

