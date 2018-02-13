$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function () {
  console.log('Hello world');
  console.log(34 * 42);

  var number1 = 34;
  var number2 = 42;
  var result = number1 * number2;
  console.log('The result is ' + result);



};
