

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var str_list = str.split(' ');
  if(str_list[str_list.length-1] === target || str[str.length-1] === target){
    return true;
  }
  else{
    return false;
  }
  
}

end('Bastian', 'n');

