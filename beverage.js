// Beverage
// Define a Beverage class with properties name, ounces, container, and isCold.
// isCold should always be false at instantiation of an object.
// container should be optional and default to "bottle".
// Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the beverage is cold or not.
// Add a refrigerate() method outside the constructor that changes the value of isCold and prints a notification.
// Instantiate at least 3 different kinds of beverages with unique properties.
// Use the describe() method to print descriptions of each beverage.
// Use the refrigerate() method on one of the beverages, then call describe()  again.
class Beverage{
    constructor(name,ounces,container = "bottle"){
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.isCold = false;
    }
 
    describe(){
        if(this.isCold){
           console.log(`${this.ounces} of ${this.name} is served Cold and is delivered in a ${this.container}`);
        }else{
        console.log(`${this.ounces} of ${this.name} is served Hot and is delivered in a ${this.container}, Please be careful, its HOT!!`);
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