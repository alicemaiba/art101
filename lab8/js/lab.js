/*
*Author: Alejandra Sicairos and Alice Aiba
*Created: 2 May
*Liscense: Public Domain
*/

function isEven(x){
return (x % 2 == 0);
}

// testing function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [35, 888, 2510, 7, 202201, 300, 99]
console.log("My Array", array);

var result = array.map(isEven);
// should return [false, true, true, false, false, true, false]
console.log("Test for evenness of array:", result);

var result = array.map(function(x){
    return x / 5;
})
// should return [7, 177.6, 502, 1.4, 40440.2, 60, 19.8]
console.log("Divisible of five array:", result);
