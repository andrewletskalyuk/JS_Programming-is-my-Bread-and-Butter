class Figure {
    constructor(tag = 'div') {
        this.element = document.createElement(tag);
        this.element.style.marginBottom = '10px';
    }

    append() {
        document.body.append(this.element);
    }

    hide(){
        this.element.style.opacity = '0';
    }
    show(){
        this.element.style.opacity = '1';
    }
}


class Square extends Figure {
    constructor(side = 120, color = 'grey', tag) {
        super(tag);
        this.side = side;
        this.color = color;
    }

    create() {
        this.element.style.background = this.color;
        this.element.style.height = this.element.style.width = this.side + 'px';
        this.append();

        return this;
    }
}

class Circle extends Square {
    constructor(borderRadius, side, color, tag) {
        super(side, color, tag);
        this.borderRadius = borderRadius;
    }

    create() {
        this.element.style.background = this.color;
        this.element.style.height = this.element.style.width = this.side + 'px';
        this.element.style.borderRadius = this.borderRadius + '%';
        this.append();
        return this;
    }
}


let square = new Square(100, 'red').create();
let square1 = new Square(160, 'purple').create();
let circle = new Circle(50, 100, 'grey').create();

//це наш div
circle.element.addEventListener('mouseover', ()=>{
    circle.hide();
});
circle.element.addEventListener('mouseout', ()=>{
    circle.show();
});

square1.element.addEventListener('click', ()=>{
    square1.element.style.background = 'red';
})