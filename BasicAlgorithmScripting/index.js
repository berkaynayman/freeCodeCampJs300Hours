/* ### Convert Celsius to Fahrenheit ### */
function convertToF(celsius){
    let fahrenheit;
    fahrenheit = (celsius*9/5) + 32;
    return fahrenheit;
}
console.log(convertToF(30));
/* ### Reverse String ### */
function reverseString(str) {
    let strRe ="";
    for(let i=str.length-1;i>=0;i--){
      strRe += str[i];
    }
    str = strRe;
    return str;
}
console.log(reverseString("hello"));
/* ### Faktoriyel ### */
function factorialize(num) {
    let numRe = 1;
    for(let i=1;i<=num;i++){
      numRe *= i;
    }
    num = numRe;
    return num;
}  
console.log(factorialize(5));
/* ### Cümle içerisinde en uzun kelime ### */
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
findLongestWordLength("Lorem kdnvks samf ppppp adovodsvm");
/* ### Verilen iç içe dizede en büyük sayıları return etmek ### */
function largestOfFour(arr) {
  let BigNumbers = [];
  for(let i=0;i<arr.length;i++){
    arr[i].sort(function(a,b){return b - a});
    BigNumbers.push(arr[i][0]);
  }
  return BigNumbers;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
/* ### kelime sonunu kontrol eden fonksiyon ### */
function confirmEnding(str, target) {
  return str.slice(str.length-target.length) == target ? true : false;
}
console.log(confirmEnding("Bastian", ""));
console.log(confirmEnding("Selam dünyalı, biz dostuz", "dostuz"));
