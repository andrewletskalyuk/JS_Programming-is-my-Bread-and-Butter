let btn = document.querySelector("#btnSing").onclick = seeAll;
console.log(btn);
/* btn.onclick("seeAll"); */

let users = [
    {
        ID: "ID",
        Name: "name",
        Email: "email",
        Login: "login",
        Password: "password",
    }
];

function seeAll() {
  // document.querySelector(".InnerValue").style.display = "none";
    let allInfo = document.querySelector(".test");
    allInfo.classList.toggle("InnerValue");
}

let SingIn = document.querySelector("#btnGoTo").onclick = addInfo;

function addInfo(){
    let login =    
}