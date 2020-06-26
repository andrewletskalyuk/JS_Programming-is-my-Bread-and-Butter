/* setTimeout(()=>{
    alert("Hello");
}, 3000)//буде виконуватись
 */
/* let i = 1;
let interval = setInterval(() => {
    console.log(i++)
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 7000);

let user = {
    id: 1,
    name: 'Olia',

    helloUser: function () {
        console.log("Hello, ", this.name)
    }
}

//можна прив"язати контекст
let funcHello = user.helloUser.bind(user); //прив"язка юзера 
window.setTimeout(funcHello, 2000);
setTimeout(user.helloUser, 1000)

setTimeout(() => {
    user.helloUser()
}, 2000);

function hello() {
    let name = 'Vova';
    console.log("Hello", name);
}
console.log("code in console"); */

//client (index.html + script.js) -> Server(backend: asp.net, java, php) -> Database -> Server -> Client
/* setTimeout(() => {
    console.log('Client: Give me list of users...');
    setTimeout(() => {
        console.log('Server: Request to database');
        setTimeout(() => {
            console.log('DB: select * from users and return result');
            setTimeout(() => {
                console.log('Server: Process data from DB');
                setTimeout(() => {
                    console.log('Client: Got data. Ready to show');
                }, 1000);
            }, 500);
        }, 500);
    }, 1000);
}, 1000); */

//Більш сучасний підхідd
setTimeout(() => {
    console.log('Resolve - рішення, вирішувати');
}, 1000);

//reject - відмова //
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Server: Request to database');
        resolve(); //це callback якщо його немає то than не буде виконано
    }, 1000)
})
//promise створився а далі не пішли
//request - запит
promise.then(() => {
    return new Promise((resolve, reject) => setTimeout(() => {
        
        let users = [{
            id: 'id1',
            name: 'Olia',
            surname: 'Ivaniuk'
        },
        {
            id: 'id2',
            name: 'Alina',
            surname: 'Ruda'
        }]
        
        console.log('DB: select * from users and return result', users);
       //reject('error to connect with DB')
        resolve(users);
    }, 1000))
}).then((data) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        let users = data.map((item)=>{
            return {
                usercode: item.id,
                fullName: item.name + ' ' + item.surname
            }
        })
        console.log('Server: Process data from DB', users);
        resolve(users);
    }, 1000))
}).then((data) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        console.log('Client: Got data. Ready to show', data);
        let ul = document.createElement("ul");
        let li = data.map((item)=>{
            return `<li data-code=${item.usercode}>${item.fullName}</li>`
        })
        ul.innerHTML = li.join(' ');

        document.querySelector('h1').after(ul);

        //resolve();
    }, 1000))
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('finally')
})