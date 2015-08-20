
function findLongestWord(str) {
  var str_arr = str.split(" ");
  var arr = [];
  for (var i = 0; i<str_arr.length; i++){
    arr.push(str_arr[i].length);
  }
   
  return (Math.max.apply(null,arr));
}

findLongestWord('The quick brown fox jumped over the lazy dog');

