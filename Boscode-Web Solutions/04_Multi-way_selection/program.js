$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function() {
var diceFace = "one";
console.log(diceStringToInt(diceFace))


};



function diceStringToInt(diceFace){
switch (diceFace){
  case "one":
  return 1;
  case "two":
  return 2
  case "three":
  return 3
  case "four":
  return 4
  case "five":
  return 5
  case "six":
  return 6
  default:
  return "Invalid Dice Face Entered"
}
}