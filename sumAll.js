function sumAll(arr) {
  var max = Math.max.apply(NaN,arr);
  var min = Math.min.apply(NaN,arr);
  var ans = [];
  for (var i = min; i<=max; i++){
   ans.push(i);
  }
  var dabba = ans.reduce(function(a,b){
    return a+b;
  });
  
  return(dabba);
}

sumAll([1, 4]);

