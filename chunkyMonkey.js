

function chunk(arr, size) {
  var final_arr = [];
  // Break it up.
  while (arr.length > 0){
    var ans_arr = [];
    var times = arr.length;
    if (size>times){
      for (var j = 0; j < times; j ++){
        ans_arr.push(arr.shift());
      }
      
    }
    else{
      for (var i = 0; i<size; i++){
      ans_arr.push(arr.shift());
      }
    }
    
     final_arr.push(ans_arr);
      
  }
  
  return final_arr;
}

chunk(['a', 'b', 'c', 'd'], 2);

