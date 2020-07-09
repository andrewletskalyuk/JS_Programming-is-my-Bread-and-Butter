/* let buttonWork = document.querySelector(".buttonInput");
buttonWork.disable = true;

let ourcheckBox = document.querySelector('input[type="checkbox"]');
let password = document.querySelector('input[type="password"]');


document.querySelector(".checkBoxInput").addEventListener("click", function(){
    console.log(buttonWork);
    buttonWork.classList.add("buttonOn");
});
 */

let buttonZ = document.querySelector("button");
console.log(buttonZ);
document.querySelector("button").onclick = () => {
    let inputData = document.querySelectorAll(".input100");
    console.log(inputData.length + " кількість полів для вводу ");
    for (let index = 0; index < inputData.length; index++) {
        if (inputData[index].value == "") {
            inputData[index].classList.add("redBorder")
        }
        if (inputData[index].value != "") {
            inputData[index].classList.remove("redBorder")
        }
    }
    CheckRadioAndCheckBox();
}
function CheckRadioAndCheckBox() {
    const radoiB = document.querySelectorAll('input[name="sex"]');
    console.log(radoiB.length + " наші радіобатони")
    let countR = 0;
    radoiB.forEach(element => {
        if (element.checked) {
            countR++;
        }
    });
    console.log(countR + " це рахувальник для радіобутонів")
    if (countR == 0) {
        alert("Виберіть стать")
    } else {
        countR = 0;
    }
    if(document.querySelector('input[type="checkbox"]').checked!=true)
    {
        alert("не всі поля заповнені")
    }

    let passWords = document.querySelectorAll('input[type="password"]');
    console.log(passWords.length + " кількість контейнерів password")
    if (passWords[0].value != passWords[1].value) {
        alert("Паролі не співпадають")
    }
}