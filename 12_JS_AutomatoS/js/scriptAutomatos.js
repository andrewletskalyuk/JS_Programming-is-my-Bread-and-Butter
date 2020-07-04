let sum = 0;
let name = "";
let milkPrice = 1;
let sugar = 0;
let milk = 0;


$('#workout').on("click", function () {
    console.log(milk + " молоко");
    sum+=milk;
    console.log(sum + " ціна");
    $('#sum').text(sum);
    sum=0;

})

class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    ShowNameOfBeverage() {
        $('#beverage').text(this.name);
        sum = this.price;
    }
}

class Coffee extends Drink {
    constructor(sugar, milk, name = "Coffee", price = 5) {
        super(name, price)
        this.sugar = sugar;
        this.milk = milk;
    }
    ShowSugarAndMilk() {
        $('#sugar').text(this.sugar);
        $('#milk').text(this.milk);
        milk = parseInt($('#milk').text()) * milkPrice;
    }
}

class Tea extends Drink {
    constructor(sugar, milk, name = "Tea", price = 7, ) {
        super(name, price)
        this.sugar = sugar;
        this.milk = milk;
    }
    ShowSugarAndMilk() {
        $('#sugar').text(this.sugar);
        $('#milk').text(this.milk);
        milk = parseInt($('#milk').text()) * milkPrice;
    }
}

class Cappuchino extends Drink {
    constructor(sugar, milk, name = "Cappuchino", price = 9, ) {
        super(name, price)
        this.sugar = sugar;
        this.milk = milk;
    }
    ShowSugarAndMilk() {
        let temp = $('#sugar').text(this.sugar);
        console.log(temp)
        let temp1 = $('#milk').text(this.milk);
        console.log(temp1);
        let mText = parseInt($('#milk').text());
        console.log(mText);
        /* if (isNaN(mText)) {
            
        } */
        milk = mText * milkPrice;
        /* console.log(milk + "правильно ввели значення"); */
    }
}

class EarlGrey extends Drink {
    constructor(sugar, milk, name = "Earl Grey", price = 7) {
        super(name, price)
        this.sugar = sugar;
        this.milk = milk;
    }
    ShowSugarAndMilk() {
        $('#sugar').text(this.sugar);
        $('#milk').text(this.milk);
        milk = parseInt($('#milk').text()) * milkPrice;
    }
}

$("#coffee").on("click", function () {
    sugar = $('input[name="sugar"]').val();
    console.log(sugar);
    milk = $('input[name="milk"]').val();
    console.log(milk);
    let coffee = new Coffee(sugar, milk);
    console.log(coffee);
    coffee.ShowSugarAndMilk();
    coffee.ShowNameOfBeverage();
});

$('#tea').on("click", function () {
    sugar = $('input[name="sugar"]').val();
    console.log(sugar);
    milk = $('input[name="milk"]').val();
    console.log(milk);
    let tea = new Tea(sugar, milk);
    console.log(tea);
    tea.ShowNameOfBeverage();
    tea.ShowSugarAndMilk();
});

$('#cappuccino').on("click", function () {
    sugar = $('input[name="sugar"]').val();
    console.log(sugar);
    milk = $('input[name="milk"]').val();
    console.log(milk);
    let cappuchino = new Cappuchino(sugar, milk);
    console.log(cappuchino);
    cappuchino.ShowSugarAndMilk(sugar, milk);
    cappuchino.ShowNameOfBeverage();
});

$('#earlgrey').on("click", function () {
    sugar = $('input[name="sugar"]').val();
    console.log(sugar);
    milk = $('input[name="milk"]').val();
    console.log(milk);
    let earlgrey = new EarlGrey(sugar, milk);
    console.log(earlgrey);
    earlgrey.ShowSugarAndMilk(sugar, milk);
    earlgrey.ShowNameOfBeverage();
});
