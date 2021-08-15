/* ### push() & unshift() ### */
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
romanNumerals.push(twentyThree);
console.log(romanNumerals);

/* ### pop() & shift() ### */
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
greetings.shift();
console.log(greetings);

/* ### splice() ### */
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); // array = ['today', 'was', 'great']
let array1 = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array1.splice(3, 2); //newArray = ['really', 'happy'];
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

/* ### slice() ### */
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather = ['snow', 'sleet'];
// weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

/* ### Bir dizi spreat(...) operatörü ile kopyala ### */
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
//console.log(thatArray);
function copyMachine(arr, num) {
    let newArr = [];
    while(num>=1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
let thisArray1 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray1 = ['elma', 'temel', ...thisArray1, 'berkay'];
console.log(thatArray1);
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());

/* ### Array'de ögenin varlığını indexOf() ile kontrol et ### */
let fruits = ['elma', 'muz', 'armut', 'üzüm', 'karpuz'];
console.log(fruits.indexOf('elma'));
console.log(fruits.indexOf('yok'));
console.log(fruits.indexOf('üzüm'));
function quickCheck(arr, elem) {
    let check = arr.indexOf(elem);
    return check>-1 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* ### Dizilerde every(), forEach(), map() kullanarak işlem yapabiliriz
        ama for döngüsü bize daha fazla esneklik ve kontrol sağlar ### */
function greaterThanTen(arr) {
    let newArr = [];
    for(let i=0; i < arr.length ; i++){
        if(arr[i] > 10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(greaterThanTen([2,4,11,22,4453,25,9]));
function filteredArray(arr, elem) {
    let newArr = [];
    for(let i=0;i<arr.length;i++){
      let check = false;
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j] == elem){
          check = true;
        }
      }
      if(check == true){continue}
      newArr.push(arr[i]);
    }
    return newArr;
  }
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

/* ### Array Level ### */
let myNestedArray = [
    'level 1',                   /* myNestedArray[0]             */
    ['level 2'],	               /* myNestedArray[1][0]          */
    [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
    [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
    [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
];

/* ### Object Key-Value ### */
const contraCharacter = {
    player: 'Jho',
    fightingStyle: 'Lorem',
    human: false
};
contraCharacter.origin = 'USA'; // add
contraCharacter['hair color'] = "yellow"; // add
console.log(contraCharacter);
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data.online = 45;

let foods1 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    return foods1[scannedItem];
}
console.log(checkInventory("apples"));
delete foods1.oranges;
console.log(foods1);
let users = {
    Alan: { age: 27, online: true },
    Jeff: { age: 32, online: true },
    Sarah: { age: 48, online: true },
    Ryan: { age: 19, online: true }
};
function isEveryoneHere(userObj) {
if(userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
    ){ return true;}
    else{ return false; }
}
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
}
console.log(isEveryoneHere(users));
const customerCase = { 
    Alan:   {online: false},
    Jeff:   {online: true},
    Sarah:  {online: false} 
}
function countOnline(usersObj) {
    let countUsers = 0;
    for(let user in usersObj) {
      if(usersObj[user]["online"] == true){
        countUsers++;
      }
    }
    return countUsers;
}
console.log(countOnline(customerCase));
function getArrayOfUsers(obj) {
    let objName = [];
    for(let user in obj){
      objName.push(user);
    }
    return objName;
}  
console.log(getArrayOfUsers(customerCase));