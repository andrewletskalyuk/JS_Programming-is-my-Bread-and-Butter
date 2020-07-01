document.querySelector("button").addEventListener('click', createRecipe);

let icons = ["fas fa-user", "far fa-clock", "fab fa-buromobelexperte", "fas fa-burn"]
let i = 1;


function createRecipe() {
    let describing = document.getElementById("describing");
    console.log(describing);
    describing.classList.toggle("unvisible");

    let containerForInfo = document.createElement('div');
    containerForInfo.setAttribute('id', 'containerForInfo');
    containerForInfo.classList.add('container');
    describing.append(containerForInfo);

    let recipeName = document.createElement('h2');
    recipeName.classList.add('bg-light');
    let rName = document.getElementById("recipeName");
    /* console.log(rName); */
    recipeName.innerText = rName.value;
    containerForInfo.append(recipeName);

    let dishtype = $('#dishType option:selected').text();
    /* або можна було без JQuery */
    let dishTypeQ = document.getElementById("dishType");
    let dishTypeQValueSelected = dishTypeQ.options[dishTypeQ.selectedIndex].text;
    console.log(dishTypeQValueSelected);
    console.log(dishtype);

    let dType = document.createElement('p');
    dType.classList.add('bg-light');
    dType.innerText = dishTypeQValueSelected;
    containerForInfo.append(dType);

    let rowsForIconsElement = document.createElement('div');
    /* console.log(rowsForIconsElement); */
    rowsForIconsElement.classList.add('col');
    containerForInfo.append(rowsForIconsElement);

    let user = document.createElement('i');
    user.classList.add('fas', "fa-user", "iconS");
    user.innerText = " " + i;
    /*   console.log(user); */
    rowsForIconsElement.append(user);

    let timeIcon = document.createElement('i');
    timeIcon.classList.add('far', 'fa-clock', 'iconS')
    rowsForIconsElement.append(timeIcon);

    let timeValueIn = document.createElement('span');
    timeValueIn.classList.add('iconsText');
    let valueCooking = document.querySelector('input[name=cooking]').value;
    /* console.log(valueCooking); */
    timeValueIn.innerText = String(valueCooking) + " хвилин прийдеться готувати";
    rowsForIconsElement.append(timeValueIn);


    let iLevelofCook = document.createElement('i');
    rowsForIconsElement.append(iLevelofCook);
    iLevelofCook.classList.add('fab', 'fa-buromobelexperte', 'iconS');
    /* console.log(levelOfCook.title);     */
    let levelCooking = document.createElement('span');
    levelCooking.classList.add('iconsText');
    let levelOfCook = document.querySelector('input[name="difficulty"]:checked').value;
    /* console.log(levelOfCook + " наш рівень"); */
    levelCooking.innerText = String(levelOfCook);
    
    AddDescription();
    
    rowsForIconsElement.append(levelCooking);
    containerForInfo.append(rowsForIconsElement);
    i++;
    
    
}

function getText(){
    let doc = document.getElementById('description').value;
    console.log(doc);
    return doc;
}

function AddDescription(){
    let tempText = $('#description').val();
    console.log(tempText);
    let textDescR = document.createElement('p');
    document.getElementById("#describing").append(textDescR);
    textDescR.innerText = tempText;
    document.appendChild(textDescR);
}
