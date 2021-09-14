// reduce()

var numbers = [1, 2, 3, 4, 5, 6];
let total = numbers.reduce((acc, numbers) => acc + numbers); // numbersdaki sayıların toplamı 202
let total2 = numbers.reduce((acc, numbers) => acc + numbers, 5); // numbersdaki sayıların toplamı 202+5 = 207

const basket = [
    {
        name: "iPhone 8",
        price: 7000
    },
    {
        name: "Appke Mackbook Pro",
        price: 14000
    },
    {
        name: "Harman/Kardon",
        price: 2500
    }
]

// basket dizimdeki ürünlerin pricelarının toplamını öğrenmek istiyorum

let sum = basket.reduce((acc, product) => acc + product.price, 0); //burada 0' ı belirtmemiz gerek
//console.log(sum);

const names1 = ['Berkay', 'Mehmet', 'Elif', 'Simge', 'Kübra', 'Melek', 'Melek', 'Kübra', 'Kübra', 'Berkay'];
let countedNames1 = names1.reduce((allNames, name) => {
    if(name in allNames){
        allNames[name]++
    }else{
        allNames[name] = 1
    }
    return allNames
}, {})
console.log(countedNames1);

const products = [
    {
        name : "Pencil",
        brand : "FaberCastel"
    },
    {
        name : "Color-Pencil",
        brand : "FaberCastel"
    },
    {
        name : "Nokia X123DF",
        brand : "Nokia"
    },
    {
        name : "Headphone",
        brand : "Ttec"
    },
    {
        name : "Xperia XA1",
        brand : "Sony"
    }
]
// productsati ögelerimi brandlarına göre listelemek istiyorum
let group = 'brand';
const groupProducts = products.reduce((acc, product) => {
    /*console.log(" -- acc ---");
    console.log(acc);
    console.log(" -- product.brand -- "+ product.brand );*/
    let key = product[group];
    if(!acc[key]){
        acc[key] = []
    }
    acc[key].push(product);
    return acc;
}, {});
console.log(groupProducts);

const groupBy = (array, property) => {
    return array.reduce((acc, product) => {
        let key = product[property]
        if(!acc[key]){
            acc[key] = []
        }
        acc[key].push(product);
        return acc
    }, {})
}
console.log("********");
console.log(groupBy(products, 'brand'));

const posts = [
    {
        title : "Post 1",
        tags : ["html", "css"]
    },
    {
        title : "Post 2",
        tags : ["html", "javascript", "json"]
    },
    {
        title : "Post 3",
        tags : ["java", "C#"]
    }
]

// posts dizimdeki bütün taglari almak gerekiyor
const allTags = posts.reduce((acc, posts) => [...acc, ...posts.tags], [] );
console.log(allTags)

// tekrar eden ögeler olmasın istiyor isek
const result4 = allTags.reduce((acc, item) => {
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
}, [])
console.log(result4);

// ama bunun için js nin bize sunduğu bir function var onu kullanabiliriz
console.log([... new Set(allTags)]);