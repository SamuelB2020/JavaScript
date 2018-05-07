const fs = require('fs');
// Requires input from a file input.txt
fs.readFile('input.txt','utf-8', (err, data) => {
  data = data.split("\n")
  data.pop();
  for (var i = 1; i < data.length; i++) {
    console.log(GetLifePathNumber(data[i]) + " " + data[i]);
  }
});
function Reduce(num) {
while (num > 9 && num%11 != 0) {
var tempnum = 0;
num = String(num);
for (var i = 0; i < num.length; i++) {
  tempnum += parseInt(num[i])
}
num = tempnum;
}
return num;
}
function GetLifePathNumber(dateString) {
dateString = dateString.split("/");
var threeReduced = [];
for (var i = 0; i < dateString.length; i++) {
threeReduced.push(Reduce(parseInt(dateString[i])));
}
return Reduce(threeReduced[0] + threeReduced[1] + threeReduced[2])
}
