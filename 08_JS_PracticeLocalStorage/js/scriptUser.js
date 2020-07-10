let user = {
    Name: "",
    Email: "",
    Login: "",
    Password: ""
}

window.onload = () => {
    let data = localStorage.getItem("users");
    user = JSON.parse(data);
    console.log(user);
    document.querySelector("#userName").innerHTML = user[1].Name;
    document.querySelector("#letter").innerText = user[1].Name.split("")[0];
}




document.querySelector("#avatar").addEventListener("click", displayDate);

function displayDate() {
    let userName = document.querySelector("input[name='username']");
    let userEmail = document.querySelector("input[name='useremail']");
    let userLogin = document.querySelector("input[name='userlogin']");
    let userPassword = document.querySelector("input[name='userpassword']");
    /* console.log(userName);
    console.log(user[1].Name); */
    userName.value = user[1].Name;
    userEmail.value = user[1].Email;
    userLogin.value = user[1].Login;
    userPassword.value = user[1].Password;
}

document.querySelector("#saveChanges").addEventListener("click", () => {
    /* let inputs = document.querySelectorAll(".form-control");
    console.log(inputs);
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].addEventListener("change", myFunction)
    } */
    console.log(" просто експериментував");
});

let inputs = document.querySelectorAll(".form-control");
console.log(inputs);
for (let index = 0; index < inputs.length; index++) {
    console.log(inputs[index]);    
    inputs[index].addEventListener("change", myFunction);
}

function myFunction() {
    console.log(" функція, для зберігання даних");
    user[1].Name = document.querySelector("input[name='username']").value;
    //console.log(user[1].Name);
    user[1].Email = document.querySelector("input[name='useremail']").value;
    user[1].Login = document.querySelector("input[name='userlogin']").value;
    user[1].Password = document.querySelector("input[name='userpassword']").value;
    //console.log(user);
}