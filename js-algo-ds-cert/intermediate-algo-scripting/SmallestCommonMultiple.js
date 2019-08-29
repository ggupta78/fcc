

  function smallestCommons(arr) {
    let min = 0.0, max = 0.0;
    if(arr[0] < arr[1]) {
      min = arr[0]; max = arr[1];
    } else {
      min = arr[1]; max = arr[0];
    }

    //Generate entire range of numbers between min and max
    let range = [];
    for(let index = min; index <= max; index++) {
      range.push(index);
    }
    
  
    let lcd = range[range.length-1] * range[range.length-2];
  
    do {
      console.log("lcd:" + lcd);
      let isDivisibleByAll = true;
  
      for(let index=0; index < range.length; index++) {
      
        if(lcd % range[index] != 0) {
      
          isDivisibleByAll = false;
          break;
        }
      }
  
      if(isDivisibleByAll) {
        break;
      } else {
        lcd += range[range.length - 1];
      }
  
    } while(true)
  
    return lcd;
  }
  

  smallestCommons([1, 5]);
