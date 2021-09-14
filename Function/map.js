// ##### map() - dizideki tüm elemanları işlemden geçirmemizi sağlar
const numbers = [1, 4, 9];
const Result = numbers.map(function(number){
    return number * 2; 
})
//const Result = numbers.map(number => Math.sqrt(number));
console.log("Result " + Result);

const users = [
    {
        name: "Berkay",
        surname : "Nayman",
        age: 21
    },
    {
        name: "Temel",
        surname: "Dursun",
        age: 61
    }
]

const date = new Date()
const Result1 = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})
console.log(Result1);