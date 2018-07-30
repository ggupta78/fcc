function destroyer(arr) {
  // Remove all the values
  console.log(arguments);console.log(arguments[1]);console.log(arguments[2]); 
  var targetArr = arguments[0]; //Get target array
  //Get remaining arguments
  var otherArgs = [];
  for (var index = 1; index < arguments.length; index++) {
      otherArgs.push(arguments[index]);      
  }

  targetArr = targetArr.filter(function(item){
    var filterFlag = true;
    for (var index = 0; index < otherArgs.length; index++) {
        if (item === otherArgs[index]) {
            filterFlag = false;
            break;
        }
    }
    return filterFlag;
  });
  
  return targetArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3).toString());
