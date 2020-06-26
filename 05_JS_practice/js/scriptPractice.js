let buttonWork = document.querySelector(".buttonInput");
buttonWork.disable = true;

let ourcheckBox = document.querySelector('input[type="checkbox"]');
let password = document.querySelector('input[type="password"]');


document.querySelector(".checkBoxInput").addEventListener("click", function(){
    console.log(buttonWork);
    buttonWork.classList.add("buttonOn");
});

