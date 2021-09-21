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

// Verify an Object's Constructor with instanceof
terrier instanceof Dog_2; // true
hound instanceof Dog_2; // false

// Understand Own Properties
// Dog() ın içindeki name, color, numLegs properties dir
let ownProps = [];
for(let ccc in terrier){
    if(terrier.hasOwnProperty(ccc)){
        ownProps.push(ccc);
    }
}
console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
Dog_2.prototype.friends = "Shibiba";
console.log(terrier.friends);

// Iterate Over All Properties

function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property

// own property ve prototype property ayırmak
let ownProps1 = [];
let prototypeProps = [];
for(let property in terrier){
    if(terrier.hasOwnProperty(property)){
        ownProps1.push(property);
    }else{
        prototypeProps.push(property);
    }
}
console.log("ownProps1 - " + ownProps1);
console.log("prototypeProps - " + prototypeProps);

//Understand the Constructor Property

let duck1 = new Bird();
let beagle1 = new Dog();

console.log(duck1.constructor === Bird); //true
console.log(beagle1.constructor === Dog); // true

//Change the Prototype to a New Object

/*
Dog.prototype = {
  numLegs: 4,
  eat: function() { console.log("nom nom")},
  describe: function() { console.log("Hav Hav")},
};
*/