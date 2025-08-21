class Beverage{
    constructor(name,ounces,container = "bottle"){
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.isCold = false;
    }
 
    describe(){
        if(this.isCold){
           console.log(`${this.ounces} of ${this.name} is Cold ,is delivered in a ${this.container}`);
        }else{
        console.log(`${this.ounces} of ${this.name} is Hot ,is delivered in a ${this.container}, Please be careful, its HOT!!`);
        }
    }

    refrigerate(){
        this.isCold = true;
        console.log(`Its now cold`)
    }

}

let coffeeIced = new Beverage("Coffee",12);
coffeeIced.refrigerate();
coffeeIced.describe();
let chaiTeaLatte = new Beverage("Chai Tea Latte",16,"Cup");
chaiTeaLatte.describe();
let juice =  new Beverage("Straberry Lemonaid",16);
juice.refrigerate();
juice.describe();