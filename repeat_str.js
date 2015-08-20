

function repeat(str, num) {
  // repeat after me
  var ans_arr = [];
  if (num < 0){
    return '';
  }
  else{
    for (var i =0; i<num; i++){
      ans_arr.push(str);
    }
    return ans_arr.join("");
    
  }
  return str;
}

repeat('abc', 3);

