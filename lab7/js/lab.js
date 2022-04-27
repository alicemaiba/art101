// Summary: Lab 7: Functions
// Description: Experiment with basic JavaScript data types and variables.
// @author Alejandra Sicairos and Alice Aiba
// @created  4.26.22

var userName = window.prompt("Hi. Please tell me your name so I can sort it.");
sortString(userName)
function sortString(){
   // convert Str to array
   var array = userName.split('');
   // Reverse String
   array.sort();
   // convert array back to string
   var newStr = array.join('');
   // return the new str
   return newStr;
}

 //output
 document.writeIn("Oh hey, I've sorted your name:",
sortString(userName),"</br>");