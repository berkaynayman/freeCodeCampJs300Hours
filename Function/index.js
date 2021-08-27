// ##### concat() - array birleşimi yapar
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];

const newArray = array1.concat(array2);
//console.log(newArray);

const array3 = [['b','e'],'r'];
//console.log(array3.concat(['k','a','y']));

/* ##### every() - dizideki tüm değerleri test eder eğer bütün değerler
geçer ise true döner bir tanesi bile koşulu geçmes ise false döner */

const array4 = [2,4,6,8,10];
/*const result1 = array4.every(function(number){
    return number >= 2
})*/
//const check1 = number => number >= 2;
const check1 = function(number){
    return number >= 2;
}
const result1 = array4.every(check1);
//console.log(result1);
const array5 = [...array4, 11];
const result2 = array5.every(number => number % 2 === 0)
const result3 = array5.every((number, index, arr) => {
//    console.log(index, arr);
    return number % 2 === 0
})
//console.log(result3);
const users = [
    {
        name: "Berkay",
        age : 20
    },
    {
        name: "Temel",
        age : 61
    },
    {
        name: "Ali",
        age : 53
    }
]
// tüm userların yaşı 20 mi ?
//console.log(users.every(users => users.age === 20)); // false
//console.log(users.every(users => users.age > 19)); // true

// ##### filter()
const numbers = [12, 5, 8, 111, 66];
const result = numbers.filter(function(number){
    return number > 10
})
//const result = numbers.filter(number => number > 10);
console.log(result);

const names = ['berkay', 'nayman', 'ece', 'elif', 'neşe', 'loremipsum'];
console.log(names.filter(name => name.length > 4));

console.log(users.filter(user => user.age === 20)); // age: 20 olan userlaır getir

//console.log(names.filter(name => name.includes('be'))); // içerisinde be geçenleri getirir.
//console.log(names.filter(name => name.includes('ay'))); // içerisinde ay geçenleri getirir.

//arrow function
const search = (keyword, array) => array.filter(item => item.includes(keyword));
console.log(search('ay', names));

// ##### find() - filter a benzer sadece koşula uygun ilk elemanı return eder.
const found = numbers.find(number => number > 100);
console.log(found);

const users2 = [
    {
        id : 1,
        name : "Berkay"
    },
    {
        id : 2,
        name : "Burhan"
    },
    {
        id : 3,
        name : "Burak"
    }
]
console.log(users2.find(function(user){
    return user.id == 2;
}))
console.log(users2.find(user => user.id == 3));