

function palindrome(str) {
  // Good luck!
  var str2 = str.toLowerCase();
  var str1 = str2.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/ /g,'');
  
  rev_str = str1.split("").reverse().join("");
  if (str1 === rev_str){
    return true;
  }
  else{
    return false;
  }
}



palindrome("eye");

