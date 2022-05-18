// Summary: Lab 13: Loops
// Description: Experiment with loops.
// @author Alejandra Sicairos and Alice Aiba
// @created  5.17.22

//print num 1-100
for (var i = 1; i <= 100; i++){
  var str = '';
  //if divisable by 2 print fizz
  if (i % 2 == 0){
    str += "Fizz";
  }
  //if divisable by 5 print buzz
  if(i % 5 == 0){
    str += "Buzz";
  }
  //if divisible by 9 print Bang
  if(i % 9 == 0){
    str += "Bang";
  }
  if (str == ''){
    console.log(i);
  }else{
    //if divisable by 3 and 5 bring both fizz and buzz
    console.log(str);
  }
  $("#output").append("<p>" + str +"</p>");)
}

$("button").click(function(){
  var output = FizzBuzz ();
})
