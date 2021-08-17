val=2;
switch(val){
    case 1: answer = "a"; break;
    case 2: answer = "b"; break;
    default: answer = "c";
}
console.log(answer);
var myObj = {
    "name sur" : "Berkay Nayman",
    "country city" : "Turkey Ankara"
}
console.log(myObj["name sur"]);
console.log(myObj["country city"]);
console.log(myObj);
delete myObj["name sur"];
console.log(myObj);
var oneObj = {
    top : "hat",
    bottom : "pants",
    foots : "shoes"
}
console.log(oneObj.hasOwnProperty("top"));  //true
console.log(oneObj.hasOwnProperty("shoes")); //false
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}



