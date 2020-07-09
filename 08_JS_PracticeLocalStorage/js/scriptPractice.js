let btn = document.querySelector("#btnSing").onclick = seeAll;
console.log(btn);
/* btn.onclick("seeAll"); */
let Id = 1;
let position = 1;

function seeAll() {
    let allInfo = document.querySelector(".test");
    allInfo.classList.toggle("InnerValue");
    if (!allInfo.classList.contains("InnerValue")) {
        document.querySelector("#btnSing").innerHTML = "Sing up";
    } else {
        document.querySelector("#btnSing").innerHTML = "Sing in";
    }
}

let users = [{
    ID: "ID",
    Name: "name",
    Email: "email",
    Login: "login",
    Password: "password",
}];

let SingIn = document.querySelector("#btnGoTo").onclick = pushInfo;

function pushInfo() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let login = document.querySelector(".login").value;
    let password = document.querySelector(".password").value;
    console.log(name + " " + email + " " + login + " " + password);

    let user = {
        ID: Id++,
        Name: name,
        Email: email,
        Login: login,
        Password: password
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.open("user.html", "our user", "");
    /* showOurNewUserInOtherWindow(users, position); */
    position++;
}

/* function showOurNewUserInOtherWindow(users, position) {
    console.log(users);
    let inputDataUser = document.querySelector("#inputDataUser");
    inputDataUser.style.display = "none";
    window.open("user.html", "our user", "");
    let userName = document.querySelector("#userName");
    console.log(users[position]);
    userName.innerText = users[position].Name;
    let letter = document.querySelector("#letter");
    letter.innerText = userName[position].name[0].value;
} */