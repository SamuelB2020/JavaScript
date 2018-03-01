function changeBinToDec(bin) {
 var string = bin.toString();
  var arrayBin = string.split("");
  var sum = 0;
  for (var i = 0; i < arrayBin.length; i++) {
    var index = arrayBin.length - i;
    if(arrayBin[i] == "1"){
      sum += Math.pow(2,index)
    }
  }
  return sum/2;
}

function ChangeDecToBin(integer) {
  var intSum = integer;
  var bases = [];
  var finalNumber = [];
while (intSum != 0) {
  var highest = workOutHighest2Power(intSum)
  intSum -= highest;
  bases.push(highest);
}
for (var i = 0; i < bases.length; i++) {
  if(bases.indexOf(Math.pow(2,i)) > -1){
    finalNumber.unshift(1);
  }
  else{
    finalNumber.unshift(0);
  }
}
console.log(finalNumber);



}
function holeFinder(arry) {
  var holes = [];
  for (var i = 0; i < Math.log2(arry[arry.length]); i++) {
    if(arry.indexOf(Math.pow(2,i)) == -1){
      holes.push(Math.pow(2,i));
    }
  }
  console.log(holes);
}

holeFinder(8,4,1)






function workOutHighest2Power(num) {
if(Math.pow( 2,Math.round(Math.log(num)/Math.log(2))) > num){
  return Math.pow( 2,Math.round(Math.log(num)/Math.log(2)) - 1);
}
else{
  return Math.pow( 2,Math.round(Math.log(num)/Math.log(2)));
}
}
//ChangeDecToBin(15)



//console.log(changeBinToDec("1011"));
