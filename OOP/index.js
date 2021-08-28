// Create a Basic JS Object
let duck = {
    name : "Aflac",
    numLegs : 2,
    sayName: function() {return `The name of this duck is ${this.name}.` ;}
}
let dog = {
    name : "Shibiba",
    numLegs : 4,
    sayLegs : function() {return `This dog has ${this.numLegs} legs.` ;}
}

//Use Dot Notation to Access the Properties of an Object
console.log(dog.name + " " + dog.numLegs);

//Call a Method on an Object
console.log(duck.sayName());
console.log(dog.sayLegs());

// Define a Constructor Function
function Dog() {
    this.name = "Shibiba";
    this.color = "yellow";
    this.numLegs = 4;
}

// Use a Constructor to Create Objects
let hound = new Dog();

// Extend Constructors to Receive Arguments
function Dog_2(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog_2("terrier", "white");