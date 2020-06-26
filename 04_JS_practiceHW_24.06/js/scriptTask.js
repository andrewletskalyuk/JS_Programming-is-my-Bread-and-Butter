document.querySelector("#outMyAccount").addEventListener("click", showInnerMenu);
document.querySelector("#outMessages").addEventListener("click", showInnerMenuA);
document.querySelector("#outSettings").addEventListener("click", showInnerMenuB);



function showInnerMenu() {
    let x = document.querySelector(".innerMenu");
    console.log(x);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function showInnerMenuA() {
    let x = document.querySelector(".innerMenuA");
    console.log(x);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showInnerMenuB() {
    let x = document.querySelector(".innerMenuB");
    console.log(x);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

