//document.querySelector("input[type='button']").addEventListener('click', init);
//document.querySelector("input[type='button']").addEventListener('click', initFetch);
document.querySelector("input[type='button']").addEventListener('click', initAsync);
const url = 'http://jsonplaceholder.typicode.com/posts';

function init(){
    let xhr =new  XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () =>{
        /* console.log(xhr.response); */
        let users = JSON.parse(xhr.response);
        console.log(users);
        createPost(users, 5);
    }
}

function initFetch() {
    //сходить сюди і візьме дані
    fetch(url)
    .then((response)=>{ //це прийде з проміса
        let data = response.json();
        return data;
        //return response.json(); //відповідь що прийшла перетворять до json
        //console.log(response);
    })
    .then((data)=>{
        createPost(data, 10);
    }); 
}

//це важливо і в нових запитах використовується
async function initAsync(){
    let response = await fetch(url);
    let data = await response.json();
    createPost(data, 15);
}

function createPost(users, number) {
    users.length = number; //from 100 to 5
    let container = users.map((item)=>{
        let post = document.createElement("div");
        post.classList.add("post");
        
        let h2 = document.createElement("h2");
        h2.innerText = `${item.id}) ${item.title}`;
        
        let p = document.createElement("p");
        p.innerText = item.body;

        post.append(h2); //додати елемент 
        post.append(p); //додати елемент 

        return post;
    });

    container.forEach((item) => {
        document.querySelector(".container").append(item);
    });
}