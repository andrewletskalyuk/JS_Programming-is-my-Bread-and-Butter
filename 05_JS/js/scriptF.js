document.body.onclick = function (event) {
    console.log(event);
    document.querySelector("h1").innerText = "You clicked on " + event.target.nodeName;
}

//click, doubleclick
document.body.addEventListener("click", function(event){
    this.querySelector(".first").style.left = event.clientX + "px";
    this.querySelector(".first").style.top = event.clientY + "px";

    //style.left = event.clientX + "px";
    //style.top = event.clientY + "px";
});

document.querySelector(".second").addEventListener("mousemove", function (event) {
    this.style.backgroundColor = `rgb(${event.clientX}, ${event.pageX}, ${event.pageY})`;
});

document.body.addEventListener("h1", function (event) {
    let bg = "";
    switch (event.which) {
        case 1:
            bg = "yellow";
            break;
        case 2:
            bg = "green";
    }
    this.style.backgroundColor = bg;
});

document.querySelector("h1").oncontexmenu= function(){return false;};

document.body.onkeydown = function(e){
    console.log(typeof(e));
    console.log(e);
    let text = "";
    if(e.altKey)
    {
        text += "Atl + ";
    }
    if(e.ctrlKey)
    {
        text += "Ctrl + ";
    }
    if(e.shiftKey)
    {
        text += "ShiftKey + ";
    }
    text += " " + e.key;
    document.getElementsByTagName("h1")[0].innerText = text;
    //заборонимо викликати стандартні натиски кніпок
    //e.preventDefault();
};

//blur - втрата фокусу
//1) focusin
//2) focus 
//3) focusout
//4) blur

document.querySelectorAll("input").forEach((x)=>x.onfocus = function(){
    this.classList.add("focused");
    /* this.style.color = "red";
    this.style.border = "1px solid red";
    this.style.outline = "none"; */
});

document.querySelectorAll("input").forEach((x)=>x.onblur = function(){
    this.classList.remove("focused");
    /* this.style.color = "red";
    this.style.border = "1px solid red";
    this.style.outline = "none"; */
});