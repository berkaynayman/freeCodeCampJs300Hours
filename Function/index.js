// concat() - array birleşimi yapar
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];

const newArray = array1.concat(array2);
console.log(newArray);

const array3 = [['b','e'],'r'];
console.log(array3.concat(['k','a','y']));

/* every() - dizideki tüm değerleri test eder eğer bütün değerler
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