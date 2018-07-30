function bouncer(arr) {
  var filteredArr = arr.filter(function(item) {
    var testItem = Boolean(item);
    if (testItem === false)
      return false;
    else
      return true;    
  });
  
  return filteredArr;
}

console.log(bouncer([7, false, null, "", 0, undefined, NaN, 9]).toString());