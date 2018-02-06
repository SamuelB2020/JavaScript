var array = [2, 5, 9, 1, 7, 8, 3, 4, 6];


function InsertionSort(arrayToBeSorted) {
var i = 1;
while (i < arrayToBeSorted.length) {
  var j = i;
  while (j > 0 && arrayToBeSorted[j-1] > arrayToBeSorted[j]) {
    var temp = arrayToBeSorted[j];
    arrayToBeSorted[j] = arrayToBeSorted[j-1]
    arrayToBeSorted[j-1] = temp;
    j--;
  }
  i++;
}
return arrayToBeSorted
}
console.log(InsertionSort(array));
