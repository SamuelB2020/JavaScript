var initial = 2
var Pk = 1;
var Pks = [];
var highest = 0;
var highestIndex = 2;
do {
  var num1 = Math.pow(initial, 3)-1;
  var num2 = Math.pow(initial, 3)+1;
  Pk *= num1/num2
  Pks.push(Pk);
  initial++;
} while (initial <= 100000);
for (var i = 0; i < Pks.length; i++) {
  if(Pks[i] > 0.6666667000){
    highest = Pks[i];
    highestIndex = i+2;
  }
}
console.log(highest.toFixed(15));
console.log(highestIndex);
