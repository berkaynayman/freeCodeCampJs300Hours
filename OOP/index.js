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

//Understand Where an Object’s Prototype Comes From
console.log(Bird.prototype.isPrototypeOf(duck1)); //true
console.log(Dog.prototype.isPrototypeOf(beagle1)); //true


//Change the Prototype to a New Object

/*
Dog.prototype = {
    prototype kullandığımız zaman constuctor: Dog ile bunu belirtmemiz gerekiyor yoksa constructor kontrolünde false döner
  constructor: Dog,
  numLegs: 4,
  eat: function() { console.log("nom nom")},
  describe: function() { console.log("Hav Hav")},
};
*/
/* Remember to Set the Constructor Property when Changing the Prototype
    prototype kullandığımız zaman constuctor: Dog ile bunu belirtmemiz gerekiyor yoksa constructor kontrolünde false döner
*/

//Understand the Prototype Chain
console.log(Dog.prototype.isPrototypeOf(beagle1));
console.log(Object.prototype.isPrototypeOf(Dog.prototype));

// Use Inheritance So You Don't Repeat Yourself

/*

XXXXX RONG XXXXX

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

XXXX TRUE XXXX

function Animal() { };
Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

*/

//Inherit Behaviors from a Supertype

//let duck = Object.create(Animal.prototype);
//let beagle = Object.create(Animal.prototype);

/*
Set the Child's Prototype to an Instance of the Parent

Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird("Donald");
duck.eat();

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
*/

//Reset an Inherited Constructor Property

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

//Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog_3() {};
Dog_3.prototype = Object.create(Animal.prototype);
Dog_3.prototype.constructor = Dog_3;

Dog_3.prototype.bark = function() { console.log("Woof!");}
let beagle_3 = new Dog_3();
console.log(beagle_3.eat());

//Override Inherited Methods

Dog_3.prototype.eat = function(){
  console.log("HRHRHRHRHRH");
}
console.log(beagle_3.eat());

// Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name : "Duffy",
  numLegs : 2
}

let boat = {
  name : "Derya",
  type : "race-boat"
}

let glideMixin = (obj) => {
  obj.glide = () => {
    console.log("glide");
  }
}

glideMixin(bird);
glideMixin(boat);
console.log(bird);

/* Nesne içindeki veriler çok kolay değiştirilebilir aşağıdaki gibi
   bird.name = "Duffy";
   
   bu verilerin bu kadar kolay değiştirilmesini istemeyiz çünkü
   bu veriler banka bilgilerini içerebilir.
*/

function Bird_1(){
  let weight = 15;
  this.getWeight = () => {
    return weight
  };
}

let Duffy = new Bird_1();
console.log(Duffy.getWeight());

// Immediately Invoked Function Expression(IIFE)

(function () {
  console.log("-");
})();

//Use an IIFE to Create a Module

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding");
      };
    },
    flyMixin : function(obj) {
      obj.fly = function() {
        console.log("flying");
      };
    }
  }
})();

motionModule.glideMixin(Duffy);
Duffy.glide();

let funModule = (function () {
  return{
    isCuteMixin : function() {
      return true
    },
    singMixin : function() {
      console.log("Sigin");
    }
  }
})();

funModule.isCuteMixin();
funModule.singMixin();