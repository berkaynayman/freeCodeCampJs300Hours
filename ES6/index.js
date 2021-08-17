"use strict"; // sıkı bir şekilde kodu derler. kodlama hatalarını, güvenli olmayan eylemleri getirir
let x=10; // let ile tanımlanan değişkenler blog dışında çağrılamaz
const FAV_PET = "Cats"; // const değişkenleri sabit olduğu için yazı tipi tümharflerbüyük ve _ ile ayrılı
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj); // obj yi freeze ediyoruz yani ekleme,güncelleme,silme işlemleri üzerinde yapılmaz
obj.review = "bad"; // hata verir
obj.newProp = "Test"; // hata verir