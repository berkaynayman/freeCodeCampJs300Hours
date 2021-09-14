// ##### includes() - bir ifaedede bizim belirlediğimiz öge geçiyormu geçmiyormu onu kontrol eder, true veya false döner
const numbers = [1, 3, 5, 7];
console.log(numbers.includes(3));
console.log(numbers.includes(8));

const names = ['berkay', 'nayman', 'ece', 'elif', 'neşe', 'loremipsum'];
console.log(names.includes("berkAy"));
console.log(names.includes("berkay"));
console.log(names.includes("ec")); // false döner çünkü dizi ögelerinde bir bütün olarak alır

const addNumber = number => {
    if(!numbers.includes(number)){
        numbers.push(number);
    }
}
addNumber(5);
addNumber(8);
addNumber(11);
addNumber(6);
console.log(numbers);

console.log(names.includes("elif",3)); // 3. index ve sonrasında elif diye öge varmı - TRUE
console.log(names.includes("elif",4)); // 4. index ve sonrasında elif diye öge varmı - FALSE

// index numarası olarak negatif değer de alır
console.log(names);
/*
    hesap = dizi uzunluğu + (index) = 6 + (-2) = 4 (kontrolun başlıyacağı dizin indexi)
    hesap = dizi uzunluğu + (index) = 6 + (-4) = 2
    hesap = dizi uzunluğu + (index) = 6 + (-100) = -96

*/
console.log(names.includes("ece", -2)); // false
console.log(names.includes("ece", -4)); // true
console.log(names.includes("ece", -100)); // true

