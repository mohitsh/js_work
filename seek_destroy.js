
function destroyer(arr) {
  // Remove all the values
  dest = Array.prototype.slice.call(arguments, 1);
  array = Array.prototype.slice.call(arguments, 0)[0];

  for (var i = 0; i<dest.length; i++){
    element = dest[i];
    
    while(array.indexOf(element) !== -1){
      index = array.indexOf(element);
      array.splice(index,1);  
    }
    
  }
  return array;
  //return Array.prototype.slice.call(arguments, 0)[0];
  //return arr.filter(funcDest);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

