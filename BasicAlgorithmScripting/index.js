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
/* ### Verilen stringi tekrarla ### */
function repeatStringNumTimes(str, num) {
  let strRet = "";
  if(num<0){
    return strRet;
  }
  for(let i=0;i<num;i++){
    strRet+=str;
  }
  return strRet;
}
repeatStringNumTimes("abc", 3);
/* ### string cut ### */
function truncateString(str, num) {
  if(str.length > num ){
    let strRet = "";
    strRet = str.slice(0,num) + "...";
    console.log(strRet);
    return strRet;
  }else{
    return str;
  }
}
/* ### çift sayıyı return etmek ### */
function findElement(arr, func) {
  let num = 0;
  for(let i=0;i<arr.length;i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return undefined;
}
document.write(findElement([1, 2, 3, 4], num => num % 2 === 0));
document.write(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
/* ### JS Veri Tipi Kontrolü */
function booWho(bool) {
  if(bool === true || bool === false){
    return true;
  }else{
    return false;
  }
  //return typeof bool === "boolean";
}
booWho(null);
/* ### Title Case a Sentence ### */
function titleCase(str){
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
console.log(titleCase("I'm a title tea pot"));
console.log(titleCase("bErkaY nAYMAn"));
/* ### Slice and Splice ###*/
function frankenSplice(arr1, arr2, n) {
  var cpyArr2 = [...arr2];
  var cpySpliceArr2 =  cpyArr2.splice(n,arr1.length, ...arr1);
  cpyArr2.push(...cpySpliceArr2);
  return cpyArr2;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
/* ### Falsy Bouncer ### */
function bouncer(arr) {
  var retArr = [];
  arr.map(function(item){
    if(Boolean(item)){
      retArr.push(item);
    }
  })
  return retArr;
}
bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]) // []
bouncer([null, NaN, 1, 2, undefined]) // [1,2]
/* ### Where do I Belong ### */
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([5, 3, 20, 3], 5);
/* ### Mutations ### */
function mutation(arr){
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for(let i=0 ; i < test.length ; i++){
    if(target.indexOf(test[i]) < 0) return false;
  }
  return true
}
mutation(["Mary", "Army"]);
mutation(["voodoo", "no"])