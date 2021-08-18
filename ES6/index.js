//"use strict"; // sıkı bir şekilde kodu derler. kodlama hatalarını, güvenli olmayan eylemleri getirir
let x=10; // let ile tanımlanan değişkenler blog dışında çağrılamaz
const FAV_PET = "Cats"; // const değişkenleri sabit olduğu için yazı tipi tümharflerbüyük ve _ ile ayrılı
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj); // obj yi freeze ediyoruz yani ekleme,güncelleme,silme işlemleri üzerinde yapılmaz
obj.review = "bad"; // hata verir
obj.newProp = "Test"; // hata verir
// satır da çalışan fonksiyonlar
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
const doubler = (item) => item * 2; // tek parametresi olduğu için - doubler = item => item * 2 - yazılabilir
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

const greeting = (name = "Ananoymus") => "Hello " + name;
console.log(greeting("Berkay"));
console.log(greeting());

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

// ES5 ile max değeri hesaplamak --
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
// ES6 ile max değeri hesaplamak ++
const maximus1 = Math.max(...arr);

// ES5 ile nesne değeri atamak --
const user = { name : "Berkay", age: 21};
//const name = user.name;
//const age = user.age;
// ES6 ile nesne değeri atamak ++
const {name , age } = user;
console.log(name);
// ES6 ile nesne değeri atamak ++
const { name: userName, age: userAge } = user;
console.log("---" + userName);
console.log("---" + userAge);

const kullanici = {
    berkayNayman :{
        age: 21,
        email : 'brky@mail.com'
    },
    ahmetMehmet :{
        age: 22,
        email : "ahmet@mail.com"
    }
};
//const { berkayNayman: {age, email}} = kullanici;
const { berkayNayman: {age: berkayAge, email: berkayMail},
        ahmetMehmet : {age: ahmetAge,  email: ahmetMail }} = kullanici;
console.log(ahmetAge);

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);// 1, 2, 5

//class
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
  
/*burada export yaparak dışa aktarırız
  ve farklı dosyalarda içer aktarabiliriz. */
  export const add = (x, y) => {
    return x + y;
  }

  const add = (x, y) => {
    return x + y;
  }
  export { add };

  // birden fazla export yapılır
  export { add, subtract };

  /* import etmek */
  import { add } from './math_functions.js';
  import { add, subtract } from './math_functions.js';

  /* dosya içerisindeki herşeyi import etmek */
  import * as myMathModule from "./math_functions.js";
  // kullanmak
  myMathModule.add(2,3);
  myMathModule.subtract(5,3);