var array = [2, 5, 9, 1, 7, 8, 3, 4, 6];

function SelectionSort(arrayToBeSorted) {
for (var current = 0; current < arrayToBeSorted.length -1; current++) {
  var min = current
  for (var i = current+1; i < arrayToBeSorted.length; i++) {
    if (arrayToBeSorted[min] > arrayToBeSorted[i]) {
      min = i
    }
    }
    if (min != current) {
      var temp = arrayToBeSorted[current];
      arrayToBeSorted[current] = arrayToBeSorted[min];
      arrayToBeSorted[min] = temp;
    }
  }
return arrayToBeSorted
}
console.log(SelectionSort(array));
