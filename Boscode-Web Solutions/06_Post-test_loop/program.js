$(document).ready(function () {
  $('#runButton').click(program);
});

var program = function() {
  var i = 24;

  do {
    if(i%2 == 1){
    console.log(i);
    }
    i++;
  } while ( !(i > 33) )

};
