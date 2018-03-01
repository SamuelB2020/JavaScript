var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function BinarySearch(a, value) {
  var mid;
  var low = 0;
  var high = a.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (a[mid] > value) {
      high = mid - 1;
    } else if (a[mid] < value) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(BinarySearch(array,9));
