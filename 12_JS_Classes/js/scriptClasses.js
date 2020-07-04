class Dog {
    constructor(name, age, breed, energy) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.energy = energy;
    }
    ShowFog() {
        console.log(`Name: ${this.name}\nAge: ${this.age} \nBreed: ${this.breed} \nEnergy: ${this.energy}`)
    }

    SetName(name) {
        if (this.name === name) {
            console.log('однакові імена')
        } else {
            this.name = name;
        }
    }

    GetAge() {
        return this.age;
    }

    DogPlay(energy, sec) {
        if (this.energy < 0 || this.energy > 100) {
            this.DogDie();
            return;
        }
        console.log("Dog is playing");
        setTimeout(() => {
            this.energy -= sec * energy;
        }, sec * 1000);
    }
    DogDie() {
        console.log(`${this.name} is dead`);
    }

    DogEat(eat) {
        if (this.energy > 100) {
            this.DogDie();
            return;
        }
        console.log("Dog eating...")
        setTimeout(() => {
            this.energy += eat;
        }, 2000);
    }
}

class HunterDog extends Dog{
    constructor(name, age, breed, energy, power){
        super(name, age, breed, energy)
        this.power = power;
    }
    ShowFog() {
        /* console.log(`Name: ${this.name}\nAge: ${this.age} \nBreed: ${this.breed} \nEnergy: ${this.energy}`);
        this.ShowFog(); // тут помилка*/
        console.log(`Power: ${this.power}`); 
    }
}


let bobik = new Dog('Bobik', 3, 'Taxa', 100);
console.log(bobik);

/* for (let item in bobik) {
    console.log(bobik[item]);    
} */

/* bobik.SetName('Barsik');
bobik.ShowFog();
bobik.DogPlay(10,7);
bobik.DogEat(20);
bobik.DogPlay(20,3);
setTimeout(()=>{
    bobik.DogPlay(10,5);
}, 7000) */

let rex = new HunterDog('Rex', 5, 'ukrainian fast', 99, 50);
rex.ShowFog();
console.dir(rex);