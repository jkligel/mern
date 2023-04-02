class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name + '\n');

        return this;
    }

    showStats(){
        console.log(this.name);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}` + '\n');

        return this;
    }

    drinkSake(){
        this.health += 10;

        return this;
    }
}

module.exports = Ninja;