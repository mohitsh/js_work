

function titleCase(str) {
  var str1 = str.toLowerCase();
  var str_arr = str1.split(" ");
  var ans_arr = [];
  for (var i = 0; i<str_arr.length; i++){
    ans_arr.push(str_arr[i].charAt(0).toUpperCase() + str_arr[i].substring(1,str_arr[i].length));
  }
  return ans_arr.join(" ");
}

titleCase("I'm a little tea pot");

