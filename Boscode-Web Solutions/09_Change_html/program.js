$(document).ready(function () {
  $('#runButton').click(program);
  $('#clearButton').click(clear);
});

var currentInt = 0

var clear = function() {
  $('#outputDiv').html('');
};

var program = function() {
  currentInt++;
  console.log(currentInt);
  var text = '<p>' + currentInt + '</p>';
  $('#outputDiv').append(text);
};
