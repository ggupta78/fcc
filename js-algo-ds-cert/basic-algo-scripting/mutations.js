function mutation(arr) {
  var flag = true;
  var searchStr = arr[1].toLowerCase();
  var targetStr = arr[0].toLowerCase();

  for (var index = 0; index < searchStr.length; index++) {
      if (targetStr.indexOf(searchStr[index]) < 0) {
          flag = false;
          break;      
      }               
  }

  return flag;
}

console.log(mutation(["hello", "hey"]));