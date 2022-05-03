/*
*Author: Alejandra Sicairos and Alice Aiba
*Created: 2 May
*Liscense: Public Domain
*/

//@param: int/number
//@output: true or false
function isOdd(x){
  return (x % 2 != 0);
}

// testing function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

var array = [35, 888, 2510, 7, 202201, 300, 99];
console.log("My Array", array);

var evenResult = array.map(isOdd);
// should return [true, false, false, true, true, false, true]
console.log("Test for oddness of array:", oddResult);

var result = array.map(function(x){
    return x / 5;
})
// should return [7, 177.6, 502, 1.4, 40440.2, 60, 19.8]
console.log("Divisible of five array:", result);
