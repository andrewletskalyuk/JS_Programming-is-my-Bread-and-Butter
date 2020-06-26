let users = [
    {
        ID: "ID",
        Name: "name",
        Email: "email",
        Tel: "tel",
        Message: "message"
    }
];
let Id = 1;

function getData() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let tel = document.querySelector("input[type='tel']").value;
    let message = document.querySelector("textarea").value;

    const data = {
        ID: Id++,
        Name: name,
        Email: email,
        Tel: tel,
        Message: message
    };

    users.push(data);
    printUsers(users);
}

function printUsers(data) {
    console.log(data);
    let table = document.querySelector("table>tbody");

    console.log(table.children);
    //додаємо масив 
    while(table.children.length > 0)
    {
        table.lastElementChild.remove();
    }

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (let item in data[i]) {
            console.log(data[i]);
            let td = document.createElement("td");
            td.innerText = data[i][item];
            tr.append(td); //додати в кінець ноди
        }
        //table.appendChild(tr);
        table.prepend(tr);
    }
}

document.querySelector("input[type='button']").onclick = getData;