// ##### find() - filter a benzer sadece koşula uygun ilk elemanı return eder.
const numbers = [12, 5, 8, 111, 66];
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
/*console.log(users2.find(function(user){
    return user.id == 2;
}))*/
console.log(users2.find(user => user.id == 3));