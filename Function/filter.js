// ##### filter()
const numbers = [12, 5, 8, 111, 66];
const result = numbers.filter(function(number){
    return number > 10
})
//const result = numbers.filter(number => number > 10);
console.log(result);

const names = ['berkay', 'nayman', 'ece', 'elif', 'neşe', 'loremipsum'];
console.log(names.filter(name => name.length > 4));

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

console.log(users.filter(user => user.age === 20)); // age: 20 olan userlaır getir

console.log(names.filter(name => name.includes('be'))); // içerisinde be geçenleri getirir.
console.log(names.filter(name => name.includes('ay'))); // içerisinde ay geçenleri getirir.

//arrow function
const search = (keyword, array) => array.filter(item => item.includes(keyword));
console.log(search('ay', names));