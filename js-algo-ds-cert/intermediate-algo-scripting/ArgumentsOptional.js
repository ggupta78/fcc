function addTogether() {
  
  if(arguments.length > 1) {
    if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number")
      return undefined;
    
    return arguments[0] + arguments[1];

  } else {
    if(typeof arguments[0] !== "number")
      return undefined;
    
    let captured = arguments[0];
    
    var oneArgFunc = function(y) {
      if(typeof y !== "number")
        return undefined;
      
      return captured + y;
    }
    return oneArgFunc;
  }  
}

console.log(addTogether(2)(3));