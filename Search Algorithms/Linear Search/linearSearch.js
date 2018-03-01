var array = [3, 4 ,5 , 7, 9, 10, 37, 50];

function LinearSearch(AnArray, target) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == target){
      return i;
    }
  }
}
