$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function () {
  var nameArray = ["John","Hassan","Chris","Mary", "Matthias"];

  console.log('The third name is: ' + nameArray[2]);

  nameArray[1] = 'Adam';

  for (var i = 0; i < 4; i = i + 1) {
    console.log('nameArray at index' + i + ' = ' + nameArray[i]);
  }

};
