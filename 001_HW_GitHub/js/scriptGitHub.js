document.querySelector('#userName').addEventListener('keypress', userSearch)

let objDataUser;
let URL = 'https://api.github.com/users/';


function userSearch(e) {
    if (e.key == 'Enter') {
        URL += document.querySelector('#userName').value;
        console.log(URL);
        postData(URL);
    }
}

function postData(url) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function (responce) {
            objDataUser = responce;
            console.log(objDataUser);
            console.log(objDataUser.avatar_url);
            $('#userAvatar').attr('src', objDataUser.avatar_url);
            $('#name').text(objDataUser.name);
            console.log(objDataUser.name);
            $('#login').text(objDataUser.login);
            console.log(objDataUser.login);
            $('#urlTogithub').text(objDataUser.url);
            $('#blog').text(objDataUser.blog);
            $('#publicrepos').text(objDataUser.public_repos);
            $('#email').text(objDataUser.email);
            $('#followers').text(objDataUser.followers);
        }
    })
    URL = 'https://api.github.com/users/';
    console.log($('#userName'));
    $('#userName').text(" ");
}