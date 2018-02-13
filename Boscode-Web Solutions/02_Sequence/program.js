$(document).ready(function () {
  $('#runButton').click(add2Numbers);
});

var add2Numbers = function () {
  var firstNumber = $('#firstNumberInput').val();
  firstNumber = parseInt(firstNumber);

  var secondNumber = $('#secondNumberInput').val();
  secondNumber = parseInt(secondNumber);

  var total = firstNumber * secondNumber;

  console.log('The products of your 2 numbers is ' + total);
};
