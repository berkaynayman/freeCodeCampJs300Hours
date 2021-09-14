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
console.log(result1);
const array5 = [...array4, 11];
const result2 = array5.every(number => number % 2 === 0)
const result3 = array5.every((number, index, arr) => {
//    console.log(index, arr);
    return number % 2 === 0
})
console.log(result3);
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
console.log(users.every(users => users.age === 20)); // false
console.log(users.every(users => users.age > 19)); // true