
function where(arr, num) {
  // Find my place in this sorted array
  var sorted_arr = arr.sort();
  var index = 0;
  while (index < arr.length){
    if (num<=sorted_arr[index]){
      return index;
    }
    else{
      index = index + 1;
    }
  }
  return num;
}

where([40, 60], 50);
