$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function() {
  var i = 1;

  while (i < 20) {
    if(i%2 == 0){
    console.log(i);
    }
    i++;
  }

};
