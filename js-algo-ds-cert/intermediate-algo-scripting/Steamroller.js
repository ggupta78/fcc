  
  function steamrollArray(arr) {
    // I'm a steamroller, baby
    let result = [];
  
    var recursivePop = function(arg) {
        if(!Array.isArray(arg)) {
            result.push(arg);
        } else {
            arg.forEach(element => {
                recursivePop(element);
            });
        }
    };

    arr.forEach(element => {
        recursivePop(element);
    });
    
    console.log(result);
  
    return result;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);