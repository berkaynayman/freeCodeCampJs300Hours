/* ### Convert Celsius to Fahrenheit ### */
function convertToF(celsius){
    let fahrenheit;
    fahrenheit = (celsius*9/5) + 32;
    return fahrenheit;
}
//console.log(convertToF(30));
/* ### Reverse String ### */
function reverseString(str) {
    let strRe ="";
    for(let i=str.length-1;i>=0;i--){
      strRe += str[i];
    }
    str = strRe;
    return str;
}
//console.log(reverseString("hello"));
/* ### Faktoriyel ### */
function factorialize(num) {
    let numRe = 1;
    for(let i=1;i<=num;i++){
      numRe *= i;
    }
    num = numRe;
    return num;
}  
//console.log(factorialize(5));
/* Cümle içerisinde en uzun kelime */
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