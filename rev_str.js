

function reverseString(str) {
  str_arr = str.split("");
  rev_arr = str_arr.reverse();
  rev_str = rev_arr.join("");
  return rev_str;
}

reverseString('hello');

