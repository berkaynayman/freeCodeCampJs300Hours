/* ### Bir dizi spreat(...) operatörü ile kopyala ### */
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);
function copyMachine(arr, num) {
    let newArr = [];
    while(num>=1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
let thisArray1 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray1 = ['elma', 'temel', ...thisArray1, 'berkay'];
console.log(thatArray1);
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
console.log(spreadOut());

/* ### Array'de ögenin varlığını indexOf() ile kontrol et ### */
let fruits = ['elma', 'muz', 'armut', 'üzüm', 'karpuz'];
console.log(fruits.indexOf('elma'));
console.log(fruits.indexOf('yok'));
console.log(fruits.indexOf('üzüm'));
function quickCheck(arr, elem) {
    let check = arr.indexOf(elem);
    return check>-1 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
