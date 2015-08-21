

function mutation(arr) {
 var str1 = arr[0].toLowerCase().split('');
 var str2 = arr[1].toLowerCase().split('');
  
  var flag = true;
  var index = 0;
  while (flag && index < str2.length){
    if (str1.indexOf(str2[index]) === -1){
      flag = false;
    }
    else{
      flag = true;
    }
    index = index + 1;
  }
   
  return flag;
}

mutation(['hello', 'hey']);

