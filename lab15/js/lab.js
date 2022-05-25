// Summary: Lab 15: AJAX
// Description: Use AJAX to get info from external resources.
// @author Alice Aiba and Alejandra Sicairos
// @Created  5.24.22

function getAjax(str) {
$("#output").html("");
var pokemon = str.toLowerCase();
//The URL for the request (from the api docs)
var endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
//Usin the core $.ajax() method
  $.ajax({
      // API endpoint
      url: endpoint,
      // Any data to send
    	data: { id: 2623},
      // POST or GET request
      type: "GET",
    })
    .done(function(data) {
    console.log("works");
      $("#output").append("<img src=" + data.sprites.front_default + ">");
    })
    //What we do if the api fails
    .fail(function(request, error) {
      $("#output").html("Error: Check Spelling");
    });
}

$("#button").click(function(){
	var name = $("#input").val();
  getAjax(name);
});
