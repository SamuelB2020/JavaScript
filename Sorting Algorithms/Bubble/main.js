var array = [2, 5, 9, 1, 7,9, 32,8, 8, 3, 4, 6];


function BubbleSort(ArrayToBeSorted) {
  var length = ArrayToBeSorted.length
while (length != 0) {
    for (var i = 1; i < length; i++) {
      var sorted = false;
      // If the element that is higher in the list is smaller swap places
      if(ArrayToBeSorted[i-1] > ArrayToBeSorted[i]){
        var temp = ArrayToBeSorted[i-1];
        ArrayToBeSorted[i-1] = ArrayToBeSorted[i];
        ArrayToBeSorted[i] = temp;
        sorted = true;
      }
    }
length--;
}
return ArrayToBeSorted
}
console.log(BubbleSort(array));
