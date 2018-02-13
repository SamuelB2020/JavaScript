$(document).ready(function () {
  $('#runButton').click(CheckIfEligible);
});

var CheckIfEligible = function (){
var age = parseInt($("#guessInput").val());


  if(age >= 18){
    $("#Display").text("You Can Vote")
  }
  else{
     $("#Display").text("You are too young to Vote");
  }

};
