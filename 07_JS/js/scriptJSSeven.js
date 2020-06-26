/* window.alert("Hello"); */

document.querySelector("input[type='button']").onclick = () => {
    let redirect = document.querySelector("input").value;
    if (redirect.split("http").length == 1) {
        /* console.log(redirect.split("http")); */
        redirect = "http://" + redirect;
    }
    console.log(redirect);
    window.open(redirect);
    //location.href = redirect;
}

document.querySelector("input[name='check']").onclick = (e) => {
    let p = document.querySelector("p");
    let block = document.querySelector(".block");

    let clientLeft = block.clientLeft; //координати верх.лівої точки
    let clientTop = block.clientTop;

    let span = document.createElement("span");
    span.innerText = `Client left: ${clientLeft}; ClientTop: ${clientTop}`;
    p.append(span);

    let clientWidth = block.clientWidth;
    let clientHeight = block.clientHeight;
    span = document.createElement("span");
    span.innerHTML = `<br/>ClientWidth: ${clientWidth}; <b>ClientHeigth:</b> ${clientHeight}<br/>`;
    p.append(span);

    let offsetWidth = block.offsetWidth;
    let offsetHeight = block.offsetWidth;
    span = document.createElement("span");
    span.innerHTML = `<br/><b>offsetWidth:</b> ${offsetWidth}; <b>offsetHeight:</b> ${offsetHeight}<br/>`;
    p.append(span);

    let scrollWidth = block.scrollWidth;
    let scrollHeight = block.scrollHeight;
    span = document.createElement("span");
    span.innerHTML = `<br/><b>scrollWidth:</b> ${scrollWidth}; <b>scrollHeight:</b> ${scrollHeight}<br/>`;
    p.append(span);

    let offsetLeft = block.offsetLeft;
    let offsetTop = block.offsetTop;
    span = document.createElement("span");
    span.innerHTML = `<br><u>${block.offsetParent.nodeName}</u>`;
    span.innerHTML += `<br/><b>offsetLeft:</b> ${offsetLeft}; <b>offsetTop:</b> ${offsetTop}<br/>`;
    p.append(span);

};


window.onscroll = ()=>{
    let header = document.querySelector("header");
    let heightHeader = header.offsetHeight;
    console.log(heightHeader);

    if(window.pageYOffset > heightHeader){
        header.nextElementSibling.classList.add("fixed");
    }
    else{
        header.nextElementSibling.classList.remove("fixed");
    }
}

window.onscroll = ()=>{
    let textIn = document.querySelector(".textIn");
    let heightIn = textIn.scrollHeight;
    let res = document.querySelector(".buttonZ");
    console.log(window.pageYOffset);
    if(window.pageYOffset >= heightIn/2)
    {
        console.log(heightIn);
        res.style.visibility = "visible";
        res.style.display = "block";
    }
    if(window.pageYOffset < heightIn/2)
    {
        res.style.visibility = "hidden";
    }
}

let btn = document.querySelector(".buttonZ").addEventListener("click", DoAway);

function DoAway()
{
    window.scrollTo(0,0);
}